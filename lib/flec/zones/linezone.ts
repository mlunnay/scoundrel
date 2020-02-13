import { Zone } from './zone';
import { Vector2, Random } from "../../core";
import { Particle } from "../particles";

/**
 * The LineZone zone defines a zone that contains all the points on a line.
 */
export class LineZone implements Zone {
    private _start: Vector2;
    private _end: Vector2;
    private _length: Vector2;
    private _normal: Vector2;
    private _parallel: Vector2;

    /**
     * The constructor creates a LineZone zone.
     * 
     * @param start The point at one end of the line.
     * @param end The point at the other end of the line.
     */
    constructor(start: Vector2 = new Vector2(0, 0), end: Vector2 = new Vector2(0, 0)) {
        this._start = start;
        this._end = end;
        this.setLengthAndNormal();
    }

    private setLengthAndNormal(): void {
        this._length = this._end.subtract(this._start);
        this._parallel = this._length.normalize();
        this._normal = new Vector2(this._parallel.y, - this._parallel.x);
    }

    /**
     * The point at one end of the line.
     */
    public get start(): Vector2 {
        return this._start;
    }

    public set start(value: Vector2) {
        this._start = value;
        this.setLengthAndNormal();
    }

    /**
     * The point at the other end of the line.
     */
    public get end(): Vector2 {
        return this._end;
    }

    public set end(value: Vector2) {
        this._end = value;
        this.setLengthAndNormal();
    }

    /**
     * The x coordinate of the point at the start of the line.
     */
    public get startX(): number {
        return this._start.x;
    }

    public set startX(value: number) {
        this._start.x = value;
        this._length = this._end.subtract(this._start);
    }

    /**
     * The y coordinate of the point at the start of the line.
     */
    public get startY(): number {
        return this._start.y;
    }

    public set startY(value: number) {
        this._start.y = value;
        this._length = this._end.subtract(this._start);
    }

    /**
     * The x coordinate of the point at the end of the line.
     */
    public get endX(): number {
        return this._end.x;
    }

    public set endX(value: number) {
        this._end.x = value;
        this._length = this._end.subtract(this._start);
    }

    /**
     * The y coordinate of the point at the end of the line.
     */
    public get endY(): number {
        return this._end.y;
    }

    public set endY(value: number) {
        this._end.y = value;
        this._length = this._end.subtract(this._start);
    }

    /**
     * @inheritDoc
     */
    public contains(x: number, y: number): boolean {
        // not on line if dot product with perpendicular is not zero
        if ((x - this._start.x) * this._length.y - (y - this._start.y) * this._length.x != 0) {
            return false;
        }
        // is it between the points, dot product of the vectors towards each point is negative
        return (x - this._start.x) * (x - this._end.x) + (y - this._start.y) * (y - this._end.y) <= 0;
    }

    /**
     * @inheritDoc
     */
    public getLocation(): Vector2 {
        var ret: Vector2 = this._start.clone();
        var scale: number = Random.random.random();
        ret.x += this._length.x * scale;
        ret.y += this._length.y * scale;
        return ret;
    }

    /**
     * @inheritDoc
     */
    public getArea(): number {
        // treat as one pixel tall rectangle
        return this._length.length();
    }

    /**
     * Manages collisions between a particle and the zone. The particle will collide with the line defined
     * for this zone. In the interests of speed, the collisions are not exactly accurate at the ends of the
     * line, but are accurate enough to ensure the particle doesn't pass through the line and to look
     * realistic in most circumstances. The collisionRadius of the particle is used when calculating the collision.
     * 
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     * 
     * @return Whether a collision occured.
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        // if it was moving away from the line, return false
        var previousDistance: number = (particle.previousX - this._start.x) * this._normal.x + (particle.previousY - this._start.y) * this._normal.y;
        var velDistance: number = particle.velX * this._normal.x + particle.velY * this._normal.y;
        if (previousDistance * velDistance >= 0) {
            return false;
        }

        // if it is further away than the collision radius and the same side as previously, return false
        var distance: number = (particle.x - this._start.x) * this._normal.x + (particle.y - this._start.y) * this._normal.y;
        if (distance * previousDistance > 0 && (distance > particle.collisionRadius || distance < -particle.collisionRadius)) {
            return false;
        }

        // move line collisionradius distance in direction particle was, extend it by collision radius
        var offsetX: number;
        var offsetY: number;
        if (previousDistance < 0) {
            offsetX = this._normal.x * particle.collisionRadius;
            offsetY = this._normal.y * particle.collisionRadius;
        }
        else {
            offsetX = - this._normal.x * particle.collisionRadius;
            offsetY = - this._normal.y * particle.collisionRadius;
        }
        var thenX: number = particle.previousX + offsetX;
        var thenY: number = particle.previousY + offsetY;
        var nowX: number = particle.x + offsetX;
        var nowY: number = particle.y + offsetY;
        var startX: number = this._start.x - this._parallel.x * particle.collisionRadius;
        var startY: number = this._start.y - this._parallel.y * particle.collisionRadius;
        var endX: number = this._end.x + this._parallel.x * particle.collisionRadius;
        var endY: number = this._end.y + this._parallel.y * particle.collisionRadius;

        var den: number = 1 / ((nowY - thenY) * (endX - startX) - (nowX - thenX) * (endY - startY));

        var u: number = den * ((nowX - thenX) * (startY - thenY) - (nowY - thenY) * (startX - thenX));
        if (u < 0 || u > 1) {
            return false;
        }

        var v: number = - den * ((endX - startX) * (thenY - startY) - (endY - startY) * (thenX - startX));
        if (v < 0 || v > 1) {
            return false;
        }

        particle.x = particle.previousX + v * (particle.x - particle.previousX);
        particle.y = particle.previousY + v * (particle.y - particle.previousY);

        var normalSpeed: number = this._normal.x * particle.velX + this._normal.y * particle.velY;
        var factor: number = (1 + bounce) * normalSpeed;
        particle.velX -= factor * this._normal.x;
        particle.velY -= factor * this._normal.y;
        return true;
    }
}
import { Zone } from './zone';
import { Vector2 } from "../../core";
import { Particle } from "../particles";

/**
 * The PointZone zone defines a zone that contains a single point.
 */
export class PointZone implements Zone {
    private _point: Vector2;

    /**
     * The constructor defines a PointZone zone.
     * 
     * @param point The point that is the zone.
     */
    constructor(point: Vector2 = new Vector2(0, 0)) {
        this._point = point;
    }

    /**
     * The point that is the zone.
     */
    public get point() {
        return this._point;
    }

    public set point(value: Vector2) {
        this._point = value;
    }

    /**
     * The x coordinate of the point that is the zone.
     */
    public get x(): number {
        return this._point.x;
    }

    public set x(value: number) {
        this._point.x = value;
    }

    /**
     * The y coordinate of the point that is the zone.
     */
    public get y(): number {
        return this._point.y;
    }

    public set y(value: number) {
        this._point.y = value;
    }

    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     * 
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    public contains(x: number, y: number): boolean {
        return this._point.x == x && this._point.y == y;
    }

    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     * 
     * @return a random point inside the zone.
     */
    public getLocation(): Vector2 {
        return this._point.clone();
    }

    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually, 
     * it need not be called directly by the user.
     * 
     * @return a random point inside the zone.
     */
    public getArea(): number {
        // treat as one pixel square
        return 1;
    }

    /**
     * Manages collisions between a particle and the zone. Particles will colide with the point defined 
     * for this zone. The collisionRadius of the particle is used when calculating the collision.
     * 
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     * 
     * @return Whether a collision occured.
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        var relativePreviousX: number = particle.previousX - this._point.x;
        var relativePreviousY: number = particle.previousY - this._point.y;
        var dot: number = relativePreviousX * particle.velX + relativePreviousY * particle.velY;
        if (dot >= 0) {
            return false;
        }
        var relativeX: number = particle.x - this._point.x;
        var relativeY: number = particle.y - this._point.y;
        var radius: number = particle.collisionRadius;
        dot = relativeX * particle.velX + relativeY * particle.velY;
        if (dot <= 0) {
            if (relativeX > radius || relativeX < -radius) {
                return false;
            }
            if (relativeY > radius || relativeY < -radius) {
                return false;
            }
            if (relativeX * relativeX + relativeY * relativeY > radius * radius) {
                return false;
            }
        }

        var frameVelX: number = relativeX - relativePreviousX;
        var frameVelY: number = relativeY - relativePreviousY;
        var a: number = frameVelX * frameVelX + frameVelY * frameVelY;
        var b: number = 2 * (relativePreviousX * frameVelX + relativePreviousY * frameVelY);
        var c: number = relativePreviousX * relativePreviousX + relativePreviousY * relativePreviousY - radius * radius;
        var sq: number = b * b - 4 * a * c;
        if (sq < 0) {
            return false;
        }
        var srt: number = Math.sqrt(sq);
        var t1: number = (-b + srt) / (2 * a);
        var t2: number = (-b - srt) / (2 * a);
        var t: number[] = [];

        if (t1 > 0 && t1 <= 1) {
            t.push(t1);
        }
        if (t2 > 0 && t2 <= 1) {
            t.push(t2);
        }
        var time: number;
        if (t.length == 0) {
            return false;
        }
        if (t.length == 1) {
            time = t[0];
        }
        else {
            time = Math.min(t1, t2);
        }
        var cx: number = relativePreviousX + time * frameVelX + this._point.x;
        var cy: number = relativePreviousY + time * frameVelY + this._point.y;
        var nx: number = cx - this._point.x;
        var ny: number = cy - this._point.y;
        var d: number = Math.sqrt(nx * nx + ny * ny);
        nx /= d;
        ny /= d;
        var n: number = frameVelX * nx + frameVelY * ny;
        frameVelX -= 2 * nx * n;
        frameVelY -= 2 * ny * n;
        particle.x = cx + (1 - time) * frameVelX;
        particle.y = cy + (1 - time) * frameVelY;
        var normalVel: number = particle.velX * nx + particle.velY * ny;
        particle.velX -= (1 + bounce) * nx * normalVel;
        particle.velY -= (1 + bounce) * ny * normalVel;
        return true;
    }
}
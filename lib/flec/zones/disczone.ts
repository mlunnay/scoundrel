import { Zone } from './zone';
import { Vector2, Random } from "../../core";
import { Particle } from "../particles";

const TWOPI = Math.PI * 2;

/**
 * The DiscZone zone defines a circular zone. The zone may
 * have a hole in the middle, like a doughnut.
 */
export class DiscZone implements Zone {
    private _center: Vector2;
    private _innerRadius: number;
    private _outerRadius: number;
    private _innerSq: number;
    private _outerSq: number;

    /**
     * The constructor defines a DiscZone zone.
     * 
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all 
     * points inside the outer radius are included in the zone.
     */
    constructor(center: Vector2 = new Vector2(0,0), outerRadius: number = 0, innerRadius: number = 0) {
        if (outerRadius < innerRadius) {
            throw new Error("The outerRadius (" + outerRadius + ") can't be smaller than the innerRadius (" + innerRadius + ") in your DiscZone. N.B. the outerRadius is the second argument in the constructor and the innerRadius is the third argument.");
        }
        this._center = center.clone();
        this._innerRadius = innerRadius;
        this._outerRadius = outerRadius;
        this._innerSq = this._innerRadius * this._innerRadius;
        this._outerSq = this._outerRadius * this._outerRadius;
    }

    /**
     * The centre of the disc.
     */
    public get center(): Vector2 {
        return this._center;
    }

    public set center(value: Vector2) {
        this._center = value;
    }

    /**
     * The x coordinate of the point that is the center of the disc.
     */
    public get centerX(): number {
        return this._center.x;
    }

    public set centerX(value: number) {
        this._center.x = value;
    }

    /**
     * The y coordinate of the point that is the center of the disc.
     */
    public get centerY(): number {
        return this._center.y;
    }

    public set centerY(value: number) {
        this._center.y = value;
    }

    /**
     * The radius of the inner edge of the disc.
     */
    public get innerRadius(): number {
        return this._innerRadius;
    }

    public set innerRadius(value: number) {
        this._innerRadius = value;
        this._innerSq = this._innerRadius * this._innerRadius;
    }

    /**
     * The radius of the outer edge of the disc.
     */
    public get outerRadius(): number {
        return this._outerRadius;
    }

    public set outerRadius(value: number) {
        this._outerRadius = value;
        this._outerSq = this._outerRadius * this._outerRadius;
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
        x -= this._center.x;
        y -= this._center.y;
        var distSq: number = x * x + y * y;
        return distSq <= this._outerSq && distSq >= this._innerSq;
    }

    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     * 
     * @return a random point inside the zone.
     */
    public getLocation(): Vector2 {
        var rand: number = Random.random.random();
        var r = this._innerRadius + (1 - rand * rand) * (this._outerRadius - this._innerRadius);
        var angle = Math.random() * TWOPI;
        var point: Vector2 = new Vector2(r * Math.cos(angle), r * Math.sin(angle));
        point.x += this._center.x;
        point.y += this._center.y;
        return point;
    }

    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually, 
     * it need not be called directly by the user.
     * 
     * @return a random point inside the zone.
     */
    public getArea(): number {
        return Math.PI * (this._outerSq - this._innerSq);
    }

    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the disc defined for this zone, from inside or outside the disc.  The collisionRadius of the 
     * particle is used when calculating the collision.
     * 
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     * 
     * @return Whether a collision occured.
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        var outerLimit: number;
        var innerLimit: number;
        var outerLimitSq: number;
        var innerLimitSq: number;
        var distanceSq: number;
        var distance: number;
        var pdx: number;
        var pdy: number;
        var pDistanceSq: number;
        var adjustSpeed: number;
        var positionRatio: number;
        var epsilon: number = 0.001;
        var dx: number = particle.x - this._center.x;
        var dy: number = particle.y - this._center.y;
        var dotProduct: number = particle.velX * dx + particle.velY * dy;
        if (dotProduct < 0) // moving towards center
        {
            outerLimit = this._outerRadius + particle.collisionRadius;
            if (Math.abs(dx) > outerLimit) return false;
            if (Math.abs(dy) > outerLimit) return false;
            distanceSq = dx * dx + dy * dy;
            outerLimitSq = outerLimit * outerLimit;
            if (distanceSq > outerLimitSq) return false;
            // Particle is inside outer circle

            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            pDistanceSq = pdx * pdx + pdy * pdy;
            if (pDistanceSq > outerLimitSq) {
                // particle was outside outer circle
                adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance + epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }

            if (this._innerRadius != 0 && this._innerRadius != this._outerRadius) {
                innerLimit = this._innerRadius + particle.collisionRadius;
                if (Math.abs(dx) > innerLimit) return false;
                if (Math.abs(dy) > innerLimit) return false;
                innerLimitSq = innerLimit * innerLimit;
                if (distanceSq > innerLimitSq) return false;
                // Particle is inside inner circle

                if (pDistanceSq > innerLimitSq) {
                    // particle was outside inner circle
                    adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance + epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }
            return false;
        }
        else // moving away from center
        {
            outerLimit = this._outerRadius - particle.collisionRadius;
            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            if (Math.abs(pdx) > outerLimit) return false;
            if (Math.abs(pdy) > outerLimit) return false;
            pDistanceSq = pdx * pdx + pdy * pdy;
            outerLimitSq = outerLimit * outerLimit;
            if (pDistanceSq > outerLimitSq) return false;
            // particle was inside outer circle

            distanceSq = dx * dx + dy * dy;

            if (this._innerRadius != 0 && this._innerRadius != this._outerRadius) {
                innerLimit = this._innerRadius - particle.collisionRadius;
                innerLimitSq = innerLimit * innerLimit;
                if (pDistanceSq < innerLimitSq && distanceSq >= innerLimitSq) {
                    // particle was inside inner circle and is outside it
                    adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance - epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }

            if (distanceSq >= outerLimitSq) {
                // Particle is inside outer circle
                adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance - epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }
            return false;
        }
    }
}
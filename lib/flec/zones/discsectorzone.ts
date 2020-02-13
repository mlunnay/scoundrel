import { Zone } from './zone';
import { Vector2, Random } from "../../core";
import { Particle } from "../particles";

const TWOPI = Math.PI * 2;

/**
 * The DiscSectorZone zone defines a section of a Disc zone. The disc
 * on which it's based have a hole in the middle, like a doughnut.
 */
export class DiscSectorZone implements Zone {
    private _center: Vector2;
    private _innerRadius: number;
    private _outerRadius: number;
    private _innerSq: number;
    private _outerSq: number;
    private _minAngle: number;
    private _maxAngle: number;
    private _minAllowed: number;
    private _minNormal: Vector2;
    private _maxNormal: Vector2;

    /**
     * The constructor defines a DiscSectorZone zone.
     * 
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all 
     * points inside the outer radius are included in the zone.
     * @param minAngle The minimum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise 
     * direction (towards the graphical y axis). Angles are converted to a value between 0 
     * and two times PI.
     * @param maxAngle The maximum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise 
     * direction (towards the graphical y axis). Angles are converted to a value between 0 
     * and two times PI.
     */
    constructor(center: Vector2 = new Vector2(0,0), outerRadius: number = 0, innerRadius: number = 0, minAngle: number = 0, maxAngle: number = 0) {
        if (outerRadius < innerRadius) {
            throw new Error("The outerRadius (" + outerRadius + ") can't be smaller than the innerRadius (" + innerRadius + ") in your DiscSectorZone. N.B. the outerRadius is the second argument in the constructor and the innerRadius is the third argument.");
        }
        this._center = center.clone();
        this._innerRadius = innerRadius;
        this._outerRadius = outerRadius;
        this._innerSq = this._innerRadius * this._innerRadius;
        this._outerSq = this._outerRadius * this._outerRadius;
        this._minAngle = minAngle;
        this._maxAngle = maxAngle;
        if (!isNaN(this._maxAngle)) {
            while (this._maxAngle > TWOPI) {
                this._maxAngle -= TWOPI;
            }
            while (this._maxAngle < 0) {
                this._maxAngle += TWOPI;
            }
            this._minAllowed = this._maxAngle - TWOPI;
            if (!isNaN(this._minAngle)) {
                if (minAngle == maxAngle) {
                    this._minAngle = this._maxAngle;
                }
                else {
                    this._minAngle = this.clamp(this._minAngle);
                }
            }
            this.calculateNormals();
        }
    }

    private clamp(angle: number): number {
        if (!isNaN(this._maxAngle)) {
            while (angle > this._maxAngle) {
                angle -= TWOPI;
            }
            while (angle < this._minAllowed) {
                angle += TWOPI;
            }
        }
        return angle;
    }

    private calculateNormals(): void {
        if (!isNaN(this._minAngle)) {
            this._minNormal = new Vector2(Math.sin(this._minAngle), - Math.cos(this._minAngle));
            this._minNormal = this._minNormal.normalize();
        }
        if (!isNaN(this._maxAngle)) {
            this._maxNormal = new Vector2(- Math.sin(this._maxAngle), Math.cos(this._maxAngle));
            this._maxNormal =this._maxNormal.normalize();
        }
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
     * The minimum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise 
     * direction (towards the graphical y axis). Angles are converted to a value between 0 
     * and two times PI.
     */
    public get minAngle(): number {
        return this._minAngle;
    }

    public set minAngle(value: number) {
        this._minAngle = this.clamp(value);
        this.calculateNormals();
    }

    /**
     * The maximum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise 
     * direction (towards the graphical y axis). Angles are converted to a value between 0 
     * and two times PI.
     */
    public get maxAngle(): number {
        return this._maxAngle;
    }

    public set maxAngle(value: number) {
        this._maxAngle = value;
        while (this._maxAngle > TWOPI) {
            this._maxAngle -= TWOPI;
        }
        while (this._maxAngle < 0) {
            this._maxAngle += TWOPI;
        }
        this._minAllowed = this._maxAngle - TWOPI;
        this._minAngle = this.clamp(this._minAngle);
        this.calculateNormals();
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
        if (distSq > this._outerSq || distSq < this._innerSq) {
            return false;
        }
        var angle: number = Math.atan2(y, x);
        angle = this.clamp(angle);
        return angle >= this._minAngle;
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
        var angle = this._minAngle + Random.random.random() * (this._maxAngle - this._minAngle);
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
        return (this._outerSq - this._innerSq) * (this._maxAngle - this._minAngle) * 0.5;
    }

    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the disc sector defined for this zone, from inside or outside the disc. In the interests of speed,
     * these collisions do not take account of the collisionRadius of the particle.
     * 
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     * 
     * @return Whether a collision occured.
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        // This is approximate, since accurate calculations would be quite complex and thus time consuming

        var xNow: number = particle.x - this._center.x;
        var yNow: number = particle.y - this._center.y;
        var xThen: number = particle.previousX - this._center.x;
        var yThen: number = particle.previousY - this._center.y;
        var insideNow: boolean = true;
        var insideThen: boolean = true;

        var distThenSq: number = xThen * xThen + yThen * yThen;
        var distNowSq: number = xNow * xNow + yNow * yNow;
        if (distThenSq > this._outerSq || distThenSq < this._innerSq) {
            insideThen = false;
        }
        if (distNowSq > this._outerSq || distNowSq < this._innerSq) {
            insideNow = false;
        }
        if ((!insideNow) && (!insideThen)) {
            return false;
        }

        var angleThen: number = this.clamp(Math.atan2(yThen, xThen));
        var angleNow: number = this.clamp(Math.atan2(yNow, xNow));
        insideThen = insideThen && angleThen >= this._minAngle;
        insideNow = insideNow && angleNow >= this._minAngle;
        if (insideNow == insideThen) {
            return false;
        }

        var adjustSpeed: number;
        var dotProduct: number = particle.velX * xNow + particle.velY * yNow;
        var factor: number;
        var normalSpeed: number;

        if (insideNow) {
            if (distThenSq > this._outerSq) {
                // bounce off outer radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            else if (distThenSq < this._innerSq) {
                // bounce off inner radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            if (angleThen < this._minAngle) {
                if (angleThen < (this._minAllowed + this._minAngle) / 2) {
                    // bounce off max radius
                    normalSpeed = this._maxNormal.x * particle.velX + this._maxNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._maxNormal.x;
                    particle.velY -= factor * this._maxNormal.y;
                }
                else {
                    // bounce off min radius
                    normalSpeed = this._minNormal.x * particle.velX + this._minNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._minNormal.x;
                    particle.velY -= factor * this._minNormal.y;
                }
            }
        }
        else // inside then
        {
            if (distNowSq > this._outerSq) {
                // bounce off outer radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            else if (distNowSq < this._innerSq) {
                // bounce off inner radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            if (angleNow < this._minAngle) {
                if (angleNow < (this._minAllowed + this._minAngle) / 2) {
                    // bounce off max radius
                    normalSpeed = this._maxNormal.x * particle.velX + this._maxNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._maxNormal.x;
                    particle.velY -= factor * this._maxNormal.y;
                }
                else {
                    // bounce off min radius
                    normalSpeed = this._minNormal.x * particle.velX + this._minNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._minNormal.x;
                    particle.velY -= factor * this._minNormal.y;
                }
            }
        }
        particle.x = particle.previousX;
        particle.y = particle.previousY;

        return true;
    }
}
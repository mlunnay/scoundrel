import { Zone } from './zone';
import { Vector2 } from "../../core";
import { Particle } from "../particles";
/**
 * The DiscSectorZone zone defines a section of a Disc zone. The disc
 * on which it's based have a hole in the middle, like a doughnut.
 */
export declare class DiscSectorZone implements Zone {
    private _center;
    private _innerRadius;
    private _outerRadius;
    private _innerSq;
    private _outerSq;
    private _minAngle;
    private _maxAngle;
    private _minAllowed;
    private _minNormal;
    private _maxNormal;
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
    constructor(center?: Vector2, outerRadius?: number, innerRadius?: number, minAngle?: number, maxAngle?: number);
    private clamp;
    private calculateNormals;
    /**
     * The centre of the disc.
     */
    center: Vector2;
    /**
     * The x coordinate of the point that is the center of the disc.
     */
    centerX: number;
    /**
     * The y coordinate of the point that is the center of the disc.
     */
    centerY: number;
    /**
     * The radius of the inner edge of the disc.
     */
    innerRadius: number;
    /**
     * The radius of the outer edge of the disc.
     */
    outerRadius: number;
    /**
     * The minimum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     */
    minAngle: number;
    /**
     * The maximum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     */
    maxAngle: number;
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x: number, y: number): boolean;
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation(): Vector2;
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea(): number;
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
    collideParticle(particle: Particle, bounce?: number): boolean;
}

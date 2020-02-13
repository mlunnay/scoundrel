import { Zone } from './zone';
import { Vector2 } from "../../core";
import { Particle } from "../particles";
/**
 * The LineZone zone defines a zone that contains all the points on a line.
 */
export declare class LineZone implements Zone {
    private _start;
    private _end;
    private _length;
    private _normal;
    private _parallel;
    /**
     * The constructor creates a LineZone zone.
     *
     * @param start The point at one end of the line.
     * @param end The point at the other end of the line.
     */
    constructor(start?: Vector2, end?: Vector2);
    private setLengthAndNormal;
    /**
     * The point at one end of the line.
     */
    start: Vector2;
    /**
     * The point at the other end of the line.
     */
    end: Vector2;
    /**
     * The x coordinate of the point at the start of the line.
     */
    startX: number;
    /**
     * The y coordinate of the point at the start of the line.
     */
    startY: number;
    /**
     * The x coordinate of the point at the end of the line.
     */
    endX: number;
    /**
     * The y coordinate of the point at the end of the line.
     */
    endY: number;
    /**
     * @inheritDoc
     */
    contains(x: number, y: number): boolean;
    /**
     * @inheritDoc
     */
    getLocation(): Vector2;
    /**
     * @inheritDoc
     */
    getArea(): number;
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
    collideParticle(particle: Particle, bounce?: number): boolean;
}

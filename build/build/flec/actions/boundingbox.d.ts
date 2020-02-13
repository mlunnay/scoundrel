import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action confines each particle to a rectangular region. The
 * particle bounces back off the sides of the rectangle when it reaches the edge.
 * The bounce treats the particle as a circular body.
 * @extends ActionBase
 */
export declare class BoundingBox extends ActionBase {
    /**
     * The left coordinate of the bounding box.
     */
    left: number;
    /**
     * The right coordinate of the bounding box.
     */
    right: number;
    /**
     * The top coordinate of the bounding box.
     */
    top: number;
    /**
     * The bottom coordinate of the bounding box.
     */
    bottom: number;
    /**
     * The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    bounce: number;
    /**
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     * @param bounce The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    constructor(left?: number, top?: number, right?: number, bottom?: number, bounce?: number);
    update(emitter: Emitter, particle: Particle, _time: number): void;
}

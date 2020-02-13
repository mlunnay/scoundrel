import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The WrapAroundBox action confines all the particles to a rectangle region. If a
 * particle leaves the rectangle on one side it reenters on the other.
 *
 * This action has a priority of -20, so that it executes after
 * all movement has occured.
 */
export declare class WrapAroundBox extends ActionBase {
    private _left;
    private _top;
    private _right;
    private _bottom;
    private _width;
    private _height;
    /**
     * The constructor creates a WrapAroundBox action for use by
     * an emitter. To add a WrapAroundBox to all particles created by an emitter,
     * use the emitter's addAction method.
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     */
    constructor(left?: number, top?: number, right?: number, bottom?: number);
    /**
     * The left coordinate of the box.
     */
    left: number;
    /**
     * The top coordinate of the box.
     */
    top: number;
    /**
     * The left coordinate of the box.
     */
    right: number;
    /**
     * The left coordinate of the box.
     */
    bottom: number;
    /**
     * Tests whether the particle has left the box and, if so, moves it
     * to enter on the other side.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

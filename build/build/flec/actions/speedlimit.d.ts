import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The SpeedLimit action limits each particle's maximum or minimum speed to the
 * specified speed.
 *
 * <p>This action has aa priority of -5, so that it executes after all accelerations
 * have occured.</p>
 */
export declare class SpeedLimit extends ActionBase {
    private _limit;
    private _limitSq;
    private _isMinimum;
    /**
     * The constructor creates a SpeedLimit action for use by an emitter.
     * To add a SpeedLimit to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param speed The speed limit for the action in pixels per second.
     * @param isMinimum If true, particles travelling slower than the speed limit
     * are accelerated to the speed limit, otherwise particles travelling faster
     * than the speed limit are decelerated to the speed limit.
     */
    constructor(speed?: number, isMinimum?: boolean);
    /**
     * The speed limit
     */
    limit: number;
    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    isMinimum: boolean;
    /**
     * Checks whether the particle's speed is above or below the speed limit
     * as appropriate and, if so, alters its speed to match the speed limit.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

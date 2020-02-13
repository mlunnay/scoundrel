import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The MinimumDistance action applies an acceleration to the particle to
 * manumberain a minimum distance between it and its neighbours.
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
export declare class MinimumDistance extends ActionBase {
    private _min;
    private _minSq;
    /**
     * The acceleration force applied to avoid the other particles.
     */
    acceleration: number;
    /**
     * The constructor creates a MinimumDistance action for use by an emitter.
     * To add a MinimumDistance to all particles created by an emitter, use
     * the emitter's addAction method.
     *
     * @param minimum The minimum distance, in pixels, that this action
     * manumberains between particles.
     * @param acceleration The acceleration force applied to avoid the
     * other particles.
     */
    constructor(minimum?: number, acceleration?: number);
    /**
     * The minimum distance, in pixels, that this action manumberains between
     * particles.
     */
    minimum: number;
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter: Emitter): void;
    /**
     * Checks for particles closer than the minimum distance to the current
     * particle and if any are found applies the acceleration to move the
     * particles apart.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter: Emitter, particle: Particle, time: number): void;
}

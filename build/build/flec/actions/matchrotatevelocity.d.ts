import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The MatchRotateVelocity action applies an angular acceleration to each
 * particle to match its angular velocity to that of its nearest neighbours.
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
export declare class MatchRotateVelocity extends ActionBase {
    private _max;
    private _maxSq;
    /**
     * The angular acceleration applied to adjust the angular velocity to
     * match that of the other particles.
     */
    acceleration: number;
    /**
     * The constructor creates a MatchRotateVelocity action for use by an
     * emitter. To add a MatchRotateVelocity to all particles created by an
     * emitter, use the emitter's addAction method.
     *
     * @param maxDistance The maximum distance, in pixels, over which this
     * action operates. The particle will match its angular velocity to other
     * particles that are at most this close to it.
     * @param acceleration The angular acceleration applied to adjust the
     * angular velocity to match that of the other particles.
     */
    constructor(maxDistance?: number, acceleration?: number);
    /**
     * The maximum distance, in pixels, over which this action operates.
     * The particle will match its angular velocity other particles that are
     * at most this close to it.
     */
    maxDistance: number;
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter: Emitter): void;
    /**
     * Checks all particles near the current particle and applies the
     * angular acceleration to alter the particle's angular velocity
     * towards their average angular velocity.
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

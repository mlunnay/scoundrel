import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The TargetRotateVelocity action adjusts the angular velocity of the particle
 * towards the target angular velocity.
 */
export declare class TargetRotateVelocity extends ActionBase {
    /**
     * The target angular velocity, in radians per second.
     */
    targetVelocity: number;
    /**
     * Adjusts how quickly the particle reaches the target angular velocity.
     * Larger numbers cause it to approach the target angular velocity more quickly.
     */
    rate: number;
    /**
     * The constructor creates a TargetRotateVelocity action for use by an emitter.
     * To add a TargetRotateVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param targetVelocity The target angular velocity, in radians per second.
     * @param rate Adjusts how quickly the particle reaches the target angular
     * velocity. Larger numbers cause it to approach the target angular velocity
     * more quickly.
     */
    constructor(targetVelocity?: number, rate?: number);
    /**
     * Calculates the difference between the particle's angular velocity and
     * the target and adjusts the angular velocity closer to the target by an
     * amount proportional to the difference, the time and the rate of convergence.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

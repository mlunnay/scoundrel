import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The TargetVelocity action adjusts the velocity of the particle towards the
 * target velocity.
 */
export declare class TargetVelocity extends ActionBase {
    /**
     * The x coordinate of the target velocity, in pixels per second.s
     */
    targetVelocityX: number;
    /**
     * The y coordinate of the target velocity, in pixels per second.
     */
    targetVelocityY: number;
    /**
     * Adjusts how quickly the particle reaches the target velocity.
     * Larger numbers cause it to approach the target velocity more quickly.
     */
    rate: number;
    /**
     * The constructor creates a TargetVelocity action for use by an emitter.
     * To add a TargetVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param velX The x coordinate of the target velocity, in pixels per second.
     * @param velY The y coordinate of the target velocity, in pixels per second.
     * @param rate Adjusts how quickly the particle reaches the target velocity.
     * Larger numbers cause it to approach the target velocity more quickly.
     */
    constructor(targetVelocityX?: number, targetVelocityY?: number, rate?: number);
    /**
     * Calculates the difference between the particle's velocity and
     * the target and adjusts the velocity closer to the target by an
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

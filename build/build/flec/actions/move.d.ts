import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The Move action updates the position of the particle based on its velocity.
 * It uses a Euler numberegrator to calculate the new position. If you want an
 * emitter's particles to move then you must add a Move action, or a similar
 * custom action, to the emitter
 *
 * <p>This action has a priority of -10, so that it executes after other actions.</p>
 */
export declare class Move extends ActionBase {
    /**
     * The constructor creates a Move action for use by an emitter.
     * To add a Move to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flnumberparticles.common.emitters.Emitter#addAction()
     */
    constructor();
    /**
     * Updates the particle's position based on its velocity and the period of
     * time indicated.
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

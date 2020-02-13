import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The Rotate action updates the rotation of the particle based on its angular 
 * velocity. It uses a Euler numberegrator to calculate the new rotation. If you 
 * want an emitter's particles to rotate then you must add a Rotate action, or 
 * a similar custom action, to the emitter
 * 
 * <p>This action has a priority of -10, so that it executes after other actions.</p>
 */
export class Rotate extends ActionBase {
    /**
     * The constructor creates a Rotate action for use by an emitter. 
     * To add a Rotate to all particles created by an emitter, use the
     * emitter's addAction method.
     */
    constructor() {
        super();
        this._priority = -10;
    }

    /**
     * Updates the particle's rotation based on its angular velocity and the period of 
     * time indicated.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, time: number): void {
        particle.rotation += particle.angularVelocity * time;
    }
}
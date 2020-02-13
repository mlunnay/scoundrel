import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The RotateToDirection action updates the rotation of the particle 
 * so that it always points in the direction it is traveling.
 */
export class RotateToDirection extends ActionBase {
        /**
     * Calculates a new rotation based on the direction of the
     * particle's velocity and applies it to the particle.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.rotation = Math.atan2(particle.velY, particle.velX);
    }
}
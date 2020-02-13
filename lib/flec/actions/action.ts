import { Behavior } from '../behavior';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * An Action is used to continously modify an aspect of a particle.
 */
export interface Action extends Behavior {
    /**
     * Called by the attached Emitter for each particle to modify it each frame.
     * @param emitter The Emitter that the activity is attached to.
     * @param particle The current particle to modify.
     * @param time The duration of the frame, in seconds.
     */
    update(emitter: Emitter, particle: Particle, time: number): void;
}
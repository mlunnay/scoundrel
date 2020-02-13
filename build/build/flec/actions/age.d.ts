import { ActionBase } from './actionbase';
import { easingFunction } from '../easing';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action ages the particle over time, altering its energy to reflect its age.
 * @extends ActionBase
 */
export declare class Age extends ActionBase {
    easing: easingFunction;
    constructor(easing?: easingFunction);
    /**
     * Sets the energy of the particle based on its age and the easing function.
     * @param emitter The Emitter that the activity is attached to.
     * @param particle The current particle to modify.
     * @param time The duration of the frame, in seconds.
     */
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

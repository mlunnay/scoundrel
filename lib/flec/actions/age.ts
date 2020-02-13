import { ActionBase } from './actionbase';
import { Linear, easingFunction } from '../easing';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action ages the particle over time, altering its energy to reflect its age.
 * @extends ActionBase
 */
export class Age extends ActionBase {
    // t: current time, b: begInnIng value, c: change In value, d: duration
    public easing: easingFunction;

    constructor(easing?: easingFunction) {
        super();
        if(easing !== undefined)
            this.easing = easing;
        else
            this.easing = Linear.easeNone;
    }

    /**
     * Sets the energy of the particle based on its age and the easing function.
     * @param emitter The Emitter that the activity is attached to.
     * @param particle The current particle to modify.
     * @param time The duration of the frame, in seconds.
     */
    public update(_emitter: Emitter, particle: Particle, time: number) {
        particle.age += time;
        if(particle.age >= particle.lifetime){
            particle.energy = 0;
            particle.isDead = true;
        }
        else
            particle.energy = this.easing(particle.age, 1, -1, particle.lifetime);
    }
}
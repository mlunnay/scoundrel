import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action modifies the velocity of each particle by a constance acceleration.
 * @extends ActionBase
 */
export class Accelerate extends ActionBase {
    constructor(public x: number = 0, public y: number = 0) {
        super();
    }

    update(_emitter: Emitter, particle: Particle, time: number): void {
        particle.velX += this.x * time;
        particle.velY += this.y * time;
    }
}
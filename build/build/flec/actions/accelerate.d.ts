import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action modifies the velocity of each particle by a constance acceleration.
 * @extends ActionBase
 */
export declare class Accelerate extends ActionBase {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

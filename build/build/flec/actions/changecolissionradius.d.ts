import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action modifies the collision radius of the particle as it ages.
 * It uses the particle's energy level to decide what radius the particle should have.
 * @extends ActionBase
 */
export declare class ChangeCollisionRadius extends ActionBase {
    diffRadius: number;
    endRadius: number;
    startRadius: number;
    constructor(startRadius?: number, endRadius?: number);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

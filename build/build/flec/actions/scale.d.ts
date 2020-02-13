import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action modifies the scale of the particle as it ages.
 * It uses the particle's energy level to decide what scale the particle should have.
 * @extends ActionBase
 */
export declare class ChangeScale extends ActionBase {
    diffScale: number;
    endScale: number;
    startScale: number;
    constructor(startScale?: number, endScale?: number);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action modifies the alpha of the particle as it ages.
 * It uses the particle's energy level to decide what alpha the particle should have.
 * @extends ActionBase
 */
export declare class Fade extends ActionBase {
    diffAlpha: number;
    endAlpha: number;
    startAlpha: number;
    constructor(startAlpha?: number, endAlpha?: number);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

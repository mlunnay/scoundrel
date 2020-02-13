import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action modifies the mass of the particle as it ages.
 * It uses the particle's energy level to decide what mass the particle should have.
 * @extends ActionBase
 */
export declare class ChangeMass extends ActionBase {
    diffMass: number;
    endMass: number;
    startMass: number;
    constructor(startMass?: number, endMass?: number);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

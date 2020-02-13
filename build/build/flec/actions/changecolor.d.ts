import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { RGBA } from "../../core";
/**
 * This Action modifies the color of the particle as it ages.
 * It uses the particle's energy level to decide what color the particle should have.
 * @extends ActionBase
 */
export declare class ChangeColor extends ActionBase {
    startColor: RGBA;
    endColor: RGBA;
    constructor(startColor?: RGBA, endColor?: RGBA);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

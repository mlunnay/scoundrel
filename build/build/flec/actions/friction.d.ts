import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action applies friction to the particle to slow it down when it's moving.
 * The frictional force is constant, irrespective of how fast the particle is moving.
 *
 * @extends ActionBase
 */
export declare class Friction extends ActionBase {
    /**
     * The amount of friction. A higher number produces a stronger frictional force.
     */
    friction: number;
    constructor(friction?: number);
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action applies a force on the particle to draw it towards other nearby particles.
 * The size of the acceleration is constant, only the direction varies.
 * @extends ActionBase
 */
export declare class AproachingNeighbours extends ActionBase {
    acceleration: number;
    private _max;
    private _maxSq;
    maxDistance: number;
    /**
     *
     * @param maxDistance The maximum distance over which this action operates.
     * @param acceleration The size of the acceleration applied to approach the other particles.
     */
    constructor(maxDistance?: number, acceleration?: number);
    addedToEmitter(emitter: Emitter): void;
    update(emitter: Emitter, particle: Particle, time: number): void;
}

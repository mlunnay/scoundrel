import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action applies a force on the particles to push them away from a single point.
 * The force occurs instantanrously at the central point of the expolosion and then ripples out in a shock wave.
 *
 * @extends ActionBase
 */
export declare class Explosion extends ActionBase {
    private _power;
    private _depth;
    private _invDepth;
    private _epsilonSqr;
    private _radius;
    private _oldRadius;
    private _radiusChange;
    /**
     * The x coordinate of the center of the explosion.
     */
    x: number;
    /**
     * The y coordinate of the center of the explosion.
     */
    y: number;
    /**
     * The strength of the explosion. Larger numbers produce a stronger force.
     */
    power: number;
    /**
     * The rate at whish the shockwave moves out from the center of the explosion, in pixels per millisecond.
     */
    expansionRate: number;
    /**
     * The depth (front-edge to back-edge) of the shock wave.
     */
    depth: number;
    /**
     * The minimum distance for which the explosion force is calculated.
     * Particles closer than this distance to the center of the explosion
     * experience the explosion as it they were this distance away. This
     * stops the explosion effect blowing up as distances get small.
     */
    epsilon: number;
    constructor(power?: number, x?: number, y?: number, expansionRate?: number, depth?: number, epsilon?: number);
    reset(): void;
    addedToEmitter(emitter: Emitter): void;
    removedFromEmitter(emitter: Emitter): void;
    private frameUpdate;
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

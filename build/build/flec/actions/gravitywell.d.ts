import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action applies a force on the particle to draw it towards a point.
 * The force applied is inversly proportianal to the squeare of the distance from the particle to the point, in accordance with Newton's law of gravity.
 * @extends ActionBase
 */
export declare class GravityWell extends ActionBase {
    x: number;
    y: number;
    private static gravityConstant;
    private _power;
    private _epsilonSquared;
    power: number;
    epsilon: number;
    /**
     *
     * @param power The strength of the gravity force.
     * @param x The x coordinate of the point towards which the force draws the particle.
     * @param y The y coordinate of the point towards which the force draws the particle.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power?: number, x?: number, y?: number, epsilon?: number);
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

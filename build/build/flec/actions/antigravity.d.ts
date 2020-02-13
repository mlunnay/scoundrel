import { GravityWell } from './gravitywell';
/**
 * The AntiGravtity action applies a force to the particle to push it away from a single point.
 * The force applied is inversly proportianal to the squeare of the distance from the particle to the point, in accordance with Newton's law of gravity.
 */
export declare class AntiGravity extends GravityWell {
    power: number;
    /**
     *
     * @param power The strength of the anti-gravity force.
     * @param x The x coordinate of the point away from which the force draws the particle.
     * @param y The y coordinate of the point away from which the force draws the particle.
     * @param epsilon The minimum distance for which anti-gravity is calculated.
     * Particles closer than this distance experience a anti-gravity force as if
     * they were this distance away. This stops the anti-gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power?: number, x?: number, y?: number, epsilon?: number);
}

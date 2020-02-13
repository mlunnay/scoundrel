import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action detects collisions between particles and modifies their velocities in response to the collision.
 * All particles are approximated to a circular shape for the collisions and they are assumed to be of even density.
 *
 * <p>If the particles reach a stationary, or near stationary, state under an
 * accelerating force (e.g. gravity) then they will fall through each other.
 * This is due to the nature of the alogorithm used, which is designed for
 * speed of execution and sufficient accuracy when the particles are in motion,
 * not for absolute precision.</p>
 *
 * @extends ActionBase
 */
export declare class Collide extends ActionBase {
    private _sign;
    private _maxDistance;
    /**
     * The coefficient of restitution when the particles collide.
     * A value of 1 gives a pure pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    bounce: number;
    constructor(bounce?: number);
    update(emitter: Emitter, particle: Particle, _time: number): void;
    addedToEmitter(emitter: Emitter): void;
    removedFromEmitter(emitter: Emitter): void;
    private frameUpdate;
}

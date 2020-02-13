import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
/**
 * This Action detects collisions between particles and a zone, modifying the particles' velocity in response to the collision.
 * All particles are approximated to a circular shape for the collisions.
 *
 * @extends ActionBase
 */
export declare class CollisionZone extends ActionBase {
    /**
     * The zone that the particles should collide with.
     */
    zone: Zone;
    /**
     * The coefficient of restitution when the particles collide.
     * A value of 1 gives a pure pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    bounce: number;
    constructor(zone: Zone, bounce?: number);
    update(emitter: Emitter, particle: Particle, _time: number): void;
}

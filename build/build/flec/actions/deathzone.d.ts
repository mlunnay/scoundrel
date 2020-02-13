import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
/**
 * This Action marks the particle as dead if it is inside a specified zone.
 *
 * @extends ActionBase
 */
export declare class DeathZone extends ActionBase {
    /**
     * The Zone to test against.
     */
    zone: Zone;
    /**
     * If true, the zone is treated as the safe area and particles ouside the
     * zone are killed. If false, particles inside the zone are killed.
     */
    isSafe: boolean;
    constructor(zone: Zone, isSafe?: boolean);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

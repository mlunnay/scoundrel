import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";

/**
 * This Action marks the particle as dead if it is inside a specified zone.
 * 
 * @extends ActionBase
 */
export class DeathZone extends ActionBase {
    /**
     * The Zone to test against.
     */
    public zone: Zone;
    /**
     * If true, the zone is treated as the safe area and particles ouside the 
     * zone are killed. If false, particles inside the zone are killed.
     */
    public isSafe: boolean = false;

    constructor(zone: Zone, isSafe: boolean = false) {
        super();
        this._priority = -20;
        this.zone = zone;
        this.isSafe = isSafe;
    }

    update(_emitter: Emitter, particle: Particle, _time: number) {
        var inside = this.zone.contains(particle.x, particle.y);
        if((this.isSafe && !inside) || (!this.isSafe && inside))
            particle.isDead = true; 
    }
}
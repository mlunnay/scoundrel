import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
/**
 * The Jet Action applies an acceleration to particles only if they are in
 * the specified zone.
 */
export declare class Jet extends ActionBase {
    /**
     * The x component of the acceleration to apply, in
     * pixels per second per second.
     */
    x: number;
    /**
     * The y component of the acceleration to apply, in
     * pixels per second per second.
     */
    private y;
    /**
     * The zone in which to apply the acceleration.
     */
    private zone;
    /**
     * If false (the default) the acceleration is applied
     * only to particles inside the zone. If true the acceleration is applied
     * only to particles outside the zone.
     */
    private invertZone;
    /**
     * The constructor creates a Jet action for use by an emitter.
     * To add a Jet to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param accelerationX The x component of the acceleration to apply, in
     * pixels per second per second.
     * @param accelerationY The y component of the acceleration to apply, in
     * pixels per second per second.
     * @param zone The zone in which to apply the acceleration.
     * @param invertZone If false (the default) the acceleration is applied
     * only to particles inside the zone. If true the acceleration is applied
     * only to particles outside the zone.
     */
    constructor(accelerationX: number | undefined, accelerationY: number | undefined, zone: Zone, invertZone?: boolean);
    /**
     * Checks if the particle is inside the zone and, if so, applies the
     * acceleration to the particle for the period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

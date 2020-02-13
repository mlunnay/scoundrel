import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Initializer } from "../initializers";
import { Zone } from "../zones";
/**
 * The TweenToZone action adjusts the particle's position between two
 * locations as it ages. The start location is wherever the particle starts
 * from, depending on the emitter and the initializers. The end position is
 * a random point within the specified zone. The current position is relative
 * to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
export declare class TweenToZone extends ActionBase implements Initializer {
    /**
     * The zone for the particle's position when its energy is 0.
     */
    zone: Zone;
    /**
     * The constructor creates a TweenToZone action for use by an emitter.
     * To add a TweenToZone to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param zone The zone for the particle's position when its energy is 0.
     */
    constructor(zone: Zone);
    /**
     *
     */
    addedToEmitter(emitter: Emitter): void;
    removedFromEmitter(emitter: Emitter): void;
    /**
     *
     */
    initialize(_emitter: Emitter, particle: Particle): void;
    /**
     * Calculates the current position of the particle based on it's energy.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter: Emitter, particle: Particle, _time: number): void;
}

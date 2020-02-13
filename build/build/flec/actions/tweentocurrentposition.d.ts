import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Initializer } from "../initializers";
import { Zone } from "../zones";
/**
 * The TweenToCurrentPosition action adjusts the particle's position between two
 * locations as it ages. The start location is a random ponumber within the specified
 * zone, and the end location is the particle's position when it is created or added
 * to the emitter. The current position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
export declare class TweenToCurrentPosition extends ActionBase implements Initializer {
    /**
     * The zone for the particle's position when its energy is 0.
     */
    zone: Zone;
    /**
     * The constructor creates a TweenToCurrentPosition action for use by an emitter.
     * To add a TweenToCurrentPosition to all particles created by an emitter, use the
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
export declare class TweenToPositionData {
    diffX: number;
    diffY: number;
    endX: number;
    endY: number;
    constructor(startX: number, startY: number, endX: number, endY: number);
}

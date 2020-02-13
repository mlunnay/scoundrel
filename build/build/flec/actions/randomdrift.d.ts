import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The RandomDrift action moves the particle by a random small amount every
 * frame, causing the particle to drift around.
 */
export declare class RandomDrift extends ActionBase {
    private _sizeX;
    private _sizeY;
    /**
     * The constructor creates a RandomDrift action for use by an emitter.
     * To add a RandomDrift to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param driftX The maximum amount of horizontal drift in pixels per second.
     * @param driftY The maximum amount of vertical drift in pixels per second.
     */
    constructor(driftX?: number, driftY?: number);
    /**
     * The maximum amount of horizontal drift in pixels per second.
     */
    driftX: number;
    /**
     * The maximum amount of vertical drift in pixels per second.
     */
    driftY: number;
    /**
     * Calculates a random drift for this frame and applies it for the
     * period of time indicated.
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

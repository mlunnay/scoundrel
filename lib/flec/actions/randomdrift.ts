import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from "../../core";

/**
 * The RandomDrift action moves the particle by a random small amount every 
 * frame, causing the particle to drift around.
 */
export class RandomDrift extends ActionBase {
    private _sizeX: number;
    private _sizeY: number;

    /**
     * The constructor creates a RandomDrift action for use by an emitter. 
     * To add a RandomDrift to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param driftX The maximum amount of horizontal drift in pixels per second.
     * @param driftY The maximum amount of vertical drift in pixels per second.
     */
    constructor(driftX: number = 0, driftY: number = 0) {
        super();
        this.driftX = driftX;
        this.driftY = driftY;
    }

    /**
     * The maximum amount of horizontal drift in pixels per second.
     */
    public get driftX(): number {
        return this._sizeX / 2;
    }
    public set driftX(value: number) {
        this._sizeX = value * 2;
    }

    /**
     * The maximum amount of vertical drift in pixels per second.
     */
    public get driftY(): number {
        return this._sizeY / 2;
    }
    public set driftY(value: number) {
        this._sizeY = value * 2;
    }

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
    public update(_emitter: Emitter, particle: Particle, time: number): void {
        particle.velX += (Random.random.random() - 0.5) * this._sizeX * time;
        particle.velY += (Random.random.random() - 0.5) * this._sizeY * time;
    }
}
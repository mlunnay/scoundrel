import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The SpeedLimit action limits each particle's maximum or minimum speed to the 
 * specified speed.
 * 
 * <p>This action has aa priority of -5, so that it executes after all accelerations 
 * have occured.</p>
 */
export class SpeedLimit extends ActionBase {
    private _limit: number;
    private _limitSq: number;
    private _isMinimum: boolean;

    /**
     * The constructor creates a SpeedLimit action for use by an emitter. 
     * To add a SpeedLimit to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param speed The speed limit for the action in pixels per second.
     * @param isMinimum If true, particles travelling slower than the speed limit
     * are accelerated to the speed limit, otherwise particles travelling faster
     * than the speed limit are decelerated to the speed limit.
     */
    constructor(speed: number = Number.MAX_VALUE, isMinimum: boolean = false) {
        super();
        this._priority = -5;
        this.limit = speed;
        this.isMinimum = isMinimum;
    }

    /**
     * The speed limit
     */
    public get limit(): number {
        return this._limit;
    }
    public set limit(value: number) {
        this._limit = value;
        this._limitSq = value * value;
    }

    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    public get isMinimum(): boolean {
        return this._isMinimum;
    }
    public set isMinimum(value: boolean) {
        this._isMinimum = value;
    }

    /**
     * Checks whether the particle's speed is above or below the speed limit
     * as appropriate and, if so, alters its speed to match the speed limit.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, _time: number): void {
        var speedSq: number = particle.velX * particle.velX + particle.velY * particle.velY;
        if ((this._isMinimum && speedSq < this._limitSq) || (!this._isMinimum && speedSq > this._limitSq)) {
            var scale: number = this._limit / Math.sqrt(speedSq);
            particle.velX *= scale;
            particle.velY *= scale;
        }
    }
}
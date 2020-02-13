import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action marks the particle as dead if it is travelling faster than the specified speed.
 * The behavior can be switched to instead mark as dead particles travelling slower than the specified speed.
 * @extends ActionBase
 */
export class DeathSpeed extends ActionBase {
    private _limit: number;
    private _limitSqr: number;

    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    public isMinimum: boolean;

    /**
     * The speed limit beyond which the particle dies.
     */
    public get limit() { return this._limit; }
    public set limit(value: number) {
        this._limit = value;
        this._limitSqr = value * value;
    }

    constructor(speed: number = Number.MAX_VALUE, isMinimum: boolean = false) {
        super();
        this.isMinimum = isMinimum;
        this.limit = speed;
    }

    update(_emitter: Emitter, particle: Particle, _time: number) {
        var speedSqr = particle.velX * particle.velX + particle.velY * particle.velY;
        if((this.isMinimum && speedSqr < this._limitSqr) || (!this.isMinimum && speedSqr > this._limitSqr))
            particle.isDead = true;
    }
}
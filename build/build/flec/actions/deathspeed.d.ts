import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action marks the particle as dead if it is travelling faster than the specified speed.
 * The behavior can be switched to instead mark as dead particles travelling slower than the specified speed.
 * @extends ActionBase
 */
export declare class DeathSpeed extends ActionBase {
    private _limit;
    private _limitSqr;
    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    isMinimum: boolean;
    /**
     * The speed limit beyond which the particle dies.
     */
    limit: number;
    constructor(speed?: number, isMinimum?: boolean);
    update(_emitter: Emitter, particle: Particle, _time: number): void;
}

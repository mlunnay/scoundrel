import { Spawner } from './spawner';
import { Emitter } from "../emitter";
/**
 * The steady spawner causes the emitter to create particles at a steady rate.
 */
export declare class Steady implements Spawner {
    private _rate;
    private _rateInv;
    private _timeToNext;
    isRunning: boolean;
    isComplete: boolean;
    rate: number;
    /**
     *
     * @param rate The number of particles to spawn per second.
     */
    constructor(rate?: number);
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, time: number): number;
    stop(): void;
    resume(): void;
}

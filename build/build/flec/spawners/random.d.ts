import { Spawner } from './spawner';
import { Emitter } from "../emitter";
/**
 * The Random spawner causes the emitter to create groups of particles at random intervals.
 */
export declare class Random implements Spawner {
    minRate: number;
    maxRate: number;
    private _timeToNext;
    isRunning: boolean;
    isComplete: boolean;
    /**
     *
     * @param minRate The minimum number of particles to emit per second.
     * @param maxRate The maximum number of particles to emit per second.
     */
    constructor(minRate?: number, maxRate?: number);
    private newTimeToNext;
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, time: number): number;
    stop(): void;
    resume(): void;
}

import { Spawner } from './spawner';
import { Emitter } from "../emitter";
/**
 * The Pulse spawner causes the emitter to create groups of particles at regular intervals.
 */
export declare class Pulse implements Spawner {
    period: number;
    quantity: number;
    private _timeToNext;
    isRunning: boolean;
    isComplete: boolean;
    /**
     *
     * @param period The time in milliseconds between each pulse.
     * @param quantity The number of particles to emit at each pulse.
     */
    constructor(period?: number, quantity?: number);
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, time: number): number;
    stop(): void;
    resume(): void;
}

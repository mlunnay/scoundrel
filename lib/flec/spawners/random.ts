import { Spawner } from './spawner';
import { Emitter } from "../emitter";
import { Random as rnd } from '../../core';

/**
 * The Random spawner causes the emitter to create groups of particles at random intervals.
 */
export class Random implements Spawner {
    private _timeToNext: number;
    public isRunning: boolean;
    public isComplete: boolean = false;

    /**
     * 
     * @param minRate The minimum number of particles to emit per second.
     * @param maxRate The maximum number of particles to emit per second.
     */
    constructor(public minRate: number = 0, public maxRate: number = 1) {
        this.isRunning = false;
    }

    private newTimeToNext(): number {
        var r = rnd.random.random();
        return 1000 / ((1 - r) * this.minRate + r * this.maxRate);
    }

    startEmitter(_emitter: Emitter): number {
        this.isRunning = true;
        this._timeToNext = this.newTimeToNext();
        return 0;
    }

    updateEmitter(_emitter: Emitter, time: number): number {
        var count = 0;
        if(this.isRunning) {
            this._timeToNext -= time;
            while(this._timeToNext <= 0) {
                count++;
                this._timeToNext += this.newTimeToNext();
            }
        }
        return count;
    }

    stop(): void {
        this.isRunning = false;
    }

    resume(): void {
        this.isRunning = true;
    }
}
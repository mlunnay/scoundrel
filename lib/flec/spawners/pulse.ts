import { Spawner } from './spawner';
import { Emitter } from "../emitter";

/**
 * The Pulse spawner causes the emitter to create groups of particles at regular intervals.
 */
export class Pulse implements Spawner {
    private _timeToNext: number;
    public isRunning: boolean;
    public isComplete: boolean = false;

    /**
     * 
     * @param period The time in milliseconds between each pulse.
     * @param quantity The number of particles to emit at each pulse.
     */
    constructor(public period: number = 1, public quantity: number = 0) {
        this.isRunning = false;
    }

    startEmitter(_emitter: Emitter): number {
        this.isRunning = true;
        this._timeToNext = this.period;
        return this.quantity;
    }

    updateEmitter(_emitter: Emitter, time: number): number {
        var count = 0;
        if(this.isRunning) {
            this._timeToNext -= time;
            while(this._timeToNext <= 0) {
                count += this.quantity;
                this._timeToNext += this.period;
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
import { Spawner } from './spawner';
import { Emitter } from "../emitter";

/**
 * The steady spawner causes the emitter to create particles at a steady rate.
 */
export class Steady implements Spawner {
    private _rate: number;
    private _rateInv: number;
    private _timeToNext: number;
    public isRunning: boolean;
    public isComplete: boolean = false;

    public get rate() { return this._rate; }
    public set rate(value: number) {
        if(!value || value < 0)
            value = 0;
        if(this._rate !== value) {
            this._rate = value;
            var rateInv = this._rateInv;
            this._rateInv = value ? 1000 / value : Number.MAX_VALUE;
            if(this._rate && value) {
                var timePassed = rateInv - this._timeToNext;
                this._timeToNext = Math.max(this._rateInv - timePassed, 0);
            }
            else {
                this._timeToNext = this._rateInv;
            }
        }
    }

    /**
     * 
     * @param rate The number of particles to spawn per second.
     */
    constructor(rate: number = 0) {
        this.isRunning = false;
        this.rate = rate;
    }

    startEmitter(_emitter: Emitter): number {
        this.isRunning = true;
        this._timeToNext = this._rateInv;
        return 0;
    }

    updateEmitter(_emitter: Emitter, time: number): number {
        var count = 0;
        if(this.isRunning) {
            this._timeToNext -= time;
            while(this._timeToNext <= 0) {
                count++;
                this._timeToNext += this._rateInv;
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
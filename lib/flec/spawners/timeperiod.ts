import { Spawner } from './spawner';
import { Emitter } from "../emitter";
import { Linear, easingFunction } from '../easing';

/**
 * The TimePeriod spawner causes the emitter to create particles for a period of time and then stop.
 * The rate of emission over that period can be modified using an easing function.
 */
export class TimePeriod implements Spawner {
    private _timePassed: number;
    private _particlesSpawned: number;

    public isRunning: boolean = false;
    public isComplete: boolean = false;

    /**
     * TimePeriod constructor
     * @param numParticles The number of particles to emit over the full duration of the time period.
     * @param duration The duration of this spawner in milliseconds.
     * @param easingFunction Optional easing function fo distribure the particle emission over the time period.
     */
    constructor(public numParticles: number = 0,
        public duration: number = 0,
        public easingFunction: easingFunction = Linear.easeNone) {
    }

    startEmitter(_emitter: Emitter): number {
        this.isRunning = true;
        this._timePassed = 0;
        this._particlesSpawned = 0
        return 0;
    }

    updateEmitter(_emitter: Emitter, time: number): number {
        var count = 0;
        if(this.isRunning || this._timePassed < this.duration) {
            this._timePassed += time;
            
            if(this._timePassed >= this.duration) {
                this.isComplete = true;
                count = this.numParticles - this._particlesSpawned;
                this._particlesSpawned = this.numParticles;
            }
            else {
                var oldParticles = this._particlesSpawned;
                this._particlesSpawned = Math.round(this.easingFunction(this._timePassed, 0, this.numParticles, this.duration));
                count = this._particlesSpawned - oldParticles;
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
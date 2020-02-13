import { Spawner } from './spawner';
import { Emitter } from "../emitter";
import { easingFunction } from '../easing';
/**
 * The TimePeriod spawner causes the emitter to create particles for a period of time and then stop.
 * The rate of emission over that period can be modified using an easing function.
 */
export declare class TimePeriod implements Spawner {
    numParticles: number;
    duration: number;
    easingFunction: easingFunction;
    private _timePassed;
    private _particlesSpawned;
    isRunning: boolean;
    isComplete: boolean;
    /**
     * TimePeriod constructor
     * @param numParticles The number of particles to emit over the full duration of the time period.
     * @param duration The duration of this spawner in milliseconds.
     * @param easingFunction Optional easing function fo distribure the particle emission over the time period.
     */
    constructor(numParticles?: number, duration?: number, easingFunction?: easingFunction);
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, time: number): number;
    stop(): void;
    resume(): void;
}

import { Spawner } from './spawner';
import { Emitter } from "../emitter";
/**
 * The Blast spawner causes the emitter to create a single burst of particles when it starts and then emits no further particles.
 */
export declare class Blast implements Spawner {
    ammount: number;
    isComplete: boolean;
    isRunning: boolean;
    constructor(ammount?: number);
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, _time: number): number;
    stop(): void;
    resume(): void;
}

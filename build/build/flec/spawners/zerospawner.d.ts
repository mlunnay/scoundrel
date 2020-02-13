import { Spawner } from './spawner';
import { Emitter } from "../emitter";
/**
 * The ZeroSpawner spawner causes the emitter to emit no particles.
 */
export declare class ZeroSpawner implements Spawner {
    readonly isComplete: boolean;
    readonly isRunning: boolean;
    startEmitter(_emitter: Emitter): number;
    updateEmitter(_emitter: Emitter, _time: number): number;
    stop(): void;
    resume(): void;
}

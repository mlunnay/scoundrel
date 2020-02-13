import { Spawner } from './spawner';
import { Emitter } from "../emitter";

/**
 * The ZeroSpawner spawner causes the emitter to emit no particles.
 */
export class ZeroSpawner implements Spawner {
    get isComplete(): boolean { return true; }
    get isRunning(): boolean { return false; }

    startEmitter(_emitter: Emitter): number {
        return 0;
    }

    updateEmitter(_emitter: Emitter, _time: number): number {
        return 0;
    }

    stop(): void {
    }
    
    resume(): void {
    }
}
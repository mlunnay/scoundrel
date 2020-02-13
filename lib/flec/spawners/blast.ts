import { Spawner } from './spawner';
import { Emitter } from "../emitter";

/**
 * The Blast spawner causes the emitter to create a single burst of particles when it starts and then emits no further particles.
 */
export class Blast implements Spawner {
    public ammount: number;
    isComplete: boolean = false;
    isRunning: boolean = false;

    constructor(ammount: number = 0) {
        this.ammount = ammount;
    }

    startEmitter(_emitter: Emitter): number {
        this.isComplete = true;
        return this.ammount;
    }

    updateEmitter(_emitter: Emitter, _time: number): number {
        return 0;
    }

    stop(): void {
    }

    resume(): void {
    }
}
import { Emitter } from "../emitter";

/**
 * A Spawner controls the creation rate of particles for an Emitter.
 */
export interface Spawner {
    /**
     * This is called when the Emitter the Spawner is attached to starts to get the number of particles to initally create.
     * @param emitter The Emitter that the activity is attached to.
     * @return The number of particles to initially create.
     */
    startEmitter(emitter: Emitter): number;

    /**
     * Called each frame by the Emitter the Spawner is attached to to get the number of new particles to create.
     * @param emitter The Emitter that the activity is attached to.
     * @param time The duration of the frame, in seconds.
     * @return The number of particles to create.
     */
    updateEmitter(emitter: Emitter, time: number): number;

    /**
     * Stop the Spawner from creating particles.
     */
    stop(): void;

    /**
     * Resume the Spawner after it has been stopped.
     */
    resume(): void;

    /**
     * Indicates if the Spawner has created all its particles
     */
    isComplete: boolean;

    /**
     * Indicates if the Spawner is currently running.
     */
    isRunning: boolean;
}
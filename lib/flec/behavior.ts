import { Emitter } from "./emitter";

/**
 * The Behavior interface is the base for classes that are attached to an Emitter.
 */
export interface Behavior {
    /**
     * The priority of execution of the Behavior.
     */
    priority: number;

    /**
     * Called by the Emitter that the Behavior is attached to when it is added.
     * @param emitter The Emitter that the Behavior is being attached to.
     */
    addedToEmitter(emitter: Emitter): void;

    /**
     * Called by the Emitter that the Behavior is attached to when it is removed.
     * @param emitter The Emitter that the Behavior is being removed from.
     */
    removedFromEmitter(emitter: Emitter): void;
}
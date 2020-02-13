import { Initializer } from './initializer';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This is the base class for all particle initializers.
 */
export declare abstract class InitializerBase implements Initializer {
    protected _priority: number;
    /**
     * The priority of execution of the Behavior.
     */
    priority: number;
    /**
     * Called by the Emitter that the Behavior is attached to when it is added.
     * @param emitter The Emitter that the Behavior is being attached to.
     */
    addedToEmitter(_emitter: Emitter): void;
    /**
     * Called by the Emitter that the Behavior is attached to when it is removed.
     * @param emitter The Emitter that the Behavior is being removed from.
     */
    removedFromEmitter(_emitter: Emitter): void;
    /**
     * This is called by an emitter to apply the initialization to every particle.
     * @param _emitter
     * @param _particle
     */
    initialize(_emitter: Emitter, _particle: Particle): void;
}

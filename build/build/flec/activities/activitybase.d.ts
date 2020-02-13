import { Activity } from "./activity";
import { Emitter } from "../emitter";
/**
 * This is the base class for all emitter activities.
 */
export declare abstract class ActivityBase implements Activity {
    protected _priority: number;
    /**
     * The priority of execution of the Behavior.
     */
    priority: number;
    /**
     * Called by an Emitter to apply the Activity every frame.
     * @param emitter The Emitter that the activity is attached to.
     * @param time The duration of the frame, in seconds.
     */
    update(_emitter: Emitter, _time: number): void;
    /**
     * Called when an Emitter is started to initialize the Activity.
     * @param emitter The Emitter that the activity is attached to.
     */
    initialize(_emitter: Emitter): void;
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
}

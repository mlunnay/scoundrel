import { Behavior } from '../behavior';
import { Emitter } from "../emitter";

/**
 * An Activity is used to continuously modify an emitter by updating the emitter every frame.
 */
export interface Activity extends Behavior {
    /**
     * Called when an Emitter is started to initialize the Activity.
     * @param emitter The Emitter that the activity is attached to.
     */
    initialize(emitter: Emitter): void;

    /**
     * Called by an Emitter to apply the Activity every frame.
     * @param emitter The Emitter that the activity is attached to.
     * @param time The duration of the frame, in seconds.
     */
    update(emitter: Emitter, time: number): void;
}
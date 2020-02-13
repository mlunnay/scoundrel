import { ActivityBase } from "./activitybase";
import { Emitter } from '../emitter';
/**
 * The MoveEmitter activity moves the emitter at a constant velocity.
 */
export declare class MoveEmitter extends ActivityBase {
    /**
     * The x coordinate of the velocity to move the emitter, in pixels per second
     */
    x: number;
    /**
     * The y coordinate of the velocity to move the emitter, in pixels per second
     */
    y: number;
    /**
     * The constructor creates a MoveEmitter activity for use by
     * an emitter. To add a MoveEmitter to an emitter, use the
     * emitter's addActvity method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addActivity()
     *
     * @param x The x coordinate of the velocity to move the emitter,
     * in pixels per second.
     * @param y The y coordinate of the velocity to move the emitter,
     * in pixels per second.
     */
    MoveEmitter(x?: number, y?: number): void;
    /**
     * @inheritDoc
     */
    update(emitter: Emitter, time: number): void;
}

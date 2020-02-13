import { ActivityBase } from "./activitybase";
import { Emitter } from '../emitter';

/**
 * The MoveEmitter activity moves the emitter at a constant velocity.
 */
export class MoveEmitter extends ActivityBase {
    /**
     * The x coordinate of the velocity to move the emitter, in pixels per second
     */
    public x: number;
    /**
     * The y coordinate of the velocity to move the emitter, in pixels per second
     */
    public y: number;

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
    public MoveEmitter(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * @inheritDoc
     */
    public update(emitter: Emitter, time: number): void {
        emitter.x += this.x * time;
        emitter.y += this.y * time;
    }
}
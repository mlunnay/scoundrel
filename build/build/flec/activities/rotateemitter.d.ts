import { ActivityBase } from "./activitybase";
import { Emitter } from '../emitter';
/**
 * The RotateEmitter activity rotates the emitter at a constant rate.
 */
export declare class RotateEmitter extends ActivityBase {
    /**
     * The angular velocity for the emitter in
     * radians per second.
     */
    angularVelocity: number;
    /**
     * The constructor creates a RotateEmitter activity for use by
     * an emitter. To add a RotateEmitter to an emitter, use the
     * emitter's addActvity method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addActivity()
     *
     * @para angularVelocity The angular velocity for the emitter in
     * radians per second.
     */
    RotateEmitter(angularVelocity?: number): void;
    /**
     * @inheritDoc
     */
    update(emitter: Emitter, time: number): void;
}

import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The RotateVelocity Initializer sets the angular velocity of the particle.
 * It is usually combined with the Rotate action to rotate the particle
 * using this angular velocity.
 */
export declare class RotateVelocity extends InitializerBase {
    /**
     * The maximum angular velocity value for particles initialised by
     * this initializer. Should be between 0 and 1.
     */
    maxAngularVelocity: number;
    /**
     * The minimum angular velocity value for particles initialised by
     * this initializer. Should be between 0 and 1.
     */
    minAngularVelocity: number;
    /**
     * The constructor creates a RotateVelocity initializer for use by
     * an emitter. To add a RotateVelocity to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The angularVelocity of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minAngVelocity The minimum angularVelocity, in
     * radians per second, for the particle's angularVelocity.
     * @param maxAngVelocity The maximum angularVelocity, in
     * radians per second, for the particle's angularVelocity.
     */
    constructor(minAngVelocity?: number, maxAngVelocity?: number);
    /**
     * When reading, returns the average of minAngVelocity and maxAngVelocity.
     * When writing this sets both maxAngVelocity and minAngVelocity to the
     * same angular velocity value.
     */
    angularVelocity: number;
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

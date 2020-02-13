import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The Rotation Initializer sets the rotation of the particle. The rotation is
 * relative to the rotation of the emitter.
 */
export declare class Rotation extends InitializerBase {
    /**
     * The minimum angle for particles initialised by
     * this initializer.
     */
    minAngle: number;
    /**
     * The maximum angle for particles initialised by
     * this initializer.
     */
    maxAngle: number;
    /**
     * The constructor creates a Rotation initializer for use by
     * an emitter. To add a Rotation to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The rotation of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minAngle The minimum angle, in radians, for the particle's rotation.
     * @param maxAngle The maximum angle, in radians, for the particle's rotation.
     */
    constructor(minAngle?: number, maxAngle?: number);
    /**
     * When reading, returns the average of minAngle and maxAngle.
     * When writing this sets both maxAngle and minAngle to the
     * same angle value.
     */
    angle: number;
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The ScaleAllInit Initializer sets the size of the particle
 * and adjusts its mass and collision radius accordingly.
 *
 * <p>This initializer has a priority of -10 to ensure it occurs after
 * mass and radius assignment classes like CollisionRadiusInit and MassInit.</p>
 */
export declare class ScaleAllInit extends InitializerBase {
    /**
     * The minimum scale value for particles initialised by
     * this initializer. Should be between 0 and 1.
     */
    minScale: number;
    /**
     * The maximum scale value for particles initialised by
     * this initializer. Should be between 0 and 1.
     */
    maxScale: number;
    /**
     * The constructor creates a ScaleAllInit initializer for use by
     * an emitter. To add a ScaleAllInit to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The scale factor of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minScale the minimum scale factor for particles
     * initialized by the instance.
     * @param maxScale the maximum scale factor for particles
     * initialized by the instance.
     */
    constructor(minScale?: number, maxScale?: number);
    /**
     * When reading, returns the average of minScale and maxScale.
     * When writing this sets both maxScale and minScale to the
     * same scale value.
     */
    scale: number;
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

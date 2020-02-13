import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from '../../core';

/**
 * The RotateVelocity Initializer sets the angular velocity of the particle.
 * It is usually combined with the Rotate action to rotate the particle
 * using this angular velocity.
 */
export class RotateVelocity extends InitializerBase {
    /**
     * The maximum angular velocity value for particles initialised by 
     * this initializer. Should be between 0 and 1.
     */
    public maxAngularVelocity: number;
    /**
     * The minimum angular velocity value for particles initialised by 
     * this initializer. Should be between 0 and 1.
     */
    public minAngularVelocity: number;

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
    constructor(minAngVelocity: number = 0, maxAngVelocity: number = NaN) {
        super();
        this.minAngularVelocity = minAngVelocity;
        this.maxAngularVelocity = maxAngVelocity;
    }

    /**
     * When reading, returns the average of minAngVelocity and maxAngVelocity.
     * When writing this sets both maxAngVelocity and minAngVelocity to the 
     * same angular velocity value.
     */
    public get angularVelocity(): number {
        return this.minAngularVelocity == this.maxAngularVelocity ? this.minAngularVelocity : (this.maxAngularVelocity + this.minAngularVelocity) / 2;
    }
    public set angularVelocity(value: number) {
        this.maxAngularVelocity = this.minAngularVelocity = value;
    }

    /**
     * @inheritDoc
     */
    public initialize(_emitter: Emitter, particle: Particle): void {
        if (isNaN(this.maxAngularVelocity)) {
            particle.angularVelocity = this.minAngularVelocity;
        }
        else {
            particle.angularVelocity = this.minAngularVelocity + Random.random.random() * (this.maxAngularVelocity - this.minAngularVelocity);
        }
    }
}
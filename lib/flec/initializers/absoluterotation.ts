import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from "../../core";

/**
 * The AbsoluteRotation Initializer sets the rotation of the particle. The rotation is
 * independent of the rotation of the emitter.
 */
export class AbsoluteRotation extends InitializerBase {
    /**
     * The minimum angle for particles initialised by 
     * this initializer.
     */
    public minAngle: number;
    /**
     * The maximum angle for particles initialised by 
     * this initializer.
     */
    public maxAngle: number;

    /**
     * The constructor creates a AbsoluteRotation initializer for use by 
     * an emitter. To add a AbsoluteRotation to all particles created by an emitter, use the
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
    constructor(minAngle: number = 0, maxAngle: number = NaN) {
        super();
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
    }

    /**
     * When reading, returns the average of minAngle and maxAngle.
     * When writing this sets both maxAngle and minAngle to the 
     * same angle value.
     */
    public get angle(): number {
        return this.minAngle == this.maxAngle ? this.minAngle : (this.maxAngle + this.minAngle) / 2;
    }
    public set angle(value: number) {
        this.maxAngle = this.minAngle = value;
    }

    /**
     * @inheritDoc
     */
    public initialize(_emitter: Emitter, particle: Particle): void {
        if (isNaN(this.maxAngle)) {
            particle.rotation = this.minAngle;
        }
        else {
            particle.rotation = this.minAngle + Random.random.random() * (this.maxAngle - this.minAngle);
        }
    }
}
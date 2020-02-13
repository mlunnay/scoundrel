import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The RotationalLinearDrag action applies drag to the particle to slow it down 
 * when it's rotating. The drag force is proportional to the angular velocity of 
 * the particle. For other types of rotational drag see RotationalQuadraticDrag 
 * and RotationalFriction.
 * 
 * @see RotationalFriction
 * @see RotationalQuadraticDrag
 */
export class RotationalLinearDrag extends ActionBase {
    /**
     * The amount of drag. A higher number produces a stronger drag force.
     */
    public drag: number;

    /**
     * The constructor creates a RotationalLinearDrag action for use by an emitter. 
     * To add a RotationalLinearDrag to all particles created by an 
     * emitter, use the emitter's addAction method.
     * 
     * @param drag The amount of drag. A higher number produces a stronger drag 
     * force.
     */
    constructor(drag: number = 0) {
        super();
        this.drag = drag;
    }

    /**
     * Calculates the rotational drag on the particle and applies it for the 
     * period of time indicated.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, time: number): void {
        if (particle.angularVelocity == 0) {
            return;
        }
        var scale: number = 1 - this.drag * time / particle.inertia;
        if (scale < 0) {
            particle.angularVelocity = 0;
        }
        else {
            particle.angularVelocity *= scale;
        }
    }
}
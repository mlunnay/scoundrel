import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The RotationalFriction action applies friction to the particle's rotational 
 * movement to slow it down when it's rotating. The frictional force is 
 * constant, irrespective of how fast the particle is rotating. For forces 
 * proportional to the particle's angular velocity, use one of the rotational 
 * drag effects - RotationalLinearDrag and RotationalQuadraticDrag.
 * 
 * @see RotationalLinearDrag
 * @see RotationalQuadraticDrag
 */
export class RotationalFriction extends ActionBase {
    /**
     * The amount of friction. A higher number produces a stronger frictional 
     * force.
     */
    public friction: number;

    /**
     * The constructor creates a RotationalFriction action for use by an emitter. 
     * To add a RotationalFriction to all particles created by an emitter, 
     * use the emitter's addAction method.
     * 
     * @param friction The amount of friction. A higher number produces a stronger frictional force.
     */
    constructor(friction: number = 0) {
        super();
        this.friction = friction;
    }

    /**
     * Calculates the effect of the friction on the particle over the
     * period of time indicated and adjusts the particle's angular velocity
     * accordingly.
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
        var scale: number = 1 - (this.friction * time) / (Math.abs(particle.angularVelocity) * particle.inertia);
        if (scale < 0) {
            particle.angularVelocity = 0;
        }
        else {
            particle.angularVelocity *= scale;
        }
    }
}
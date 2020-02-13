import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The QuadraticDrag action applies drag to the particle to slow it down when
 * it's moving. The drag force is proportional to the square of the speed of
 * the particle. For other types of drag see the LinerDrag and Friction actions.
 *
 * @see Friction
 * @see LinearDrag
 */
export declare class QuadraticDrag extends ActionBase {
    /**
     * The amount of drag. A higher number produces a stronger drag force.
     */
    drag: number;
    /**
     * The constructor creates a QuadraticDrag action for use by an emitter.
     * To add a QuadraticDrag to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param drag The amount of drag. A higher number produces a stronger
     * drag force.
     */
    constructor(drag?: number);
    /**
     * Calculates the drag on the particle and applies it for the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter: Emitter, particle: Particle, time: number): void;
}

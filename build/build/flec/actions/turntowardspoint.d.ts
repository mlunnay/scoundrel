import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The TurnTowardsPonumber action causes the particle to constantly adjust its
 * direction so that it travels towards a particular ponumber.
 */
export declare class TurnTowardsPonumber extends ActionBase {
    /**
     * The x coordinate of the ponumber that the particle turns towards.
     */
    private x;
    /**
     * The y coordinate of the ponumber that the particle turns towards.
     */
    private y;
    /**
     * The strength of the turn action. Higher values produce a sharper turn.
     */
    private power;
    /**
     * The constructor creates a TurnTowardsPonumber action for use by an emitter.
     * To add a TurnTowardsPonumber to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param power The strength of the turn action. Higher values produce a sharper turn.
     * @param x The x coordinate of the ponumber towards which the particle turns.
     * @param y The y coordinate of the ponumber towards which the particle turns.
     */
    constructor(x?: number, y?: number, power?: number);
    /**
     * Calculates the direction to the focus ponumber and turns the particle towards
     * this direction.
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

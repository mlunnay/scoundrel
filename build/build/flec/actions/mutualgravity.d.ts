import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * The MutualGravity Action applies forces to attract each particle towards
 * the other particles. The force applied is inversely proportional to the
 * square of the distance between the particles, in accordance with Newton's
 * law of gravity. This simulates the effect of gravity over large distances
 * (as between planets, for example).
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
export declare class MutualGravity extends ActionBase {
    private _power;
    private _maxDistance;
    private _maxDistanceSq;
    private _epsilonSq;
    /**
     * The constructor creates a MutualGravity action for use by an emitter.
     * To add a MutualGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param power The strength of the gravitational pull between the
     * particles.
     * @param maxDistance The maximum distance between particles for the
     * gravitational effect to be calculated. You can sometimes speed up
     * the calculation of this action by
     * reducing the maxDistance since often only the closest other particles
     * have a significant effect on the motion of a particle.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small.
     */
    constructor(power?: number, maxDistance?: number, epsilon?: number);
    /**
     * The strength of the gravity force.
     */
    power: number;
    /**
     * The maximum distance between particles for the gravitational
     * effect to be calculated. You can sometimes speed up the calculation
     * of this action by reducing the
     * maxDistance since often only the closest other particles have a
     * significant effect on the motion of a particle.
     */
    maxDistance: number;
    /**
     * The minimum distance for which the gravity force is calculated.
     * Particles closer than this distance experience the gravity as it they
     * were this distance away. This stops the gravity effect blowing up as
     * distances get very small.
     */
    epsilon: number;
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter: Emitter): void;
    /**
     * Checks all particles near the current particle and applies the
     * gravity force between them.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter: Emitter, particle: Particle, time: number): void;
}

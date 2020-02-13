import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

const gravityConst: number = 1000; // scales the power

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
export class MutualGravity extends ActionBase {
    private _power: number;
    private _maxDistance: number;
    private _maxDistanceSq: number;
    private _epsilonSq: number;

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
    constructor(power: number = 0, maxDistance: number = 0, epsilon: number = 1) {
        super();
        this._priority = 10;
        this.power = power;
        this.maxDistance = maxDistance;
        this.epsilon = epsilon;
    }

    /**
     * The strength of the gravity force.
     */
    public get power(): number {
        return this._power / gravityConst;
    }
    public set power(value: number) {
        this._power = value * gravityConst;
    }

    /**
     * The maximum distance between particles for the gravitational
     * effect to be calculated. You can sometimes speed up the calculation 
     * of this action by reducing the 
     * maxDistance since often only the closest other particles have a 
     * significant effect on the motion of a particle.
     */
    public get maxDistance(): number {
        return this._maxDistance;
    }
    public set maxDistance(value: number) {
        this._maxDistance = value;
        this._maxDistanceSq = value * value;
    }

    /**
     * The minimum distance for which the gravity force is calculated. 
     * Particles closer than this distance experience the gravity as it they 
     * were this distance away. This stops the gravity effect blowing up as 
     * distances get very small.
     */
    public get epsilon(): number {
        return Math.sqrt(this._epsilonSq);
    }
    public set epsilon(value: number) {
        this._epsilonSq = value * value;
    }

    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     * 
     * @param emitter The emitter this action has been added to.
     */
    public addedToEmitter(emitter: Emitter): void {
        emitter.spaceSort = true;
    }

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
    public update(emitter: Emitter, particle: Particle, time: number): void {
        if (particle.mass == 0) {
            return;
        }
        var particles = emitter.particlesArray;
        var other: Particle;
        var i: number;
        var len: number = particles.length;
        var factor: number;
        var distance: number;
        var distanceSq: number;
        var dx: number;
        var dy: number;
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if (other.mass == 0) {
                continue;
            }
            if ((dx = other.x - particle.x) > this._maxDistance) break;
            dy = other.y - particle.y;
            if (dy > this._maxDistance || dy < -this._maxDistance) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxDistanceSq && distanceSq > 0) {
                distance = Math.sqrt(distanceSq);
                if (distanceSq < this._epsilonSq) {
                    distanceSq = this._epsilonSq;
                }
                factor = (this._power * time) / (distanceSq * distance);
                particle.velX += (dx *= factor) * other.mass;
                particle.velY += (dy *= factor) * other.mass;
                other.velX -= dx * particle.mass;
                other.velY -= dy * particle.mass;
            }
        }
    }
}
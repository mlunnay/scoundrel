import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The MatchRotateVelocity action applies an angular acceleration to each 
 * particle to match its angular velocity to that of its nearest neighbours.
 * 
 * <p>This action has a priority of 10, so that it executes 
 * before other actions.</p>
 */
export class MatchRotateVelocity extends ActionBase {
    private _max: number;
    private _maxSq: number;
    /**
     * The angular acceleration applied to adjust the angular velocity to 
     * match that of the other particles.
     */
    public acceleration: number;

    /**
     * The constructor creates a MatchRotateVelocity action for use by an 
     * emitter. To add a MatchRotateVelocity to all particles created by an 
     * emitter, use the emitter's addAction method.
     * 
     * @param maxDistance The maximum distance, in pixels, over which this 
     * action operates. The particle will match its angular velocity to other 
     * particles that are at most this close to it.
     * @param acceleration The angular acceleration applied to adjust the
     * angular velocity to match that of the other particles.
     */
    constructor(maxDistance: number = 0, acceleration: number = 0) {
        super();
        this._priority = 10;
        this.maxDistance = maxDistance;
        this.acceleration = acceleration;
    }

    /**
     * The maximum distance, in pixels, over which this action operates.
     * The particle will match its angular velocity other particles that are 
     * at most this close to it.
     */
    public get maxDistance(): number {
        return this._max;
    }
    public set maxDistance(value: number) {
        this._max = value;
        this._maxSq = value * value;
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
     * angular acceleration to alter the particle's angular velocity
     * towards their average angular velocity.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(emitter: Emitter, particle: Particle, time: number): void {
        var particles = emitter.particlesArray;
        var other: Particle;
        var i: number;
        var len: number = particles.length;
        var distanceSq: number;
        var dx: number;
        var dy: number;
        var vel: number = 0;
        var count: number = 0;
        var factor: number;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._max) break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                vel += other.angularVelocity;
                ++count;
            }
        }
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if ((dx = other.x - particle.x) > this._max) break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                vel += other.angularVelocity;
                ++count;
            }
        }
        if (count != 0) {
            vel = vel / count - particle.angularVelocity;
            if (vel != 0) {
                var velSign: number = 1;
                if (vel < 0) {
                    velSign = -1;
                    vel = -vel;
                }
                factor = time * this.acceleration;
                if (factor > vel) factor = vel;
                particle.angularVelocity += factor * velSign;
            }
        }
    }
}
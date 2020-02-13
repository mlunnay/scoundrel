import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The MatchVelocity action applies an acceleration to each particle to match
 * its velocity to that of its nearest neighbours.
 * 
 * <p>This action has a priority of 10, so that it executes 
 * before other actions.</p>
 */
export class MatchVelocity extends ActionBase {
    private _max: number;
    private _maxSq: number;
    /**
     * The acceleration applied to adjust each
     * particle's velocity to match that of the other particles near it
     */
    public acceleration: number;

    /**
     * The constructor creates a MatchVelocity action for use by an emitter. 
     * To add a MatchVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param maxDistance The maximum distance, in pixels, over which this 
     * action operates. The particle will match its velocity other particles 
     * that are at most this close to it.
     * @param acceleration The acceleration applied to adjust each
     * particle's velocity to match that of the other particles near it.
     */
    constructor(maxDistance: number = 0, acceleration: number = 0) {
        super();
        this._priority = 10;
        this.maxDistance = maxDistance;
        this.acceleration = acceleration;
    }

    /**
     * The maximum distance, in pixels, over which this action operates.
     * The particle will match its velocity other particles that are this close or closer to it.
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
     * acceleration to alter the particle's velocity
     * towards their average velocity.
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
        var velX: number = 0;
        var velY: number = 0;
        var count: number = 0;
        var factor: number;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._max) break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                velX += other.velX;
                velY += other.velY;
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
                velX += other.velX;
                velY += other.velY;
                ++count;
            }
        }
        if (count != 0) {
            velX = velX / count - particle.velX;
            velY = velY / count - particle.velY;
            if (velX != 0 || velY != 0) {
                factor = time * this.acceleration / Math.sqrt(velX * velX + velY * velY);
                if (factor > 1) factor = 1;
                particle.velX += factor * velX;
                particle.velY += factor * velY;
            }
        }
    }
}
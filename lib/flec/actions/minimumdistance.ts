import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The MinimumDistance action applies an acceleration to the particle to 
 * manumberain a minimum distance between it and its neighbours.
 * 
 * <p>This action has a priority of 10, so that it executes 
 * before other actions.</p>
 */
export class MinimumDistance extends ActionBase {
    private _min: number;
    private _minSq: number;
    /**
     * The acceleration force applied to avoid the other particles.
     */
    public acceleration: number;

    /**
     * The constructor creates a MinimumDistance action for use by an emitter. 
     * To add a MinimumDistance to all particles created by an emitter, use 
     * the emitter's addAction method.
     * 
     * @param minimum The minimum distance, in pixels, that this action 
     * manumberains between particles.
     * @param acceleration The acceleration force applied to avoid the 
     * other particles.
     */
    constructor(minimum: number = 0, acceleration: number = 0) {
        super();
        this._priority = 10;
        this.minimum = minimum;
        this.acceleration = acceleration;
    }

    /**
     * The minimum distance, in pixels, that this action manumberains between 
     * particles.
     */
    public get minimum(): number {
        return this._min;
    }
    public set minimum(value: number) {
        this._min = value;
        this._minSq = value * value;
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
     * Checks for particles closer than the minimum distance to the current 
     * particle and if any are found applies the acceleration to move the 
     * particles apart.
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
        var distanceInv: number;
        var distanceSq: number;
        var dx: number;
        var dy: number;
        var moveX: number = 0;
        var moveY: number = 0;
        var factor: number;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._min) break;
            dy = particle.y - other.y;
            if (dy > this._min || dy < -this._min) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._minSq && distanceSq > 0) {
                distanceInv = 1 / Math.sqrt(distanceSq);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if ((dx = particle.x - other.x) < -this._min) break;
            dy = particle.y - other.y;
            if (dy > this._min || dy < -this._min) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._minSq && distanceSq > 0) {
                distanceInv = 1 / Math.sqrt(distanceSq);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        if (moveX != 0 || moveY != 0) {
            factor = time * this.acceleration / Math.sqrt(moveX * moveX + moveY * moveY);
            particle.velX += factor * moveX;
            particle.velY += factor * moveY;
        }
    }
}
import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

const powerFactor = 100000;

/**
 * This Action applies a force on the particles to push them away from a single point.
 * The force occurs instantanrously at the central point of the expolosion and then ripples out in a shock wave.
 * 
 * @extends ActionBase
 */
export class Explosion extends ActionBase {
    private _power: number;
    private _depth: number;
    private _invDepth: number;
    private _epsilonSqr: number;
    private _radius: number = 0;
    private _oldRadius: number = 0;
    private _radiusChange: number = 0;

    /**
     * The x coordinate of the center of the explosion.
     */
    public x: number;
    /**
     * The y coordinate of the center of the explosion.
     */
    public y: number;

    /**
     * The strength of the explosion. Larger numbers produce a stronger force.
     */
    public get power() { return this._power / powerFactor; }
    public set power(value: number) {
        this._power = value * powerFactor;
    }

    /**
     * The rate at whish the shockwave moves out from the center of the explosion, in pixels per millisecond.
     */
    public expansionRate: number;

    /**
     * The depth (front-edge to back-edge) of the shock wave.
     */
    public get depth() { return this._depth * 2; }
    public set depth(value: number) {
        this._depth = value * 0.5;
        this._invDepth = 1 / this._depth;
    }

    /**
     * The minimum distance for which the explosion force is calculated. 
     * Particles closer than this distance to the center of the explosion
     * experience the explosion as it they were this distance away. This 
     * stops the explosion effect blowing up as distances get small.
     */
    public get epsilon() { return Math.sqrt(this._epsilonSqr); }
    public set epsilon(value: number) {
        this._epsilonSqr = value * value;
    }

    constructor(power: number = 0, x: number = 0, y: number = 0, expansionRate: number = 300, depth: number = 10, epsilon: number = 1) {
        super();
        this.power = power;
        this.x = x;
        this.y = y;
        this.expansionRate = expansionRate;
        this.depth = depth;
        this.epsilon = epsilon;
    }

    public reset() {
        this._radius = 0;
        this._oldRadius = 0;
        this._radiusChange = 0;
    }

    addedToEmitter(emitter: Emitter): void {
        emitter.addFrameUpdateCallback(this.frameUpdate);
    }

    removedFromEmitter(emitter: Emitter): void {
        emitter.removeFrameUpdateCallback(this.frameUpdate);
    }

    private frameUpdate(_emitter: Emitter, time: number) {
        this._oldRadius = this._radius;
        this._radiusChange = this.expansionRate * time;
        this._radius += this._radiusChange;
    }

    update(_emitter: Emitter, particle: Particle, time: number) {
        var x: number = particle.x - this.x;
        var y: number = particle.y - this.y;
        var dSq: number = x * x + y * y;
        if (dSq == 0) {
            dSq = 0.02;
            x = 0.1;
            y = 0.1;
        }
        var d: number = Math.sqrt(dSq);

        if (d < this._oldRadius - this._depth) {
            return;
        }
        if (d > this._radius + this._depth) {
            return;
        }

        var offset: number = d < this._radius ? this._depth - this._radius + d : this._depth - d + this._radius;
        var oldOffset: number = d < this._oldRadius ? this._depth - this._oldRadius + d : this._depth - d + this._oldRadius;
        offset *= this._invDepth;
        oldOffset *= this._invDepth;
        if (offset < 0) {
            time = time * (this._radiusChange + offset) / this._radiusChange;
            offset = 0;
        }
        if (oldOffset < 0) {
            time = time * (this._radiusChange + oldOffset) / this._radiusChange;
            oldOffset = 0;
        }

        var factor: number;
        if (d < this._oldRadius || d > this._radius) {
            factor = time * this._power * (offset + oldOffset) / (this._radius * 2 * d * particle.mass);
        }
        else {
            var ratio: number = (1 - oldOffset) / this._radiusChange;
            var f1: number = ratio * time * this._power * (oldOffset + 1);
            var f2: number = (1 - ratio) * time * this._power * (offset + 1);
            factor = (f1 + f2) / (this._radius * 2 * d * particle.mass);
        }
        particle.velX += x * factor;
        particle.velY += y * factor;
    }
}
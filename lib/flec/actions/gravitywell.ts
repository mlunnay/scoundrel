import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action applies a force on the particle to draw it towards a point.
 * The force applied is inversly proportianal to the squeare of the distance from the particle to the point, in accordance with Newton's law of gravity.
 * @extends ActionBase
 */
export class GravityWell extends ActionBase {
    private static gravityConstant: number = 10000; // just scales the power to a more reasonable number
    private _power: number;
    private _epsilonSquared: number;

    public get power() { 
        return this._power / GravityWell.gravityConstant; 
    }
    public set power(value: number) {
        this._power = value * GravityWell.gravityConstant;
    }

    public get epsilon() {
        return Math.sqrt(this._epsilonSquared);
    }
    public set epsilon(value: number) {
        this._epsilonSquared = value * value;
    }

    /**
     * 
     * @param power The strength of the gravity force.
     * @param x The x coordinate of the point towards which the force draws the particle.
     * @param y The y coordinate of the point towards which the force draws the particle.
     * @param epsilon The minimum distance for which gravity is calculated. 
     * Particles closer than this distance experience a gravity force as if 
     * they were this distance away. This stops the gravity effect blowing 
     * up as distances get small. For realistic gravity effects you will want 
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power: number = 0, public x: number = 0, public y: number = 0, epsilon: number = 100) {
        super();
        this.power = power;
        this.epsilon = epsilon;
    }

    public update(_emitter: Emitter, particle: Particle, time: number) {
        if(particle.mass === 0)
            return;
        
        var x = this.x - particle.x;
        var y = this.y - particle.y;
        var dsqr = x * x + y * y;
        if(dsqr === 0)
            return;
        if(dsqr < this._epsilonSquared) dsqr = this._epsilonSquared;
        var factor = (this._power * time) / (dsqr * Math.sqrt(dsqr));
        particle.velX += x * factor;
        particle.velY += y * factor;
    }
}
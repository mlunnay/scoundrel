import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action applies friction to the particle to slow it down when it's moving.
 * The frictional force is constant, irrespective of how fast the particle is moving.
 * 
 * @extends ActionBase
 */
export class Friction extends ActionBase {
    /**
     * The amount of friction. A higher number produces a stronger frictional force.
     */
    public friction: number;

    constructor(friction: number = 0) {
        super();
        this.friction = friction;
    }

    update(_emitter: Emitter, particle: Particle, time: number) {
        var len = particle.velX * particle.velX + particle.velY * particle.velY;
        if(len !== 0) {
            var scale = 1 - (this.friction * time) / (Math.sqrt(len) * particle.mass);
            if(scale < 0) {
                particle.velX = 0;
                particle.velY = 0;
            }
            else {
                particle.velX *= scale;
                particle.velY *= scale;
            }
        }
    }
}
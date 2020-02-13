import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action detects collisions between particles and modifies their velocities in response to the collision.
 * All particles are approximated to a circular shape for the collisions and they are assumed to be of even density.
 * 
 * <p>If the particles reach a stationary, or near stationary, state under an 
 * accelerating force (e.g. gravity) then they will fall through each other. 
 * This is due to the nature of the alogorithm used, which is designed for 
 * speed of execution and sufficient accuracy when the particles are in motion, 
 * not for absolute precision.</p>
 * 
 * @extends ActionBase
 */
export class Collide extends ActionBase {
    // used to alternate the direction of parsing the collisions
    private _sign: number = 1;
    private _maxDistance: number = 0;

    /**
     * The coefficient of restitution when the particles collide.
     * A value of 1 gives a pure pure elastic collision, with no energy loss. 
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value 
     * greater than 1 causes the particle to gain energy in the collision.
     */
    public bounce: number;

    constructor(bounce: number = 1) {
        super();
        this._priority = -20;
        this.bounce = bounce;
    }

    update(emitter: Emitter, particle: Particle, _time: number): void {
        var particles = emitter.particlesArray;
        var other: Particle;
        var i: number;
        var factor: number;
        var distanceSq: number;
        var collisionDist: number;
        var dx: number, dy: number;
        var n1: number, n2: number;
        var relN: number;
        var m1: number, m2: number;
        var f1: number, f2: number;
        for (i = particle.sortID + this._sign; i < particles.length && i >= 0; i += this._sign) {
            other = particles[i];
            if ((dx = other.x - particle.x) * this._sign > this._maxDistance) break;
            collisionDist = other.collisionRadius + particle.collisionRadius;
            if (dx * this._sign > collisionDist) continue;
            dy = other.y - particle.y;
            if (dy > collisionDist || dy < -collisionDist) continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= collisionDist * collisionDist && distanceSq > 0) {
                factor = 1 / Math.sqrt(distanceSq);
                dx *= factor;
                dy *= factor;
                n1 = dx * particle.velX + dy * particle.velY;
                n2 = dx * other.velX + dy * other.velY;
                relN = n1 - n2;
                if (relN > 0) // colliding, not separating
                {
                    m1 = particle.mass;
                    m2 = other.mass;
                    factor = ((1 + this.bounce) * relN) / (m1 + m2);
                    f1 = factor * m2;
                    f2 = -factor * m1;
                    particle.velX -= f1 * dx;
                    particle.velY -= f1 * dy;
                    other.velX -= f2 * dx;
                    other.velY -= f2 * dy;
                    emitter.emit('particleCollision', particle);
                }
            }
        }
    }

    addedToEmitter(emitter: Emitter): void {
        emitter.addFrameUpdateCallback(this.frameUpdate);
    }

    removedFromEmitter(emitter: Emitter): void {
        emitter.removeFrameUpdateCallback(this.frameUpdate);
    }

    private frameUpdate(emitter: Emitter, _time: number) {
        var max1 = 0;
        var max2 = 0;
        for (var p of emitter.particlesArray) {
            if (p.collisionRadius > max1) {
                max2 = max1;
                max1 = p.collisionRadius;
            }
            else if (p.collisionRadius > max2)
                max2 = p.collisionRadius;
        }
        this._maxDistance = max1 + max2;
        this._sign = -this._sign;
    }
}
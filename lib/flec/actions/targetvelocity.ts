import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The TargetVelocity action adjusts the velocity of the particle towards the 
 * target velocity.
 */
export class TargetVelocity extends ActionBase {
    /**
     * The x coordinate of the target velocity, in pixels per second.s
     */
    public targetVelocityX: number;
    /**
     * The y coordinate of the target velocity, in pixels per second.
     */
    public targetVelocityY: number;
    /**
     * Adjusts how quickly the particle reaches the target velocity.
     * Larger numbers cause it to approach the target velocity more quickly.
     */
    public rate: number;

    /**
     * The constructor creates a TargetVelocity action for use by an emitter. 
     * To add a TargetVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param velX The x coordinate of the target velocity, in pixels per second.
     * @param velY The y coordinate of the target velocity, in pixels per second.
     * @param rate Adjusts how quickly the particle reaches the target velocity.
     * Larger numbers cause it to approach the target velocity more quickly.
     */
    constructor(targetVelocityX: number = 0, targetVelocityY: number = 0, rate: number = 0.1) {
        super();
        this.targetVelocityX = targetVelocityX;
        this.targetVelocityY = targetVelocityY;
        this.rate = rate;
    }

    /**
     * Calculates the difference between the particle's velocity and
     * the target and adjusts the velocity closer to the target by an
     * amount proportional to the difference, the time and the rate of convergence.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, time: number): void {
        particle.velX += (this.targetVelocityX - particle.velX) * this.rate * time;
        particle.velY += (this.targetVelocityY - particle.velY) * this.rate * time;
    }
}
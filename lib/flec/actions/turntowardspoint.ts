import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The TurnTowardsPonumber action causes the particle to constantly adjust its 
 * direction so that it travels towards a particular ponumber.
 */
export class TurnTowardsPonumber extends ActionBase {
    /**
     * The x coordinate of the ponumber that the particle turns towards.
     */
    private x: number;
    /**
     * The y coordinate of the ponumber that the particle turns towards.
     */
    private y: number;
    /**
     * The strength of the turn action. Higher values produce a sharper turn.
     */
    private power: number;

    /**
     * The constructor creates a TurnTowardsPonumber action for use by an emitter. 
     * To add a TurnTowardsPonumber to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param power The strength of the turn action. Higher values produce a sharper turn.
     * @param x The x coordinate of the ponumber towards which the particle turns.
     * @param y The y coordinate of the ponumber towards which the particle turns.
     */
    constructor(x: number = 0, y: number = 0, power: number = 0) {
        super();
        this.power = power;
        this.x = x;
        this.y = y;
    }

    /**
     * Calculates the direction to the focus ponumber and turns the particle towards 
     * this direction.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, time: number): void {
        var velLength: number = Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        var dx: number = particle.velX / velLength;
        var dy: number = particle.velY / velLength;
        var acc: number = this.power * time;
        var targetX: number = this.x - particle.x;
        var targetY: number = this.y - particle.y;
        var len: number = Math.sqrt(targetX * targetX + targetY * targetY);
        if (len == 0) {
            return;
        }
        targetX /= len;
        targetY /= len;
        var dot: number = targetX * dx + targetY * dy;
        var perpX: number = targetX - dx * dot;
        var perpY: number = targetY - dy * dot;
        var factor: number = acc / Math.sqrt(perpX * perpX + perpY * perpY);
        particle.velX += perpX * factor;
        particle.velY += perpY * factor;
        factor = velLength / Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        particle.velX *= factor;
        particle.velY *= factor;
    }
}
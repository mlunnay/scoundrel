import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The ScaleAll action adjusts the size of the particle, its collision radius
 * and its mass as it ages. It uses the particle's energy level to decide what size 
 * the particle should be.
 * 
 * <p>Usually a particle's energy changes from 1 to 0 over its lifetime, but
 * this can be altered via the easing set within the age action.</p>
 * 
 * <p>This action should be used in conjunction with the Age action.</p>
 */
export class ScaleAll extends ActionBase {
    private _diffScale: number = 0;
    private _endScale: number = 1;

    /**
     * The constructor creates a ScaleAll action for use by an emitter. 
     * To add a ScaleAll to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param startScale The scale factor for the particle when its energy
     * is 1 - usually at the start of its lifetime. A scale of 1 is normal size.
     * @param endScale The scale factor for the particle when its energy
     * is 0 - usually at the end of its lifetime. A scale of 1 is normal size.
     */
    constructor(startScale: number = 1, endScale: number = 1) {
        super();
        this.startScale = startScale;
        this.endScale = endScale;
    }

    /**
     * The scale factor for the particle when its energy
     * is 1 - usually at the start of its lifetime. A scale of 1 is normal size.
     */
    public get startScale(): number {
        return this._endScale + this._diffScale;
    }
    public set startScale(value: number) {
        this._diffScale = value - this._endScale;
    }

    /**
     * The scale factor for the particle when its energy
     * is 0 - usually at the end of its lifetime. A scale of 1 is normal size.
     */
    public get endScale(): number {
        return this._endScale;
    }
    public set endScale(value: number) {
        this._diffScale = this._endScale + this._diffScale - value;
        this._endScale = value;
    }

    /**
     * Sets the scale of the particle based on the values defined
     * and the particle's energy level.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, _time: number): void {
        var scale: number = this._endScale + this._diffScale * particle.energy;
        var change: number = scale / particle.scale;

        particle.scale = scale;
        particle.mass *= change * change;
        particle.collisionRadius *= change;
    }
}
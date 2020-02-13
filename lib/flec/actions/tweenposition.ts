import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The TweenPosition action adjusts the particle's position between two
 * locations as it ages. The position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
export class TweenPosition extends ActionBase {
    private _diffX: number = 0;
    private _endX: number = 0;
    private _diffY: number = 0;
    private _endY: number = 0;

    /**
     * The constructor creates a TweenPosition action for use by an emitter. 
     * To add a TweenPosition to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param startX The x value for the particle's position when its energy is 1.
     * @param startY The y value for the particle's position when its energy is 1.
     * @param endX The x value of the particle's position when its energy is 0.
     * @param endY The y value of the particle's position when its energy is 0.
     */
    constructor(startX: number = 0, startY: number = 0, endX: number = 0, endY: number = 0) {
        super();
        this.startX = startX;
        this.endX = endX;
        this.startY = startY;
        this.endY = endY;
    }

    /**
     * The x position for the particle's position when its energy is 1.
     */
    public get startX(): number {
        return this._endX + this._diffX;
    }
    public set startX(value: number) {
        this._diffX = value - this._endX;
    }

    /**
     * The X value for the particle's position when its energy is 0.
     */
    public get endX(): number {
        return this._endX;
    }
    public set endX(value: number) {
        this._diffX = this._endX + this._diffX - value;
        this._endX = value;
    }

    /**
     * The y position for the particle's position when its energy is 1.
     */
    public get startY(): number {
        return this._endY + this._diffY;
    }
    public set startY(value: number) {
        this._diffY = value - this._endY;
    }

    /**
     * The y value for the particle's position when its energy is 0.
     */
    public get endY(): number {
        return this._endY;
    }
    public set endY(value: number) {
        this._diffY = this._endY + this._diffY - value;
        this._endY = value;
    }

    /**
     * Calculates the current position of the particle based on it's energy.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.x = this._endX + this._diffX * particle.energy;
        particle.y = this._endY + this._diffY * particle.energy;
    }
}
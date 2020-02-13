import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Initializer } from "../initializers";
import { Zone } from "../zones";
import { Vector2 } from "../../core";

/**
 * The TweenToCurrentPosition action adjusts the particle's position between two
 * locations as it ages. The start location is a random ponumber within the specified
 * zone, and the end location is the particle's position when it is created or added 
 * to the emitter. The current position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
export class TweenToCurrentPosition extends ActionBase implements Initializer {
    /**
     * The zone for the particle's position when its energy is 0.
     */
    public zone: Zone;

    /**
     * The constructor creates a TweenToCurrentPosition action for use by an emitter. 
     * To add a TweenToCurrentPosition to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param zone The zone for the particle's position when its energy is 0.
     */
    constructor(zone: Zone) {
        super();
        this.zone = zone;
        this._priority = -10;
    }

    /**
     * 
     */
    public addedToEmitter(emitter: Emitter): void {
        if (!emitter.hasInitializer(this)) {
            emitter.addInitializer(this);
        }
    }

    public removedFromEmitter(emitter: Emitter): void {
        emitter.removeInitializer(this);
    }

    /**
     * 
     */
    public initialize(_emitter: Emitter, particle: Particle): void {
        var pt: Vector2 = this.zone.getLocation();
        var data: TweenToPositionData = new TweenToPositionData(pt.x, pt.y, particle.x, particle.y);
        particle.data.set('TweenToCurrentPosition', data);
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
    public update(emitter: Emitter, particle: Particle, _time: number): void {
        if (!particle.data.has('TweenToCurrentPosition')) {
            this.initialize(emitter, particle);
        }
        var data: TweenToPositionData = particle.data.get('TweenToCurrentPosition');
        particle.x = data.endX + data.diffX * particle.energy;
        particle.y = data.endY + data.diffY * particle.energy;
    }
}

export class TweenToPositionData
{
	public diffX : number;
	public diffY : number;
	public endX : number;
	public endY : number;

	constructor( startX : number, startY : number, endX : number, endY : number )
	{
		this.diffX = startX - endX;
		this.diffY = startY - endY;
		this.endX = endX;
		this.endY = endY;
	}
}
import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Action } from "../actions";
import { Zone } from "../zones";

/**
 * The ZonedAction Action applies an action to the particle only if it is in 
 * the specified zone. 
 */
export class ZonedAction extends ActionBase {
    /**
     * The action to apply when inside the zone.
     */
    public action: Action;
    /**
     * The zone in which to apply the acceleration.
     */
    public zone: Zone;
    /**
     * If false (the default), the action is applied only to particles inside 
     * the zone. If true, the action is applied only to particles outside the zone.
     */
    public invertZone: boolean;

    /**
     * The constructor creates a ZonedAction action for use by an emitter. 
     * To add a ZonedAction to all particles created by an emitter, use the
     * emitter's addAction method.
     * 
     * @param action The action to apply when inside the zone.
     * @param zone The zone in which to apply the action.
     * @param invertZone If false (the default) the action is applied only to 
     * particles inside the zone. If true the action is applied only to 
     * particles outside the zone.
     */
    constructor(action: Action, zone: Zone, invertZone: boolean = false) {
        super();
        this.action = action;
        this.zone = zone;
        this.invertZone = invertZone;
    }

    /**
     * Provides acces to the priority of the action being used.
     * 
     * @see org.flintparticles.common.actions.Action#getDefaultPriority()
     */
    public get priority() {
        return this.action.priority;
    }
    public set priority(value: number) {
        this.action.priority = value;
    }

    /**
     * Calls the addedToEmitter method of the action being used.
     * 
     * @param emitter The emitter this action has been added to.
     */
    public addedToEmitter(emitter: Emitter): void {
        this.action.addedToEmitter(emitter);
    }

    /**
     * Calls the removedFromEmitter method of the action being used.
     * 
     * @param emitter The emitter this action has been added to.
     */
    public removedFromEmitter(emitter: Emitter): void {
        this.action.removedFromEmitter(emitter);
    }

    /**
     * Checks if the particle is in the zone and if so calls the update
     * method of the action being used.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user.</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(emitter: Emitter, particle: Particle, time: number): void {
        if (this.zone.contains(particle.x, particle.y)) {
            if (!this.invertZone) {
                this.action.update(emitter, particle, time);
            }
        }
        else {
            if (this.invertZone) {
                this.action.update(emitter, particle, time);
            }
        }
    }
}
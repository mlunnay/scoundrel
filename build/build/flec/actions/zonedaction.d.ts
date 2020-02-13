import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Action } from "../actions";
import { Zone } from "../zones";
/**
 * The ZonedAction Action applies an action to the particle only if it is in
 * the specified zone.
 */
export declare class ZonedAction extends ActionBase {
    /**
     * The action to apply when inside the zone.
     */
    action: Action;
    /**
     * The zone in which to apply the acceleration.
     */
    zone: Zone;
    /**
     * If false (the default), the action is applied only to particles inside
     * the zone. If true, the action is applied only to particles outside the zone.
     */
    invertZone: boolean;
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
    constructor(action: Action, zone: Zone, invertZone?: boolean);
    /**
     * Provides acces to the priority of the action being used.
     *
     * @see org.flintparticles.common.actions.Action#getDefaultPriority()
     */
    priority: number;
    /**
     * Calls the addedToEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter: Emitter): void;
    /**
     * Calls the removedFromEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     */
    removedFromEmitter(emitter: Emitter): void;
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
    update(emitter: Emitter, particle: Particle, time: number): void;
}

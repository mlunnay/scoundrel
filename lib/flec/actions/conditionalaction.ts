import { ActionBase } from './actionbase';
import { Action } from './action';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action causes another action to fire only if a contidion if matched.
 * @extends ActionBase
 */
export class ConditionalAction extends ActionBase {
    public condition: (emitter: Emitter, particle: Particle, time: number) => boolean;
    public action: Action;

    constructor(condition: (emitter: Emitter, particle: Particle, time: number) => boolean, action: Action) {
        super();
        this.condition = condition;
        this.action = action;
    }

    update(emitter: Emitter, particle: Particle, time: number): void {
        if(this.condition(emitter, particle, time))
            this.action.update(emitter, particle, time);
    }

    addedToEmitter(emitter: Emitter): void {
        this.action.addedToEmitter(emitter);
    }
    removedFromEmitter(emitter: Emitter): void {
        this.action.removedFromEmitter(emitter);
    }
}
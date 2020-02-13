import { ActionBase } from './actionbase';
import { Action } from './action';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Action causes another action to fire only if a contidion if matched.
 * @extends ActionBase
 */
export declare class ConditionalAction extends ActionBase {
    condition: (emitter: Emitter, particle: Particle, time: number) => boolean;
    action: Action;
    constructor(condition: (emitter: Emitter, particle: Particle, time: number) => boolean, action: Action);
    update(emitter: Emitter, particle: Particle, time: number): void;
    addedToEmitter(emitter: Emitter): void;
    removedFromEmitter(emitter: Emitter): void;
}

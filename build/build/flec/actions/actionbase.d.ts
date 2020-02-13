import { Action } from './action';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
export declare class ActionBase implements Action {
    protected _priority: number;
    priority: number;
    update(_emitter: Emitter, _particle: Particle, _time: number): void;
    addedToEmitter(_emitter: Emitter): void;
    removedFromEmitter(_emitter: Emitter): void;
}

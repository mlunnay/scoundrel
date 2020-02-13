import { Action } from './action';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

export class ActionBase implements Action {
    protected _priority: number = 0;

    get priority() { return this._priority; }
    set priority(value: number) {
        this._priority = value;
    }
    
    update(_emitter: Emitter, _particle: Particle, _time: number): void {
        
    }
    
    addedToEmitter(_emitter: Emitter): void {
        
    }
    removedFromEmitter(_emitter: Emitter): void {
        
    }


}
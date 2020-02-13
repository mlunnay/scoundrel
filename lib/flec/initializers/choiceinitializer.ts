import { Initializer } from './initializer';
import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { WeightedArray } from "../../core"

/**
 * This initializer selects one of multiple initializers with optional weighting.
 */
export class ChoiceInitializer extends InitializerBase {
    private _initializers: WeightedArray = new WeightedArray();

    constructor(initializers?: Initializer[] | [Initializer, number][]){
        super();
        if(initializers !== undefined && initializers.length > 0) {
            if(initializers[0] instanceof Array) {
                for(let i of <[Initializer, number][]>initializers)
                    this._initializers.add(i[0], i[1]);
            }
            else {
                for(let i of <Initializer[]>initializers)
                    this._initializers.add(i, 1);
            }
        }
    }

    public addInitializer(initializer: Initializer, weight: number = 1) {
        this._initializers.add(initializer, weight);
    }

    public removeInitializer(initializer: Initializer) {
        this._initializers.remove(initializer);
    }

    /**
     * 
     */
    initialize(emitter: Emitter, particle: Particle): void {
        (<Initializer>this._initializers.getRandomValue()).initialize(emitter, particle);
    }
}
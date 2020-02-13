import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { WeightedArray } from "../../core";

/**
 * This Initializer sets the value of a given property choosing from a value from a weighted array.
 */
export class WeightedPropertyInitializer extends InitializerBase {
    private _values: WeightedArray = new WeightedArray();

    constructor(public property: string, public values: number[] | [number, number][]) {
        super();
        if(values !== undefined && values.length > 0) {
            if(values[0] instanceof Array) {
                for(let i of <[number, number][]>values)
                    this._values.add(i[0], i[1]);
            }
            else {
                for(let i of <number[]>values)
                    this._values.add(i, 1);
            }
        }
    }

    initialize(_emitter: Emitter, particle: Particle) {
        (<any>particle)[this.property] = <number>this._values.getRandomValue();
    }
}
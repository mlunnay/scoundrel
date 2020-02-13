import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Initializer sets the value of a given property choosing from a value from a weighted array.
 */
export declare class WeightedPropertyInitializer extends InitializerBase {
    property: string;
    values: number[] | [number, number][];
    private _values;
    constructor(property: string, values: number[] | [number, number][]);
    initialize(_emitter: Emitter, particle: Particle): void;
}

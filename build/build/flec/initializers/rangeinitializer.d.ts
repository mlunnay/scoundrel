import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Initializer sets the value of a given property to a random value between a minimum and maximum
 */
export declare class RangeInitializer extends InitializerBase {
    min: number;
    max: number;
    property: string;
    constructor(property: string, min: number, max?: number);
    initialize(_emitter: Emitter, particle: Particle): void;
}

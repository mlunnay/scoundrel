import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This Initializer sets the value of a given property.
 */
export declare class PropertyInitializer extends InitializerBase {
    property: string;
    value: number;
    constructor(property: string, value?: number);
    initialize(_emitter: Emitter, particle: Particle): void;
}

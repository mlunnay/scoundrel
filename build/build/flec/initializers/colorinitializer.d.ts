import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { RGBA } from '../../core';
/**
 * This initializer sets the initial color of a particle from a color between two colors.
 */
export declare class ColorInitializer extends InitializerBase {
    min: RGBA;
    max?: RGBA;
    constructor(min?: RGBA, max?: RGBA);
    initialize(_emitter: Emitter, particle: Particle): void;
}

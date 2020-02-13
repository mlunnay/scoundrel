import { Initializer } from './initializer';
import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This initializer selects one of multiple initializers with optional weighting.
 */
export declare class ChoiceInitializer extends InitializerBase {
    private _initializers;
    constructor(initializers?: Initializer[] | [Initializer, number][]);
    addInitializer(initializer: Initializer, weight?: number): void;
    removeInitializer(initializer: Initializer): void;
    /**
     *
     */
    initialize(emitter: Emitter, particle: Particle): void;
}

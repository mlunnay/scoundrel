import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
export declare class AlphaInitializer extends InitializerBase {
    min: number;
    max: number;
    /**
     * Constructor
     * @param min The minimum alpha value.
     * @param max The maximum aplha value.
     */
    constructor(min?: number, max?: number);
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

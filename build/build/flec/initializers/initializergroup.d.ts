import { Initializer } from "./initializer";
import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This initializer collects a number of initializers into a single larger initializer.
 */
export declare class InitializerGroup extends InitializerBase {
    initializers: Initializer[];
    constructor(...initializers: Initializer[]);
    addInitializer(i: Initializer): void;
    removeInitializer(i: Initializer): void;
    addedToEmitter(emitter: Emitter): void;
    removedFromEmitter(emitter: Emitter): void;
    initialize(emitter: Emitter, particle: Particle): void;
}

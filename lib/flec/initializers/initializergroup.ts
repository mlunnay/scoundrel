import { Initializer } from "./initializer";
import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This initializer collects a number of initializers into a single larger initializer.
 */
export class InitializerGroup extends InitializerBase {
    public initializers: Initializer[] = [];

    constructor(...initializers: Initializer[]) {
        super();
        for(var i of initializers) {
            this.addInitializer(i);
        }
    }

    public addInitializer(i: Initializer) {
        this.initializers.push(i);
    }

    public removeInitializer(i: Initializer) {
        this.initializers.remove(i);
    }

    addedToEmitter(emitter: Emitter): void {
        for(var i = 0; i < this.initializers.length; i++)
            this.initializers[i].addedToEmitter(emitter);
    }

    removedFromEmitter(emitter: Emitter): void {
        for(var i = 0; i < this.initializers.length; i++)
            this.initializers[i].removedFromEmitter(emitter);
    }

    initialize(emitter: Emitter, particle: Particle): void {
        for(var i = 0; i < this.initializers.length; i++)
            this.initializers[i].initialize(emitter, particle);
    }
}
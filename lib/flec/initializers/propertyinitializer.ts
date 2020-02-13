import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Initializer sets the value of a given property.
 */
export class PropertyInitializer extends InitializerBase {
    constructor(public property: string, public value: number = 1) {
        super();
    }

    initialize(_emitter: Emitter, particle: Particle): void {
        (<any>particle)[this.property] = this.value;
    }
}
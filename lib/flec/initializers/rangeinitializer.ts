import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from "../../core"

/**
 * This Initializer sets the value of a given property to a random value between a minimum and maximum
 */
export class RangeInitializer extends InitializerBase {
    public min: number;
    public max: number;
    public property: string;

    constructor(property: string, min: number, max?: number) {
        super();
        this.property = property;
        this.min = min;
        this.max = max !== undefined ? max : min;
    }

    initialize(_emitter: Emitter, particle: Particle): void {
        var value = this.max === this.min ? this.min : this.min + Random.random.random() * (this.max - this.min);
        (<any>particle)[this.property] = value;
    }
}
import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from "../../core";

export class AlphaInitializer extends InitializerBase {
    public min: number;
    public max: number;

    /**
     * Constructor
     * @param min The minimum alpha value.
     * @param max The maximum aplha value.
     */
    constructor(min: number = 1, max?: number) {
        super();
        this._priority = -10;
        this.min = min;
        this.max = max !== undefined ? max : min;
    }

    /**
     * @inheritDoc 
     */
    initialize(_emitter: Emitter, particle: Particle): void {
        var alpha = this.max === this.min ? this.min : this.min + Random.random.random() * (this.max - this.min);
        particle.color.a = alpha;
    }
}
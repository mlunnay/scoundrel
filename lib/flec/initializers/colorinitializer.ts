import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { RGBA } from '../../core';
import { Random } from "../../core"

/**
 * This initializer sets the initial color of a particle from a color between two colors.
 */
export class ColorInitializer extends InitializerBase {
    public min: RGBA;
    public max?: RGBA;

    constructor(min: RGBA = new RGBA(1,1,1,1), max?: RGBA) {
        super();
        this.min = min;
        this.max = max;
    }

    initialize(_emitter: Emitter, particle: Particle): void {
        particle.color = this.max === undefined ? this.min.clone() : RGBA.lerp(this.min, this.max, Random.random.random());
    }
}
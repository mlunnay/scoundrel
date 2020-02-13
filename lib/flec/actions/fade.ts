import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action modifies the alpha of the particle as it ages.
 * It uses the particle's energy level to decide what alpha the particle should have.
 * @extends ActionBase
 */
export class Fade extends ActionBase {
    public diffAlpha: number;
    public endAlpha: number;

    get startAlpha() { return this.endAlpha + this.diffAlpha; }
    set startAlpha(value: number) { this.diffAlpha = value - this.endAlpha; }

    constructor(startAlpha: number = 1, endAlpha: number = 1) {
        super();
        this.diffAlpha = startAlpha - endAlpha;
        this.endAlpha = endAlpha;
    }

    update(_emitter: Emitter, particle: Particle, _time: number): void {
        var alpha = Math.round(this.endAlpha + this.diffAlpha * particle.energy * 255);
        particle.color.a = alpha; // extra bit shifting and multiplication is needed as bit operations break down for 2^32 -1
    }
}
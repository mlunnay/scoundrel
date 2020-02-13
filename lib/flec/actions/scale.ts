import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action modifies the scale of the particle as it ages.
 * It uses the particle's energy level to decide what scale the particle should have.
 * @extends ActionBase
 */
export class ChangeScale extends ActionBase {
    public diffScale: number;
    public endScale: number;

    get startScale() { return this.endScale + this.diffScale; }
    set startScale(value: number) { this.diffScale = value - this.endScale; }

    constructor(startScale: number = 1, endScale: number = 1) {
        super();
        this.diffScale = startScale - endScale;
        this.endScale = endScale;
    }

    update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.scale = this.endScale + this.diffScale * particle.energy;
    }
}
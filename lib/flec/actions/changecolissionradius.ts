import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action modifies the collision radius of the particle as it ages.
 * It uses the particle's energy level to decide what radius the particle should have.
 * @extends ActionBase
 */
export class ChangeCollisionRadius extends ActionBase {
    public diffRadius: number;
    public endRadius: number;

    get startRadius() { return this.endRadius + this.diffRadius; }
    set startRadius(value: number) { this.diffRadius = value - this.endRadius; }

    constructor(startRadius: number = 1, endRadius: number = 1) {
        super();
        this.diffRadius = startRadius - endRadius;
        this.endRadius = endRadius;
    }

    update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.collisionRadius = this.endRadius + this.diffRadius * particle.energy;
    }
}
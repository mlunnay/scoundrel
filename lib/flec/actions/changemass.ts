import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action modifies the mass of the particle as it ages.
 * It uses the particle's energy level to decide what mass the particle should have.
 * @extends ActionBase
 */
export class ChangeMass extends ActionBase {
    public diffMass: number;
    public endMass: number;

    get startMass() { return this.endMass + this.diffMass; }
    set startMass(value: number) { this.diffMass = value - this.endMass; }

    constructor(startMass: number = 1, endMass: number = 1) {
        super();
        this.diffMass = startMass - endMass;
        this.endMass = endMass;
    }

    update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.mass = this.endMass + this.diffMass * particle.energy;
    }
}
import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { RGBA } from "../../core";

/**
 * This Action modifies the color of the particle as it ages.
 * It uses the particle's energy level to decide what color the particle should have.
 * @extends ActionBase
 */
export class ChangeColor extends ActionBase {
    public startColor: RGBA;
    public endColor: RGBA;

    constructor(startColor: RGBA = new RGBA(1,1,1,1), endColor: RGBA = new RGBA(1,1,1,1)) {
        super();
        this.startColor = startColor;
        this.endColor = endColor;
    }

    update(_emitter: Emitter, particle: Particle, _time: number): void {
        particle.color = RGBA.lerp(this.endColor, this.startColor, particle.energy);
    }
}
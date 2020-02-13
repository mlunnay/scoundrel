import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Random } from "../../core";

/**
 * The ScaleAllInit Initializer sets the size of the particle
 * and adjusts its mass and collision radius accordingly.
 * 
 * <p>This initializer has a priority of -10 to ensure it occurs after 
 * mass and radius assignment classes like CollisionRadiusInit and MassInit.</p>
 */
export class ScaleAllInit extends InitializerBase {
	/**
	 * The minimum scale value for particles initialised by 
	 * this initializer. Should be between 0 and 1.
	 */
	public minScale: number;
	/**
	 * The maximum scale value for particles initialised by 
	 * this initializer. Should be between 0 and 1.
	 */
	public maxScale: number;

	/**
	 * The constructor creates a ScaleAllInit initializer for use by 
	 * an emitter. To add a ScaleAllInit to all particles created by an emitter, use the
	 * emitter's addInitializer method.
	 * 
	 * <p>The scale factor of particles initialized by this class
	 * will be a random value between the minimum and maximum
	 * values set. If no maximum value is set, the minimum value
	 * is used with no variation.</p>
	 * 
	 * @param minScale the minimum scale factor for particles
	 * initialized by the instance.
	 * @param maxScale the maximum scale factor for particles
	 * initialized by the instance.
	 */
	constructor(minScale: number = 1, maxScale: number = NaN) {
		super();
		this._priority = -10;
		this.minScale = minScale;
		this.maxScale = isNaN(maxScale) ? minScale : maxScale;
	}

	/**
	 * When reading, returns the average of minScale and maxScale.
	 * When writing this sets both maxScale and minScale to the 
	 * same scale value.
	 */
	public get scale(): number {
		return this.minScale == this.maxScale ? this.minScale : (this.maxScale + this.minScale) / 2;
	}
	public set scale(value: number) {
		this.maxScale = this.minScale = value;
	}

	/**
	 * @inheritDoc
	 */
	public initialize(_emitter: Emitter, particle: Particle): void {
		var scale: number;
		if (this.maxScale == this.minScale) {
			scale = this.minScale;
		}
		else {
			scale = this.minScale + Random.random.random() * (this.maxScale - this.minScale);
		}
		particle.scale = scale;
		particle.mass *= scale * scale;
		particle.collisionRadius *= scale;
	}
}
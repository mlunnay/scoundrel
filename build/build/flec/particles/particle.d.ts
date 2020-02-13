import { Matrix3 } from '../../core';
import { ParticleFactory } from "./particlefactory";
import { RGBA } from '../../core';
export declare class Particle {
    /**
     * The x coordinate of the particle.
     */
    x: number;
    /**
     * The y coordinate of the particle.
     */
    y: number;
    /**
     * The x coordinate of the particle for the previous update.
     */
    previousX: number;
    /**
     * The y coordinate of the particle for the previous update.
     */
    previousY: number;
    /**
     * 32bit RGBA color of the particle.
     */
    color: RGBA;
    private _previousColor;
    /**
     * scale of the particle.
     */
    scale: number;
    /**
     * Mass of the particle.
     */
    mass: number;
    /**
     * The radius of the particle for collision approximation.
     */
    collisionRadius: number;
    /**
     * The lifetime of the particle.
     */
    lifetime: number;
    /**
     * The age of the particle in milliseconds.
     */
    age: number;
    /**
     * The energy of the particle.
     */
    energy: number;
    /**
     * Whether the particle is dead.
     */
    isDead: boolean;
    /**
     * The x coordinate of the velocity of the particle.
     */
    velX: number;
    /**
     * The y coordinate of the velocity of the particle.
     */
    velY: number;
    /**
     * The rotation of the particle in radians.
     */
    rotation: number;
    /**
     * The angular velocity of the particle in radians / second.
     */
    angularVelocity: number;
    sortID: number;
    private _previousMass;
    private _previousRadius;
    private _inertia;
    private _data;
    /**
     * A data dictionary that can be utilised by actions and activities.
     */
    readonly data: Map<any, any>;
    /**
     * The inertia of the paricle around its center point.
     */
    readonly inertia: number;
    /**
     * Gets the transformation matrix for the particle
     */
    readonly transform: Matrix3;
    /**
     * Sets the default values for the particle.
     */
    initialize(): void;
    /**
     * Creates a new particle with all the same properties as this one.
     * @param factory Optional ParticleFactory to create the new particle.
     */
    clone(factory?: ParticleFactory): Particle;
    revive(): void;
}

import { Matrix3 } from '../../core';
import { ParticleFactory } from "./particlefactory";
import { RGBA } from '../../core'

export class Particle {
    /**
     * The x coordinate of the particle.
     */
    public x: number = 0;
    /**
     * The y coordinate of the particle.
     */
    public y: number = 0;
    /**
     * The x coordinate of the particle for the previous update.
     */
    public previousX: number = 0;
    /**
     * The y coordinate of the particle for the previous update.
     */
    public previousY: number = 0;
    /**
     * 32bit RGBA color of the particle.
     */
    public color: RGBA = new RGBA(1,1,1,1);
    private _previousColor: RGBA = new RGBA(1,1,1,1);
    /**
     * scale of the particle.
     */
    public scale: number = 1;
    /**
     * Mass of the particle.
     */
    public mass: number = 1;
    /**
     * The radius of the particle for collision approximation.
     */
    public collisionRadius: number = 1;
    /**
     * The lifetime of the particle.
     */
    public lifetime:number = 0;
    /**
     * The age of the particle in milliseconds.
     */
    public age:number = 0;
    /**
     * The energy of the particle.
     */
    public energy:number = 1;
    /**
     * Whether the particle is dead.
     */
    public isDead:boolean = false;
    /**
     * The x coordinate of the velocity of the particle.
     */
    public velX: number = 0;
    /**
     * The y coordinate of the velocity of the particle.
     */
    public velY: number = 0;
    /**
     * The rotation of the particle in radians.
     */
    public rotation: number = 0;
    /**
     * The angular velocity of the particle in radians / second.
     */
    public angularVelocity: number = 0;

    public sortID: number = 0;

    private _previousMass: number = 0;
    private _previousRadius: number = 0;
    private _inertia:number = 0;

    private _data: Map<any, any> = new Map<any, any>();
    /**
     * A data dictionary that can be utilised by actions and activities.
     */
    public get data() { return this._data; }

    /**
     * The inertia of the paricle around its center point.
     */
    public get inertia() {
        if(this.mass != this._previousMass || this.collisionRadius != this._previousRadius) {
            this._inertia = this.mass * this.collisionRadius * this.collisionRadius * 0.5;
            this._previousMass = this.mass;
            this._previousRadius = this.collisionRadius;
        }
        return this._inertia;
    }

    /**
     * Gets the transformation matrix for the particle
     */
    public get transform() {
        var cos = this.scale * Math.cos(this.rotation);
        var sin = this.scale * Math.sin(this.rotation);
        return new Matrix3([cos, sin, -sin, cos, this.x, this.y, 0, 0, 1]);
    }

    /**
     * Sets the default values for the particle.
     */
    public initialize() {
        this.color = this._previousColor = new RGBA(1,1,1,1);
        this.scale = 1;
        this.collisionRadius = 1;
        this.lifetime = 0;
        this.age = 0;
        this.energy = 1;
        this.isDead = false;
        this._data = new Map<string, any>();
        this.x = 0;
        this.y = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.velX = 0;
        this.velY = 0;
        this.rotation = 0;
        this.angularVelocity = 0;
    }

    /**
     * Creates a new particle with all the same properties as this one.
     * @param factory Optional ParticleFactory to create the new particle.
     */
    public clone(factory?: ParticleFactory): Particle {
        var p = factory !== undefined ? factory.createParticle() : new Particle();
        p.color = this.color;
        p.scale = this.scale;
        p.mass = this.mass;
        p.collisionRadius = this.collisionRadius;
        p.lifetime = this.lifetime;
        p.age = this.age;
        p.energy = this.energy;
        p.isDead = this.isDead;
        p._data = new Map<string, any>();
        for(var [key, value] of this._data)
            p._data.set(key, value);
        p.x = this.x;
        p.y = this.y;
        p.velX = this.velX;
        p.velY = this.velY;
        p.rotation = this.rotation;
        p.angularVelocity = this.angularVelocity;
        return p;
    }

    public revive() {
        this.lifetime = 0;
        this.age = 0;
        this.energy = 1;
        this.isDead = false;
    }
}
import { ParticleFactory, Particle } from "./particles"
import { EventEmitter } from "eventemitter3";
import { Initializer } from "./initializers";
import { Action } from "./actions";
import { Activity } from "./activities";
import { Spawner, ZeroSpawner } from "./spawners";
import { FrameUpdater } from "./utils";

export type frameUpdateCallback = (emitter: Emitter, time: number)=>void;

/**
 * An Emitter manages the creation and state of particles.
 */
export class Emitter extends EventEmitter {
    private particleFactory: ParticleFactory = new ParticleFactory();
    private initializers: Initializer[] = [];
    private actions: Action[] = [];
    private activities: Activity[] = [];
    private particles: Particle[] = [];
    private _spawner: Spawner = new ZeroSpawner();
    private _running: boolean = false;
    private started: boolean = false;
    private updating: boolean = false;
    private _useInternalUpdate: boolean = true;
    private frameUpdateCallbacks: frameUpdateCallback[] = [];
    /**
     * Used to alternate the direction in which the particles in the particles
     * array are processed, to iron out errors from always processing them in
     * the same order.
     */
    private _processLastFirst:Boolean = false;

    public x: number = 0;
    public y: number = 0;
    /**Rotation in radians */
    public rotation: number = 0;
    /**Indicates whether the particles should be arranged into spacially sorted arrays. */
    public spaceSort: boolean = false;

    /**
     * Add an Initializer to the Emitter.
     * @param initializer The Initializer to add.
     */
    public addInitializer(initializer: Initializer) {
        for(var i = 0; i < this.initializers.length; i++){
            if(this.initializers[i].priority < initializer.priority)
                break;
        }
        this.initializers.splice(i, 0, initializer);
        initializer.addedToEmitter(this);
    }

    /**
     * Remove an Initializer from the Emitter.
     * @param initializer The Initializer to remove.
     */
    public removeInitializer(initializer: Initializer) {
        var index;
        if((index = this.initializers.indexOf(initializer)) !== -1) {
            this.initializers.splice(index, 1);
            initializer.removedFromEmitter(this);
        }
    }

    /**
     * Check if the Emitter has an Initializer
     * @param initializer The Initializer to test for.
     */
    public hasInitializer(initializer: Initializer): boolean {
        return this.initializers.indexOf(initializer) !== -1;
    }

    /**
     * Check if the Emitter has an Initializer of the given Class
     * @example
     * emitter.hasInitializerOfType(ColorInit);
     * @param cls The Class to test for.
     */
    public hasInitializerOfType(cls: new (...arg: any[]) => Initializer): boolean {
        for(var i = 0; i < this.initializers.length; i++) {
            if(this.initializers[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }

    /**
     * Add an Activity to the Emitter.
     * @param activity The Activity to add.
     */
    public addActivity(activity: Activity) {
        for(var i = 0; i < this.activities.length; i++){
            if(this.activities[i].priority < activity.priority)
                break;
        }
        this.activities.splice(i, 0, activity);
        activity.addedToEmitter(this);
    }

    /**
     * Remove an Activity from the Emitter.
     * @param activity The Activity to remove.
     */
    public removeActivity(activity: Activity) {
        var index;
        if((index = this.activities.indexOf(activity)) !== -1) {
            this.activities.splice(index, 1);
            activity.removedFromEmitter(this);
        }
    }

    /**
     * Check if the Emitter has an Activity
     * @param activity The Activity to test for.
     */
    public hasActivity(activity: Activity): boolean {
        return this.activities.indexOf(activity) !== -1;
    }

    /**
     * Check if the Emitter has an Activity of the given Class
     * @example
     * emitter.hasActivityOfType(ColorInit);
     * @param cls The Class to test for.
     */
    public hasActivityOfType(cls: new (...arg: any[]) => Activity): boolean {
        for(var i = 0; i < this.activities.length; i++) {
            if(this.activities[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }

    /**
     * Add an Action to the Emitter.
     * @param action The Action to add.
     */
    public addAction(action: Action) {
        for(var i = 0; i < this.actions.length; i++){
            if(this.actions[i].priority < action.priority)
                break;
        }
        this.actions.splice(i, 0, action);
        action.addedToEmitter(this);
    }

    /**
     * Remove an Action from the Emitter.
     * @param action The Action to remove.
     */
    public removeAction(action: Action) {
        var index;
        if((index = this.actions.indexOf(action)) !== -1) {
            this.actions.splice(index, 1);
            action.removedFromEmitter(this);
        }
    }

    /**
     * Check if the Emitter has an Action
     * @param action The Action to test for.
     */
    public hasAction(action: Action): boolean {
        return this.actions.indexOf(action) !== -1;
    }

    /**
     * Add a frameUpdateCallback to the emitter.
     * @param cb The callback to add.
     */
    public addFrameUpdateCallback(cb: frameUpdateCallback) {
        this.frameUpdateCallbacks.push(cb);
    }

    public removeFrameUpdateCallback(cb: frameUpdateCallback) {
        var index;
        if((index = this.frameUpdateCallbacks.indexOf(cb)) !== -1) {
            this.frameUpdateCallbacks.splice(index, 1);
        }
    }

    /**
     * Check if the Emitter has an Action of the given Class
     * @example
     * emitter.hasActionOfType(ColorInit);
     * @param cls The Class to test for.
     */
    public hasActionOfType(cls: new (...arg: any[]) => Action): boolean {
        for(var i = 0; i < this.actions.length; i++) {
            if(this.actions[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }

    public get particlesArray() { return this.particles; }

    /**
     * Indicates if the emitter is running or not.
     */
    public get running() { return this._running; }

    public get spawner() { return this._spawner; }
    public set spawner(value: Spawner) {
        this._spawner = value;
        if(this._running)
            this._spawner.startEmitter(this);
    }

    public get rotationDegrees() { return Math.asDegrees(this.rotation); }
    public set rotationDegrees(value: number) { this.rotation = Math.asRadians(value); }

    public get useInternalUpdate() { return this._useInternalUpdate; }
    public set useInternalUpdate(value: boolean) {
        if(this._useInternalUpdate != value) {
            this._useInternalUpdate = value;
            if(this.started) {
                if(value)
                    FrameUpdater.instance.addListener('update', this.update);
                else
                    FrameUpdater.instance.removeListener('update', this.update);
            }
        }
    }

    constructor() {
        super();

    }

    /**
     * Usedd internally to create a particle.
     */
    protected createParticle(): Particle {
        var particle = this.particleFactory.createParticle();
        this.initParticle(particle);
        for(var i = 0; i < this.initializers.length; i++)
            this.initializers[i].initialize(this, particle);
        this.particles.push(particle);
        this.emit('particalCreated', particle);
        return particle;
    }

    /**
     * Used to initialise a particle relative to the Emitter.
     * @param particle The Particle to initialise.
     */
    protected initParticle(particle: Particle) {
        particle.x = this.x;
        particle.y = this.y;
        particle.previousX = this.x;
        particle.previousY = this.y;
        particle.rotation = this.rotation;
    }

    protected sortParticles() {
        if(this.spaceSort){
            this.particles.sort((a: Particle, b: Particle) => {
                return a.x - b.x || a.y - b.y;
            });
            for(var i = 0; i < this.particles.length; i++)
                this.particles[i].sortID = i;
        }
    }

    /**
     * This method allows a particle to be manually added to the Emitter
     * @param particle The Particle to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particle.
     */
    public addParticle(particle: Particle, applyInitializers: boolean = false) {
        if(applyInitializers){
            for (var i = 0; i < this.initializers.length; i++) {
                this.initializers[i].initialize(this, particle);
            }
        }
        this.particles.push(particle);
        this.emit('particleAdded', particle);
    }

    /**
     * Manually add multiple particles to the Emitter.
     * @param particles An array of Particles to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particles.
     */
    public addParticles(particles: Particle[], applyInitializers: boolean = false) {
        for (var i = 0; i < particles.length; i++) {
            if(applyInitializers) {
                for (var j = 0; j < this.initializers.length; j++) {
                    this.initializers[j].initialize(this, particles[i]);
                }
            }
            this.particles.push(particles[i]);
            this.emit('particleAdded', particles[i]);
        }
    }

    /**
     * Remove a particle from the emitter.
     * @param particle The Particle to remove.
     * @return true if the particle was remove, false otherwise.
     */
    public removeParticle(particle: Particle): boolean {
        var i = this.particles.indexOf(particle);
        if(i != -1){
            if(this.updating) {
                this.once('emitterUpdated', () => {
                    this.particles.remove(particle);
                    this.emit('particleRemoved', particle);
                });
            }
            else {
                this.particles.remove(particle);
                this.emit('particleRemoved', particle);
            }
            return true;
        }
        return false;
    }

    /**
     * Remove multiple particles from the emitter.
     * @param particles An array of the particles to remove.
     */
    public removeParticles(particles: Particle[]) {
        if(this.updating) {
            this.once('emitterUpdated', () => {
                for (var i = 0; i < particles.length; i++) {
                    this.particles.remove(particles[i]);
                    this.emit('particleRemoved', particles[i]);
                }
            });
        }
        else {
            for (var i = 0; i < particles.length; i++) {
                this.particles.remove(particles[i]);
                this.emit('particleRemoved', particles[i]);
            }
        }
    }

    /**
     * Kill all of the particles of the emitter.
     */
    public killAllParticles() {
        for (var i = 0; i < this.particles.length; i++) {
            this.emit('particleDead', this.particles[i]);
            this.particleFactory.disposeParticle(this.particles[i]);
        }
        this.particles = [];
    }

    /**
     * Starts the emitter.
     */
    public start() {
        if(this._useInternalUpdate)
            FrameUpdater.instance.addListener('update', this.update);
        this.started = true;
        this._running = true;
        for (var i = 0; i < this.activities.length; i++) {
            this.activities[i].initialize(this);
        }
        var count = this._spawner.startEmitter(this);
        for(var i = 0; i < count; i++)
            this.createParticle();
    }

    /**
     * This updates the emitter. If useInternalUpdate is true this will be automatically called each animation frame.
     * @param time The duration, in milliseconds, from the last update.
     */
    public update(time: number) {
        if(!this._running)
            return;
        
        this.updating = true;
        var spawnerComplete = this._spawner.isComplete;
        var count = this._spawner.updateEmitter(this, time);
        if(spawnerComplete !== this.spawner.isComplete)
            this.emit('spawnerComplete', this);
        for(var i = 0; i < count; i++)
            this.createParticle();
        this.sortParticles();

        for(var i = 0; i < this.frameUpdateCallbacks.length; i++)
            this.frameUpdateCallbacks[i](this, time);

        for(var i = 0; i < this.activities.length; i++)
            this.activities[i].update(this, time);

        for(var i = 0; i < this.particles.length; i++) {
            if(this._processLastFirst)
                i = this.particles.length - 1 - i;
            for(var j = 0; j < this.actions.length; j++) {
                this.actions[i].update(this, this.particles[i], time);
            }
        }

        for(var i = this.particles.length - 1; i >= 0; i--) {
            var particle = this.particles[i];
            if(particle.isDead) {
                this.particles.splice(i, 1);
                this.emit('particleDead', particle);
                this.particleFactory.disposeParticle(particle);
            }
        }
        if(this.particles.length === 0)
            this.emit('emitterEmpty', this);
        this.updating = false;
        this.emit('emitterUpdated', this);
    }

    /**
     * Pause the emitter.
     */
    public pause() {
        this._running = false;
    }

    /**
     * Resume the emitter.
     */
    public resume() {
        this._running = true;
    }

    /**
     * Stops the emitter killing all particles.
     */
    public stop() {
        if(this._useInternalUpdate)
            FrameUpdater.instance.removeListener('update', this.update);
        this.started = false;
        this._running = false;
        this.killAllParticles();
    }

    /**
     * Makes the emitter skip forwards a period of time with a single update.
     * Used when you want the emitter to look like it's been running for a while.
     * @param time The time to skip ahead, in milliseconds.
     * @param frameRate The framerate for calculating the new states of the particles, in frames per second.
     */
    public runAhead(time: number, frameRate: number = 10) {
        var step: number = 1000 / frameRate;
        while(time > 0) {
            time -= step;
            this.update(step);
        }
    }
 }
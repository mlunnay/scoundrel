import { Particle } from "./particles";
import { EventEmitter } from "eventemitter3";
import { Initializer } from "./initializers";
import { Action } from "./actions";
import { Activity } from "./activities";
import { Spawner } from "./spawners";
export declare type frameUpdateCallback = (emitter: Emitter, time: number) => void;
/**
 * An Emitter manages the creation and state of particles.
 */
export declare class Emitter extends EventEmitter {
    private particleFactory;
    private initializers;
    private actions;
    private activities;
    private particles;
    private _spawner;
    private _running;
    private started;
    private updating;
    private _useInternalUpdate;
    private frameUpdateCallbacks;
    /**
     * Used to alternate the direction in which the particles in the particles
     * array are processed, to iron out errors from always processing them in
     * the same order.
     */
    private _processLastFirst;
    x: number;
    y: number;
    /**Rotation in radians */
    rotation: number;
    /**Indicates whether the particles should be arranged into spacially sorted arrays. */
    spaceSort: boolean;
    /**
     * Add an Initializer to the Emitter.
     * @param initializer The Initializer to add.
     */
    addInitializer(initializer: Initializer): void;
    /**
     * Remove an Initializer from the Emitter.
     * @param initializer The Initializer to remove.
     */
    removeInitializer(initializer: Initializer): void;
    /**
     * Check if the Emitter has an Initializer
     * @param initializer The Initializer to test for.
     */
    hasInitializer(initializer: Initializer): boolean;
    /**
     * Check if the Emitter has an Initializer of the given Class
     * @example
     * emitter.hasInitializerOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasInitializerOfType(cls: new (...arg: any[]) => Initializer): boolean;
    /**
     * Add an Activity to the Emitter.
     * @param activity The Activity to add.
     */
    addActivity(activity: Activity): void;
    /**
     * Remove an Activity from the Emitter.
     * @param activity The Activity to remove.
     */
    removeActivity(activity: Activity): void;
    /**
     * Check if the Emitter has an Activity
     * @param activity The Activity to test for.
     */
    hasActivity(activity: Activity): boolean;
    /**
     * Check if the Emitter has an Activity of the given Class
     * @example
     * emitter.hasActivityOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasActivityOfType(cls: new (...arg: any[]) => Activity): boolean;
    /**
     * Add an Action to the Emitter.
     * @param action The Action to add.
     */
    addAction(action: Action): void;
    /**
     * Remove an Action from the Emitter.
     * @param action The Action to remove.
     */
    removeAction(action: Action): void;
    /**
     * Check if the Emitter has an Action
     * @param action The Action to test for.
     */
    hasAction(action: Action): boolean;
    /**
     * Add a frameUpdateCallback to the emitter.
     * @param cb The callback to add.
     */
    addFrameUpdateCallback(cb: frameUpdateCallback): void;
    removeFrameUpdateCallback(cb: frameUpdateCallback): void;
    /**
     * Check if the Emitter has an Action of the given Class
     * @example
     * emitter.hasActionOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasActionOfType(cls: new (...arg: any[]) => Action): boolean;
    readonly particlesArray: Particle[];
    /**
     * Indicates if the emitter is running or not.
     */
    readonly running: boolean;
    spawner: Spawner;
    rotationDegrees: number;
    useInternalUpdate: boolean;
    constructor();
    /**
     * Usedd internally to create a particle.
     */
    protected createParticle(): Particle;
    /**
     * Used to initialise a particle relative to the Emitter.
     * @param particle The Particle to initialise.
     */
    protected initParticle(particle: Particle): void;
    protected sortParticles(): void;
    /**
     * This method allows a particle to be manually added to the Emitter
     * @param particle The Particle to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particle.
     */
    addParticle(particle: Particle, applyInitializers?: boolean): void;
    /**
     * Manually add multiple particles to the Emitter.
     * @param particles An array of Particles to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particles.
     */
    addParticles(particles: Particle[], applyInitializers?: boolean): void;
    /**
     * Remove a particle from the emitter.
     * @param particle The Particle to remove.
     * @return true if the particle was remove, false otherwise.
     */
    removeParticle(particle: Particle): boolean;
    /**
     * Remove multiple particles from the emitter.
     * @param particles An array of the particles to remove.
     */
    removeParticles(particles: Particle[]): void;
    /**
     * Kill all of the particles of the emitter.
     */
    killAllParticles(): void;
    /**
     * Starts the emitter.
     */
    start(): void;
    /**
     * This updates the emitter. If useInternalUpdate is true this will be automatically called each animation frame.
     * @param time The duration, in milliseconds, from the last update.
     */
    update(time: number): void;
    /**
     * Pause the emitter.
     */
    pause(): void;
    /**
     * Resume the emitter.
     */
    resume(): void;
    /**
     * Stops the emitter killing all particles.
     */
    stop(): void;
    /**
     * Makes the emitter skip forwards a period of time with a single update.
     * Used when you want the emitter to look like it's been running for a while.
     * @param time The time to skip ahead, in milliseconds.
     * @param frameRate The framerate for calculating the new states of the particles, in frames per second.
     */
    runAhead(time: number, frameRate?: number): void;
}

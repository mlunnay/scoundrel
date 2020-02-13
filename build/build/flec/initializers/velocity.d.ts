import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
/**
 * The Velocity Initializer sets the velocity of the particle. It is
 * usually combined with the Move action to move the particle
 * using this velocity.
 *
 * <p>The initial velocity is defined using a zone from the
 * zones module. The use of zones enables diverse
 * ranges of velocities. For example, to use a specific velocity,
 * a Point zone can be used. To use a varied speed in a specific
 * direction, a LineZone zone can be used. For a fixed speed in
 * a varied direction, a Disc or DiscSector zone with identical
 * inner and outer radius can be used. A Disc or DiscSector with
 * different inner and outer radius produces a range of speeds
 * in a range of directions.</p>
 */
export declare class Velocity extends InitializerBase {
    zone: Zone;
    /**
     * The constructor creates a Velocity initializer for use by
     * an emitter. To add a Velocity to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * @param velocity The zone to use for creating the velocity.
     */
    constructor(zone: Zone);
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
/**
 * The Position Initializer sets the initial location of the particle.
 *
 * <p>The class uses zones to place the particle. A zone defines a region
 * in relation to the emitter and the particle is placed at a random point within
 * that region. For precise placement, the Point zone defines a single
 * point at which all particles will be placed. Various zones (and the
 * Zones interface for use when implementing custom zones) are defined
 * in the org.flintparticles.twoD.zones package.</p>
 */
export declare class Position extends InitializerBase {
    zone: Zone;
    /**
     * The constructor creates a Position initializer for use by
     * an emitter. To add a Position to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * @param zone The zone to place all particles in.
     */
    constructor(zone: Zone);
    /**
     * @inheritDoc
     */
    initialize(_emitter: Emitter, particle: Particle): void;
}

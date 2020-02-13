import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
import { Vector2 } from "../../core";

/**
 * The AbsolutePosition Initializer sets the initial location of the particle.
 * 
 * <p>The class uses zones to place the particle. A zone defines a region
 * in the coordinate space of the particle system, independent of the emitter's position,
 * and the particle is placed at a random point within
 * that region. For precise placement, the Point zone defines a single
 * point at which all particles will be placed. Various zones (and the
 * Zones interface for use when implementing custom zones) are defined
 * in the zones module.</p>
 */
export class AbsolutePosition extends InitializerBase {
    public zone: Zone;

    /**
     * The constructor creates a AbsolutePosition initializer for use by 
     * an emitter. To add a PositionAbsolute to all particles created by an emitter, use the
     * emitter's addInitializer method.
     * 
     * @param zone The zone to place all particles in.
     */
    constructor(zone: Zone) {
        super();
        this.zone = zone;
    }

    /**
     * @inheritDoc
     */
    public initialize(_emitter: Emitter, particle: Particle): void {
        var loc: Vector2 = this.zone.getLocation();
        particle.x = loc.x;
        particle.y = loc.y;
        particle.previousX = particle.x;
        particle.previousY = particle.y;
    }
}
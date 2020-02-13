import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
import { Vector2 } from "../../core";

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
export class Position extends InitializerBase {
    public zone: Zone;

    /**
     * The constructor creates a Position initializer for use by 
     * an emitter. To add a Position to all particles created by an emitter, use the
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
        if (particle.rotation == 0) {
            particle.x += loc.x;
            particle.y += loc.y;
        }
        else {
            var sin: number = Math.sin(particle.rotation);
            var cos: number = Math.cos(particle.rotation);
            particle.x += cos * loc.x - sin * loc.y;
            particle.y += cos * loc.y + sin * loc.x;
        }
        particle.previousX = particle.x;
        particle.previousY = particle.y;
    }
}
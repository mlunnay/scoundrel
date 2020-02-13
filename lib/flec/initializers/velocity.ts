import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
import { Zone } from "../zones";
import { Vector2 } from "../../core";

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
export class Velocity extends InitializerBase {
    public  zone: Zone;

    /**
     * The constructor creates a Velocity initializer for use by 
     * an emitter. To add a Velocity to all particles created by an emitter, use the
     * emitter's addInitializer method.
     * 
     * @param velocity The zone to use for creating the velocity.
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
            particle.velX = loc.x;
            particle.velY = loc.y;
        }
        else {
            var sin: number = Math.sin(particle.rotation);
            var cos: number = Math.cos(particle.rotation);
            particle.velX = cos * loc.x - sin * loc.y;
            particle.velY = cos * loc.y + sin * loc.x;
        }
    }
}
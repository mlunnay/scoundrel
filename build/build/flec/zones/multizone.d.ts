import { Zone } from './zone';
import { Vector2 } from "../../core";
import { Particle } from "../particles";
/**
 * The MutiZone zone defines a zone that combines other zones into one larger zone.
 */
export declare class MultiZone implements Zone {
    private _zones;
    private _areas;
    private _totalArea;
    /**
     * The constructor defines a MultiZone zone.
     */
    constructor();
    /**
     * The addZone method is used to add a zone into this MultiZone object.
     *
     * @param zone The zone you want to add.
     */
    addZone(zone: Zone): void;
    /**
     * The removeZone method is used to remove a zone from this MultiZone object.
     *
     * @param zone The zone you want to add.
     */
    removeZone(zone: Zone): void;
    /**
     * @inheritDoc
     */
    contains(x: number, y: number): boolean;
    /**
     * @inheritDoc
     */
    getLocation(): Vector2;
    /**
     * @inheritDoc
     */
    getArea(): number;
    /**
     * @inheritDoc
     */
    collideParticle(particle: Particle, bounce?: number): boolean;
}

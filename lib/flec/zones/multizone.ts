import { Zone } from './zone';
import { Vector2, Random } from "../../core";
import { Particle } from "../particles";

/**
 * The MutiZone zone defines a zone that combines other zones into one larger zone.
 */
export class MultiZone implements Zone {
    private _zones: Zone[];
    private _areas: number[];
    private _totalArea: number;

    /**
     * The constructor defines a MultiZone zone.
     */
    constructor() {
        this._zones = [];
        this._areas = [];
        this._totalArea = 0;
    }

    /**
     * The addZone method is used to add a zone into this MultiZone object.
     * 
     * @param zone The zone you want to add.
     */
    public addZone(zone: Zone): void {
        this._zones.push(zone);
        var area: number = zone.getArea();
        this._areas.push(area);
        this._totalArea += area;
    }

    /**
     * The removeZone method is used to remove a zone from this MultiZone object.
     * 
     * @param zone The zone you want to add.
     */
    public removeZone(zone: Zone): void {
        var len: number = this._zones.length;
        for (var i: number = 0; i < len; ++i) {
            if (this._zones[i] == zone) {
                this._totalArea -= this._areas[i];
                this._areas.splice(i, 1);
                this._zones.splice(i, 1);
                return;
            }
        }
    }

    /**
     * @inheritDoc
     */
    public contains(x: number, y: number): boolean {
        var len: number = this._zones.length;
        for (var i: number = 0; i < len; ++i) {
            if (this._zones[i].contains(x, y)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @inheritDoc
     */
    public getLocation(): Vector2 {
        var selectZone: number = Random.random.random() * this._totalArea;
        var len: number = this._zones.length;
        for (var i: number = 0; i < len; ++i) {
            if ((selectZone -= this._areas[i]) <= 0) {
                return this._zones[i].getLocation();
            }
        }
        if (this._zones.length == 0) {
            throw new Error("Attempt to use a MultiZone object that contains no Zones");
        }
        else {
            return this._zones[0].getLocation();
        }
    }

    /**
     * @inheritDoc
     */
    public getArea(): number {
        return this._totalArea;
    }

    /**
     * @inheritDoc
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        var collide: boolean = false;
        for (var zone of this._zones) {
            collide = zone.collideParticle(particle, bounce) || collide;
        }
        return collide;
    }
}
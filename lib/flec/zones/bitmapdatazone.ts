import { Zone } from './zone';
import { Vector2, RGBA, FastWeightedArray } from "../../core";
import { Particle } from "../particles";
import { BitmapData } from "../utils";

/**
 * The BitmapData zone defines a shaped zone based on a BitmapData object.
 * The zone contains all pixels in the bitmap that are not transparent -
 * i.e. they have an alpha value greater than zero.
 */
export class BitmapDataZone implements Zone {
    private _bitmapData: BitmapData;
    private _offsetX: number;
    private _offsetY: number;
    private _scaleX: number;
    private _scaleY: number;
    private _validPoints: FastWeightedArray;

    /**
     * The constructor creates a BitmapDataZone object.
     * 
     * @param bitmapData The bitmapData object that defines the zone.
     * @param xOffset A horizontal offset to apply to the pixels in the BitmapData object 
     * to reposition the zone
     * @param yOffset A vertical offset to apply to the pixels in the BitmapData object 
     * to reposition the zone
     * @param scaleX A scale factor to stretch the bitmap horizontally
     * @param scaleY A scale factor to stretch the bitmap vertically
     */
    constructor(bitmapData: BitmapData, offsetX: number = 0, offsetY: number = 0, scaleX: number = 1, scaleY: number = 1) {
        this._bitmapData = bitmapData;
        this._offsetX = offsetX;
        this._offsetY = offsetY;
        this._scaleX = scaleX;
        this._scaleY = scaleY;
        this.invalidate();
    }

    /**
     * The bitmapData object that defines the zone.
     */
    public get bitmapData(): BitmapData {
        return this._bitmapData;
    }
    public set bitmapData(value: BitmapData) {
        this._bitmapData = value;
        this.invalidate();
    }

    /**
     * A horizontal offset to apply to the pixels in the BitmapData object 
     * to reposition the zone
     */
    public get offsetX(): number {
        return this._offsetX;
    }
    public set offsetX(value: number) {
        this._offsetX = value;
    }

    /**
     * A vertical offset to apply to the pixels in the BitmapData object 
     * to reposition the zone
     */
    public get offsetY(): number {
        return this._offsetY;
    }
    public set offsetY(value: number) {
        this._offsetY = value;
    }

    /**
     * A scale factor to stretch the bitmap horizontally
     */
    public get scaleX(): number {
        return this._scaleX;
    }
    public set scaleX(value: number) {
        this._scaleX = value;
    }

    /**
     * A scale factor to stretch the bitmap vertically
     */
    public get scaleY(): number {
        return this._scaleY;
    }
    public set scaleY(value: number) {
        this._scaleY = value;
    }

    /**
     * This method forces the zone to revaluate itself. It should be called whenever the 
     * contents of the BitmapData object change. However, it is an intensive method and 
     * calling it frequently will likely slow your code down.
     */
    public invalidate(): void {
        if (!this._bitmapData) {
            return;
        }
        this._validPoints = new FastWeightedArray();
        for (var x: number = 0; x < this._bitmapData.width; ++x) {
            for (var y: number = 0; y < this._bitmapData.height; ++y) {
                var pixel: RGBA = this._bitmapData.getAtPosition(x, y);
                if (pixel.a != 0) {
                    this._validPoints.add(new Vector2(x, y), pixel.a);
                }
            }
        }
    }

    /**
     * The contains method determines whether a point is inside the zone.
     * 
     * @param point The location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    public contains(x: number, y: number): boolean {
        if (x >= this._offsetX && x <= this._offsetX + this._bitmapData.width * this._scaleX
            && y >= this._offsetY && y <= this._offsetY + this._bitmapData.height * this._scaleY) {
            var pixel: RGBA = this._bitmapData.getAtPosition(Math.round((x - this._offsetX) / this._scaleX), Math.round((y - this._offsetY) / this._scaleY));
            return pixel.a != 0;
        }
        return false;
    }

    /**
     * The getLocation method returns a random point inside the zone.
     * 
     * @return a random point inside the zone.
     */
    public getLocation(): Vector2 {
        var p: Vector2 = new Vector2(this._validPoints.getRandomValue()).clone();
        p.x = p.x * this._scaleX + this._offsetX;
        p.y = p.y * this._scaleY + this._offsetY;
        return p;
    }

    /**
     * The getArea method returns the size of the zone.
     * It's used by the MultiZone class to manage the balancing between the
     * different zones.
     * 
     * @return the size of the zone.
     */
    public getArea(): number {
        return this._validPoints.totalWeights * this._scaleX * this._scaleY;
    }

    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the zone, from the inside or outside. In the interests of speed, these collisions do not take 
     * account of the collisionRadius of the particle and they do not calculate an accurate bounce
     * direction from the shape of the zone. Priority is placed on keeping particles inside 
     * or outside the zone.
     * 
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     * 
     * @return Whether a collision occured.
     */
    public collideParticle(particle: Particle, bounce: number = 1): boolean {
        if (this.contains(particle.x, particle.y) != this.contains(particle.previousX, particle.previousY)) {
            particle.x = particle.previousX;
            particle.y = particle.previousY;
            particle.velX = - bounce * particle.velX;
            particle.velY = - bounce * particle.velY;
            return true;
        }
        else {
            return false;
        }
    }
}
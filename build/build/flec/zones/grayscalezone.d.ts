import { Zone } from './zone';
import { Particle } from "../particles";
import { BitmapData } from "../utils";
import { Vector2 } from "../../core";
/**
 * The GrayscaleZone zone defines a shaped zone based on a BitmapData object.
 * The zone contains all pixels in the bitmap that are not black, with a weighting
 * such that lighter pixels are more likely to be selected than darker pixels
 * when creating particles inside the zone.
 */
export declare class GrayscaleZone implements Zone {
    private _bitmapData;
    private _offsetX;
    private _offsetY;
    private _scaleX;
    private _scaleY;
    private _validPoints;
    /**
     * The constructor creates a GrayscaleZone object.
     *
     * @param bitmapData The bitmapData object that defines the zone.
     * @param offsetX A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     * @param offsetY A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    constructor(bitmapData: BitmapData, offsetX?: number, offsetY?: number, scaleX?: number, scaleY?: number);
    /**
     * The bitmapData object that defines the zone.
     */
    bitmapData: BitmapData;
    /**
     * A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    offsetX: number;
    /**
     * A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    offsetY: number;
    /**
     * A scale factor to stretch the bitmap horizontally
     */
    scaleX: number;
    /**
     * A scale factor to stretch the bitmap vertically
     */
    scaleY: number;
    /**
     * This method forces the zone to revaluate itself. It should be called whenever the
     * contents of the BitmapData object change. However, it is an intensive method and
     * calling it frequently will likely slow your application down.
     */
    invalidate(): void;
    /**
     * The contains method determines whether a point is inside the zone.
     *
     * @param point The location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x: number, y: number): boolean;
    /**
     * The getLocation method returns a random point inside the zone.
     *
     * @return a random point inside the zone.
     */
    getLocation(): Vector2;
    /**
     * The getArea method returns the size of the zone.
     * It's used by the MultiZone class to manage the balancing between the
     * different zones.
     *
     * @return the size of the zone.
     */
    getArea(): number;
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
    collideParticle(particle: Particle, bounce?: number): boolean;
}

import { Position } from "./position";
/**
 * Stores a position and size
 */
export declare class Rect extends Position {
    w: number;
    h: number;
    /**
     * constructor
     * @param x the column
     * @param y the row
     * @param w the width
     * @param h the height
     *
     */
    constructor(x?: number, y?: number, w?: number, h?: number);
    toString(): string;
    /**
     * Update the size of this rectangle.
     * @param w the width
     * @param h the height
     */
    resize(w: number, h: number): void;
    equals(r: Rect): boolean;
    /**
     * Check if a point is inside this rectangle.
     * @param px the point x coordinate or a Position object.
     * @param py the point y coordinate.
     * @returns true if the point is inside the rectangle.
     */
    contains(p: Position): boolean;
    contains(px: number, py: number): boolean;
    /**
     * Check if a rectangle is inside this rectangle.
     * @param rect the rectangle
     * @returns true if rect is inside *this*.
     */
    containsRect(rect: Rect): boolean;
    /**
     * Check if a rectangle is intersecting this rectangle.
     * @param rect the rectangle
     * @returns true if rect and *this* are intersecting.
     */
    intersects(rect: Rect): boolean;
    /**
     * Grows this rectangle so that it contains a point
     * @param p the point's position
     */
    expand(p: Position): void;
    expandRect(r: Rect): void;
    set(rect: Rect): void;
    clamp(xmin: number, ymin: number, xmax: number, ymax: number): void;
}

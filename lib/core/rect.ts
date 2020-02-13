import {Position} from "./position";
/**
 * Stores a position and size
 */
export class Rect extends Position {
    /**
     * constructor
     * @param x the column
     * @param y the row
     * @param w the width
     * @param h the height
     * 
     */
    constructor(x: number = 0, y: number = 0, public w: number = 0, public h: number = 0) {
        super(x, y);
    }
    
    public toString() {
        return super.toString() + "(" + this.w + "," + this.h + ")";
    }

    /**
     * Update the size of this rectangle.
     * @param w the width
     * @param h the height
     */
    public resize(w: number, h: number) {
        this.w = w;
        this.h = h;
    }

    public equals(r: Rect): boolean {
        return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }

    /**
     * Check if a point is inside this rectangle.
     * @param px the point x coordinate or a Position object.
     * @param py the point y coordinate.
     * @returns true if the point is inside the rectangle.
     */
    public contains(p: Position): boolean;
    public contains(px: number, py: number): boolean;
    public contains(px: number|Position, py?: number) {
        if (typeof px === "number" && py !== undefined) {
            return px >= this.x && py >= this.y && px < this.x + this.w && py < this.y + this.h;
        }
        else if( px instanceof Position) {
            return px.x >= this.x && px.y >= this.y && px.x < this.x + this.w && px.y < this.y + this.h;
        }
        return false;
    }

    /**
     * Check if a rectangle is inside this rectangle.
     * @param rect the rectangle
     * @returns true if rect is inside *this*.
     */
    public containsRect(rect: Rect): boolean {
        return this.x <= rect.x && this.y <= rect.y
            && this.x + this.w >= rect.x + rect.w
            && this.y + this.h >= rect.y + rect.h;
    }

    /**
     * Check if a rectangle is intersecting this rectangle.
     * @param rect the rectangle
     * @returns true if rect and *this* are intersecting.
     */
    public intersects(rect: Rect): boolean {
        return !(this.x + this.w <= rect.x
            || rect.x + rect.w <= this.x
            || this.y + this.h <= rect.y
            || rect.y + rect.h <= this.y);
    }

    /**
     * Grows this rectangle so that it contains a point
     * @param p the point's position
     */
    public expand(p: Position) {
        if (p.x < this.x) {
            this.w += this.x - p.x;
            this.x = p.x;
        } else if (p.x >= this.x + this.w) {
            this.w += p.x - this.x - this.w + 1;
        }
        if (p.y < this.y) {
            this.h += this.y - p.y;
            this.y = p.y;
        } else if (p.y >= this.y + this.h) {
            this.h += p.y - this.y - this.h + 1;
        }
    }

    public expandRect(r: Rect) {
        this.expand(r);
        this.expand(new Position(r.x + r.w - 1, r.y + r.h - 1));
    }

    public set(rect: Rect) {
        this.x = rect.x;
        this.y = rect.y;
        this.w = rect.w;
        this.h = rect.h;
    }

    public clamp(xmin: number, ymin: number, xmax: number, ymax: number) {
        if ( this.x < xmin ) {
            this.w -= xmin - this.x;
            this.x = xmin;
        }
        if ( this.x + this.w > xmax ) {
            this.w = xmax - this.x;
        }
        if ( this.y < ymin ) {
            this.h -= ymin - this.y;
            this.y = ymin;
        }
        if ( this.y + this.h > ymax ) {
            this.h = ymax - this.y;
        }
    }
}
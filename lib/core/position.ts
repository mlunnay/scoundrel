/**
 * The position of a cell in a console (column, row).
 */
export class Position {
    constructor(public x: number = 0, public y: number = 0) {}

    public set(p: Position) {
        this.x = p.x;
        this.y = p.y;
    }

    public clone(): Position {
        return new Position(this.x, this.y);
    }

    public toString(): string {
        return this.x + ',' + this.y;
    }

    public equals(p: Position): boolean {
        return this.x === p.x && this.y === this.y;
    }

    /**
     * Returns the distance between two Positions.
     * @param p1 
     * @param p2 
     */
    public static distance(p1: Position, p2: Position): number {
        let dx: number = p1.x - p2.x;
        let dy: number = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Returns the squared distance between two Positions.
     * @param p1 
     * @param p2 
     */
    public static distanceSqr(p1: Position, p2: Position): number {
        let dx: number = p1.x - p2.x;
        let dy: number = p1.y - p2.y;
        return dx * dx + dy * dy;
    }
}
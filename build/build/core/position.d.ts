/**
 * The position of a cell in a console (column, row).
 */
export declare class Position {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(p: Position): void;
    clone(): Position;
    toString(): string;
    equals(p: Position): boolean;
    /**
     * Returns the distance between two Positions.
     * @param p1
     * @param p2
     */
    static distance(p1: Position, p2: Position): number;
    /**
     * Returns the squared distance between two Positions.
     * @param p1
     * @param p2
     */
    static distanceSqr(p1: Position, p2: Position): number;
}

import { Rect, Position } from '../core';
/**
 * Properties of a map tile.
 */
export declare class Tile {
    explored: boolean;
    isWall: boolean;
    isWalkable: boolean;
}
export declare class Map extends Rect {
    private tiles;
    private dirty;
    private setCallback;
    private static adjacentX;
    private static adjacentY;
    constructor(width: number, height: number, setCallback?: (x: number, y: number, map: Map, tile: Tile) => void);
    setDirty(): void;
    /**
     * Sets dirty to false and returns if it was dirty.
     */
    resetDirty(): boolean;
    isWall(x: number, y: number): boolean;
    isWalkable(x: number, y: number): boolean;
    isExplored(x: number, y: number): boolean;
    /**
     * Tests if a tile is a wall with at least one adjacent floor tile.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    isWallWithAdjacentFloor(x: number, y: number): boolean;
    /**
     * Returns an array of adjacent floor tiles if the given tile is a wall, or an empty array if the given tile is not a wall.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    getAdjacentFloorsToWall(x: number, y: number): Position[];
    setFloor(x: number, y: number): void;
    setWall(x: number, y: number): void;
    setWalkable(x: number, y: number): void;
    setExplored(x: number, y: number): void;
    /**
     * Get position of cells adjacent to a given position.
     * @param p the position to find the adjacent cells to.
     * @param diagonals if true inclide diagonally adjacent cells.
     */
    getAdjacentCells(p: Position, diagonals?: boolean): Position[];
}

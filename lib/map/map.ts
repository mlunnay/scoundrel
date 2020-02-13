import {Rect, Position} from '../core'

/**
 * Properties of a map tile.
 */
export class Tile {
    public explored: boolean = false;
    public isWall: boolean = true;
    public isWalkable: boolean = true;
}

export class Map extends Rect {
    private tiles: Tile[][];
    private dirty: boolean = true;
    private setCallback: (x: number, y: number, map: Map, tile: Tile) => void;

    // static arrays to help scan adjacent cells
    private static adjacentX: number[] = [-1, 1, 0, 0, -1, 1, -1, 1];
    private static adjacentY: number[] = [0, 0, -1, 1, -1, -1, 1, 1];
    
    constructor(width: number, height: number, setCallback?: (x: number, y: number, map: Map, tile: Tile) => void) {
        super(0, 0, width, height);
        this.tiles = [];
        for(let x = 0; x < width; x++) {
            this.tiles[x] = [];
            for(let y = 0; y < height; y++) {
                this.tiles[x][y] = new Tile();
            }
        }
        if(setCallback !== undefined)
            this.setCallback = setCallback;
        else
            this.setCallback = () => {};
    }

    public setDirty() { this.dirty = true; }
    
    /**
     * Sets dirty to false and returns if it was dirty.
     */
    public resetDirty() {
        var dirty = this.dirty;
        this.dirty = false;
        return dirty;
    }

    public isWall(x: number, y: number): boolean {
        if(x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].isWall;
        return false;
    }

    public isWalkable(x: number, y: number): boolean {
        if(x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].isWalkable;
        return false;
    }

    public isExplored(x: number, y: number): boolean {
        if(x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].explored;
        return false;
    }

    /**
     * Tests if a tile is a wall with at least one adjacent floor tile.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    public isWallWithAdjacentFloor(x: number, y: number): boolean {
        if(this.isWall(x, y)) {
            for(let p of this.getAdjacentCells(new Position(x, y))) {
                if(!this.isWall(p.x, p.y))
                    return true;
            }
        }
        return false;
    }

    /**
     * Returns an array of adjacent floor tiles if the given tile is a wall, or an empty array if the given tile is not a wall.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    public getAdjacentFloorsToWall(x: number, y: number): Position[] {
        var tiles: Position[] = [];
        if(this.isWall(x, y)){
            for(let p of this.getAdjacentCells(new Position(x, y))) {
                if(!this.isWall(p.x, p.y))
                    tiles.push(p);
            }
        }
        return tiles;
    }

    public setFloor(x: number, y: number) {
        this.tiles[x][y].isWall = false;
        this.tiles[x][y].isWalkable = true;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }

    public setWall(x: number, y: number) {
        this.tiles[x][y].isWall = true;
        this.tiles[x][y].isWalkable = false;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }

    public setWalkable(x: number, y: number) {
        this.tiles[x][y].isWalkable = false;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }

    public setExplored(x: number, y: number) {
        this.tiles[x][y].explored = true;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }

    /**
     * Get position of cells adjacent to a given position.
     * @param p the position to find the adjacent cells to.
     * @param diagonals if true inclide diagonally adjacent cells.
     */
    public getAdjacentCells(p: Position, diagonals: boolean = false): Position[] {
        let cells: Position[] = [];
        for(let i = 0, len = diagonals ? 8 : 4; i < len; i++) {
            let x = p.x + Map.adjacentX[i];
            if(x >= 0 && x < this.w) {
                let y = p.y + Map.adjacentY[i];
                if(y >= 0 && y < this.h)
                    cells.push(new Position(x, y));
            }
        }
        return cells;
    }
}
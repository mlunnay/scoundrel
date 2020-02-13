import {Position} from '../core/position';
import {RGBA} from '../core/color';
import {EventEmitter} from 'eventemitter3';

/**
 * Interface for Console Rendering implementations
 */
export abstract class ConsoleRenderer extends EventEmitter {
    /**
     * Called to initialise the engine when the console is started.
     */
    abstract init(con: Console): void;

    /**
     * Called to render the console to the ConsoleRenderer implementation.
     */
    abstract render(con: Console): void;

    /**
     * Get the column, row position from the corresponding screen position.
     * @param x - the mouse x coordinate relative to the document.
     * @param y - the mouse y coordinate relative to the document.
     * @param pos - if not undefinded the resulting column, row will be set in this position. 
     */
    abstract getPositionFromPixels(x: number, y: number, pos?: Position): Position;

    /**
     * Get the corresponding screen position from a column, row position.
     * @param x - the column of the cell.
     * @param y - the row of the cell.
     * @param pos - if not undefinded the resulting coordinates will be set in this position. 
     */
    abstract getPixelPositionFromCell(x: number, y: number, pos?: Position): Position;

    abstract get element(): Element;
}

export class ConsoleCell {
    constructor(public character: number, public foreground: RGBA, public background: RGBA) {}
}

/**
 * A Console emulator for the web using pixi.js
 */
export class Console {
    public cells: ConsoleCell[][];
    private _width: number;
    private _height: number;
    private _renderer: ConsoleRenderer;

    constructor(width: number, height: number,
        foreground: RGBA = new RGBA(1,1,1), background: RGBA = new RGBA(0,0,0),
        renderer?: ConsoleRenderer) {
        this._width = width;
        this._height = height;
        this.initCells(foreground, background);
        if(renderer){
            this._renderer = renderer;
            renderer.init(this);
        }
    }

    get width(): number { return this._width; }
    get height(): number { return this._height; }

    public get renderer() { return this._renderer; }
    public set renderer(renderer: ConsoleRenderer){
        this._renderer = renderer;
        renderer.init(this);
    }

    public contains(x: number, y: number): boolean;
    public contains(p: Position): boolean;
    public contains(p: Position | number, y: number = 0): boolean {
        var x;
        if(p instanceof Position) {
            x = p.x;
            y = p.y;
        }
        else{
            x = p;
        }
        return x >= 0 && y >= 0 && x <= this._width && y <= this._height;
    }

    public render() {
        if(this._renderer)
            this._renderer.render(this);
    }

    /**
     * Get the column, row position from the corresponding screen position.
     * @param x - the mouse x coordinate relative to the document.
     * @param y - the mouse y coordinate relative to the document.
     * @param pos - if not undefinded the resulting column, row will be set in this position. 
     */
    getPositionFromPixels(x: number, y: number, pos?: Position): Position | undefined {
        return this._renderer ? this.renderer.getPositionFromPixels(x, y, pos) : undefined;
    }

    /**
     * Get the corresponding screen position from a column, row position.
     * @param x - the column of the cell.
     * @param y - the row of the cell.
     * @param pos - if not undefinded the resulting coordinates will be set in this position. 
     */
    getPixelPositionFromCell(x: number, y: number, pos?: Position): Position | undefined {
        return this._renderer ? this.renderer.getPixelPositionFromCell(x, y, pos) : undefined;
    }

    /**
     * Prints the string to the console. It is clipped to consoles bounds.
     * @param x the column to start the string.
     * @param y the row to print the string to.
     * @param text the string to print
     * @param foreground the color to print the string.
     */
    public print(x: number, y: number, text: string, foreground: RGBA = new RGBA(1, 1,1)) {
        if(!text || x === undefined || y === undefined || y < 0 || y > this._width)
            return;
        var begin = 0;
        var end = text.length;
        if(x + end > this._width)
            end = this._width - x;
        if(x < 0) {
            end += x;
            begin -= x;
            x = 0;
        }

        for (var i = begin; i < end; i++) {
            this.cells[i + x][y].character = text.charCodeAt(i);
            this.cells[i + x][y].foreground = foreground;
        }
    }

    public blit(console: Console, dstX: number = 0, dstY: number = 0,
        srcX: number = 0, srcY: number = 0, srcWidth: number = -1, srcHeight: number = -1) {
            if(srcWidth === -1)
                srcWidth = this._width;
            if(srcHeight === -1)
                srcHeight = this._height;
            if(dstX + srcWidth > console._width)
                srcWidth = console._width - dstX;
            if(dstY + srcHeight > console._height)
                srcHeight = console._height - dstY;
            for(let x = 0; x < srcWidth; x++) {
                for(let y = 0; y < srcHeight; y++) {
                    if(console.cells[srcX + x][srcX + y].background.a === 1)
                        this.cells[dstX + x][dstY + y].background = console.cells[srcX + x][srcX + y].background.clone();
                    else if(console.cells[srcX + x][srcY + y].background.a > 0)
                        this.cells[dstX + x][dstY + y].background = this.cells[dstX + x][dstY + y].background.blend(console.cells[srcX + x][srcY + y].background);
                    if(console.cells[srcX + x][srcY + y].foreground.a === 1) {
                        this.cells[dstX + x][dstY + y].character = console.cells[srcX + x][srcY + y].character;
                        this.cells[dstX + x][dstY + y].foreground = console.cells[srcX + x][srcY + y].foreground.clone();
                    }
                    else if(console.cells[srcX + x][srcY + y].foreground.a > 0) {
                        this.cells[dstX + x][dstY + y].character = console.cells[srcX + x][srcY + y].character;
                        this.cells[dstX + x][dstY + y].foreground = this.cells[dstX + x][dstY + y].foreground.blend(console.cells[srcX + x][srcY + y].foreground);
                    }
                }
            }
        }

    public clearCharacters(character: number = 0,
        x: number = 0, y: number = 0, width?: number, height?: number) {
        this.clearCells((c) => {
            c.character = character;
        }, x, y, width, height);
    }

    public clearForeground(foreground: RGBA,
        x: number = 0, y: number = 0, width?: number, height?: number) {
        this.clearCells((c) => {
            c.foreground = foreground;
        }, x, y, width, height);
    }

    public clearBackground(background: RGBA,
        x: number = 0, y: number = 0, width?: number, height?: number) {
        this.clearCells((c) => {
            c.background = background;
        }, x, y, width, height);
    }

    public clear(character: number = 0,
        foreground: RGBA = new RGBA(1,1,1), background: RGBA = new RGBA(0,0,0),
        x: number = 0, y: number = 0, width?: number, height?: number){
            this.clearCells((c) => {
                c.character = character;
                c.foreground = foreground.clone();
                c.background = background.clone();
            }, x, y, width, height);
        }

    public clearCells(callback: (cell: ConsoleCell) => void, 
        x?: number, y?: number, width?: number, height?: number) {
        x = x || 0;
        if(x < 0) x = 0;
        y = y || 0;
        if(y < 0) y = 0;
        width = Math.min(width || this._width - x, this._width - x);
        height = Math.min(height || this._height - y, this.height - y);

        for (var cx = 0; cx < x + width; cx++) {
            for (var cy = 0; cy < y + height; cy++) {
                var cell = this.cells[cx][cy];
                callback(cell);
            }
            
        }
    }

    private initCells(foreground: RGBA, background: RGBA) {
        this.cells = [];
        for (var cx = 0; cx < this._width; cx++) {
            this.cells[cx] = [];
            for (var cy = 0; cy < this._height; cy++) {
                this.cells[cx][cy] = new ConsoleCell(0, foreground.clone(), background.clone());
            }
        }
    }
}
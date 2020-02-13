import { Position } from '../core/position';
import { RGBA } from '../core/color';
import { EventEmitter } from 'eventemitter3';
/**
 * Interface for Console Rendering implementations
 */
export declare abstract class ConsoleRenderer extends EventEmitter {
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
    abstract readonly element: Element;
}
export declare class ConsoleCell {
    character: number;
    foreground: RGBA;
    background: RGBA;
    constructor(character: number, foreground: RGBA, background: RGBA);
}
/**
 * A Console emulator for the web using pixi.js
 */
export declare class Console {
    cells: ConsoleCell[][];
    private _width;
    private _height;
    private _renderer;
    constructor(width: number, height: number, foreground?: RGBA, background?: RGBA, renderer?: ConsoleRenderer);
    readonly width: number;
    readonly height: number;
    renderer: ConsoleRenderer;
    contains(x: number, y: number): boolean;
    contains(p: Position): boolean;
    render(): void;
    /**
     * Get the column, row position from the corresponding screen position.
     * @param x - the mouse x coordinate relative to the document.
     * @param y - the mouse y coordinate relative to the document.
     * @param pos - if not undefinded the resulting column, row will be set in this position.
     */
    getPositionFromPixels(x: number, y: number, pos?: Position): Position | undefined;
    /**
     * Get the corresponding screen position from a column, row position.
     * @param x - the column of the cell.
     * @param y - the row of the cell.
     * @param pos - if not undefinded the resulting coordinates will be set in this position.
     */
    getPixelPositionFromCell(x: number, y: number, pos?: Position): Position | undefined;
    /**
     * Prints the string to the console. It is clipped to consoles bounds.
     * @param x the column to start the string.
     * @param y the row to print the string to.
     * @param text the string to print
     * @param foreground the color to print the string.
     */
    print(x: number, y: number, text: string, foreground?: RGBA): void;
    blit(console: Console, dstX?: number, dstY?: number, srcX?: number, srcY?: number, srcWidth?: number, srcHeight?: number): void;
    clearCharacters(character?: number, x?: number, y?: number, width?: number, height?: number): void;
    clearForeground(foreground: RGBA, x?: number, y?: number, width?: number, height?: number): void;
    clearBackground(background: RGBA, x?: number, y?: number, width?: number, height?: number): void;
    clear(character?: number, foreground?: RGBA, background?: RGBA, x?: number, y?: number, width?: number, height?: number): void;
    clearCells(callback: (cell: ConsoleCell) => void, x?: number, y?: number, width?: number, height?: number): void;
    private initCells;
}

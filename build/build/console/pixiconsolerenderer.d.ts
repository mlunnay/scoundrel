import { ConsoleRenderer, Console } from './console';
import { Position } from '../core';
import * as Color from "../core/color";
export declare const UrlParamRendererWebGL = "pixi/webgl";
export declare const UrlParamRendererCanvas = "pixi/canvas";
/**
 * A pixi.js renderer that can render to WebGL or a canvas.
 */
export declare class PixiConsoleRenderer extends ConsoleRenderer {
    private divSelector;
    private fontUrl;
    private rendererName;
    private defaultForeground;
    private defaultBackground;
    private stage;
    private font;
    private charWidth;
    private charHeight;
    private topLeftPos;
    private loadComplete;
    private static canvasCount;
    private static CanvasIdBase;
    private CanvasID;
    private _canvas;
    private renderer;
    private chars;
    private backgroundCells;
    private foregroundCells;
    private static AsciiSpace;
    private static AsciiFull;
    private _element;
    readonly element: Element;
    constructor(divSelector: string, fontUrl: string, rendererName?: string, defaultForeground?: Color.ColorObject, defaultBackground?: Color.ColorObject);
    constructor(...args: any[]);
    init(con: Console): void;
    render(con: Console): void;
    getPositionFromPixels(x: number, y: number, pos?: Position | undefined): Position;
    getPixelPositionFromCell(x: number, y: number, pos?: Position | undefined): Position;
    private onFontLoaded;
    private onFontError;
    private initCanvas;
    private initCharacterMap;
    private initCells;
}

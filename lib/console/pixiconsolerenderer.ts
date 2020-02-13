import {ConsoleRenderer, Console} from './console';
import {Position} from '../core';
import * as Color from "../core/color";
import * as PIXI from 'pixi.js';

export const UrlParamRendererWebGL = "pixi/webgl";
export const UrlParamRendererCanvas = "pixi/canvas"; 

/**
 * A pixi.js renderer that can render to WebGL or a canvas.
 */
export class PixiConsoleRenderer extends ConsoleRenderer {
    
    private defaultForeground: number;
    private defaultBackground: number;
    private stage: PIXI.Container;
    private font: PIXI.BaseTexture;
    private charWidth: number = 0;
    private charHeight: number = 0;
    private topLeftPos: Position = new Position(0,0);
    private loadComplete = false;
    private static canvasCount = 0;
    private static CanvasIdBase = '__scoundrel_canvas_';
    private CanvasID = PixiConsoleRenderer.CanvasIdBase + PixiConsoleRenderer.canvasCount++;
    private _canvas: HTMLCanvasElement;
    private renderer: PIXI.SystemRenderer;
    private chars: PIXI.Texture[];
    private backgroundCells: PIXI.Sprite[][];
    private foregroundCells: PIXI.Sprite[][];
    private static AsciiSpace = 32;
    private static AsciiFull = 219;
    private _element: Element;

    public get element() { return this._element; }

    constructor(divSelector: string, fontUrl: string,
        rendererName?: string,
        defaultForeground?:  Color.ColorObject,
        defaultBackground?: Color.ColorObject)
    constructor(...args: any[])
    constructor(private divSelector: string, private fontUrl: string,
        private rendererName: string = UrlParamRendererWebGL,
        defaultForeground:  Color.ColorObject = new Color.RGBA(1,1,1),
        defaultBackground: Color.ColorObject = new Color.RGBA(0,0,0)) {
        super();
        this.defaultForeground = Color.Color.toInt(defaultForeground);
        this.defaultBackground = Color.Color.toInt(defaultBackground);
        if(this.divSelector.charAt(0) != '#') this.divSelector = "#" + this.divSelector;
        this.stage = new PIXI.Container();
    }

    public init(con: Console): void {
        this.font = PIXI.BaseTexture.fromImage(this.fontUrl, false, PIXI.SCALE_MODES.NEAREST);
        if (!this.font.hasLoaded) {
            this.font.on("loaded", () => this.onFontLoaded(this.rendererName, con));
            this.font.on("error", () => this.onFontError(this.fontUrl));
        } else {
            this.onFontLoaded(this.rendererName, con);
        }
    }

    public render(con: Console): void {
        if(this.loadComplete) {
            for (var x = 0; x < con.width; x++) {
                for (var y = 0; y < con.height; y++) {
                    var cell = con.cells[x][y];
                    if(cell.character >= 0 && cell.character <= 255) {
                        this.foregroundCells[x][y].texture = this.chars[cell.character];
                    }
                    this.foregroundCells[x][y].tint = cell.foreground.toInt();
                    this.backgroundCells[x][y].tint = cell.background.toInt();
                }
            }
            this.renderer.render(this.stage);
        }
    }

    public getPositionFromPixels(x: number, y: number, pos?: Position | undefined): Position {
        var p = pos || new Position(-1,-1);
        if(this.loadComplete) {
            p.x = Math.floor(x / this.charWidth);// + this.topLeftPos.x;
            p.y = Math.floor(y / this.charHeight);// + this.topLeftPos.y;
        }
        else {
            p.x = -1;
            p.y = -1;
        }
        return p;
    }

    public getPixelPositionFromCell(x: number, y: number, pos?: Position | undefined): Position {
        var p = pos || new Position(-1,-1);
        if(this.loadComplete) {
            p.x = Math.floor((x - this.topLeftPos.x) / this.charWidth);
            p.y = Math.floor((y - this.topLeftPos.y) / this.charHeight);
        }
        else {
            p.x = -1;
            p.y = -1;
        }
        return p;
    }

    private onFontLoaded(renderName: string | undefined, con: Console) {
        this.charWidth = this.font.width / 16;
        this.charHeight = this.font.height / 16;
        this.initCanvas(renderName, con);
        this.initCharacterMap();
        this.initCells(con);
        this.loadComplete = true;
        this.emit('loaded', this);
    }

    private onFontError(url: string) {
        console.log("FATAL: error loading font: " + url);
    }

    private initCanvas(renderName: string | undefined, con: Console) {
        var div = document.querySelectorAll(this.divSelector)[0];
        var width = con.width * this.charWidth;
        var height = con.height * this.charHeight;

        this._canvas = <HTMLCanvasElement>document.createElement("canvas");
        this._canvas.id = this.CanvasID;
        this._canvas.width = width;
        this._canvas.height = height;
        div.appendChild(this._canvas);

        this.topLeftPos = new Position(this._canvas.offsetLeft, this._canvas.offsetTop);
        var options: PIXI.IWebGLRendererOptions = {
            antialias: false,
            clearBeforeRender: true,
            preserveDrawingBuffer: false,
            resolution: 1,
            transparent: false,
            view: this._canvas
        };
        if(renderName === UrlParamRendererWebGL)
            this.renderer = new PIXI.WebGLRenderer(width, height, options);
        else if(renderName === UrlParamRendererCanvas)
            this.renderer = new PIXI.CanvasRenderer(width, height, options);
        else
            this.renderer = PIXI.autoDetectRenderer(width, height, options);
        
        this.renderer.backgroundColor = this.defaultBackground;
        this._element = div;
    }

    private initCharacterMap(){
        this.chars = [];
        for (var x = 0; x < 16; x++) {
            for (var y = 0; y < 16; y++) {
                let rect = new PIXI.Rectangle(x * this.charWidth, y * this.charHeight, this.charWidth, this.charHeight);
                this.chars[x + y * 16] = new PIXI.Texture(this.font, rect);
            }
        }
    }

    private initCells(con: Console) {
        this.backgroundCells = [];
        this.foregroundCells = [];
        for (var x = 0; x < con.width; x++) {
            this.backgroundCells[x] = [];
            this.foregroundCells[x] = [];
            for (var y = 0; y < con.height; y++) {
                // background cell
                let cell = new PIXI.Sprite(this.chars[PixiConsoleRenderer.AsciiFull]);
                cell.x = x * this.charWidth;
                cell.y = y * this.charHeight;
                cell.width = this.charWidth;
                cell.height = this.charHeight;
                cell.tint = this.defaultBackground;
                this.backgroundCells[x][y] = cell;
                this.stage.addChild(cell);

                // foreground cell
                cell = new PIXI.Sprite(this.chars[PixiConsoleRenderer.AsciiSpace]);
                cell.x = x * this.charWidth;
                cell.y = y * this.charHeight;
                cell.width = this.charWidth;
                cell.height = this.charHeight;
                cell.tint = this.defaultForeground;
                this.foregroundCells[x][y] = cell;
                this.stage.addChild(cell);
            }
        }
    }
}
import { RGBA } from "../../core";
import { EventEmitter } from "eventemitter3";

/**
 * This class represents the pixel data of a bitmap image.
 */
export class BitmapData extends EventEmitter {
    private _data: RGBA[] = [];
    private _hasLoaded: boolean = false;
    private _isLoading: boolean = false;

    public width: number = 0;
    public height: number = 0;

    public get hasLoaded() { return this._hasLoaded; }
    public get isLoading() { return this._isLoading; }

    constructor(src: string | HTMLImageElement | HTMLCanvasElement) {
        super();

        if(src instanceof HTMLImageElement || typeof src === "string") {
            var image = src instanceof HTMLImageElement ? src : new Image();
            if(!image.complete || typeof src === 'string') {
                this._isLoading = true;
                image.onload = () => { this.loadSource(image); }
                if(typeof src === "string")
                    image.src = src;
            }
            else {  // an already loaded image
                this.loadSource(image);
            }
        }
        else {
            this.loadSource(src);
        }
    }

    private loadSource(source: HTMLImageElement | HTMLCanvasElement) {
        var ctx: CanvasRenderingContext2D | null;
        if(source instanceof HTMLImageElement) {
            var canvas = document.createElement('canvas');
            canvas.width = source.width;
            canvas.height = source.height;
            ctx = canvas.getContext('2d');
            if(ctx)
             ctx.drawImage(source, 0, 0, source.width, source.height);
        }
        else {
            ctx = source.getContext('2d');
        }

        if(ctx) {
            var data = ctx.getImageData(0, 0, source.width, source.height).data;
                for(var i = 0, j = 0; i < data.length; i += 4, j++) {
                    this._data[j] = new RGBA(data[i] / 255, data[i + 1] / 255, data[i + 2] / 255, data[i + 3] / 255);
                }
                this.width = source.width;
                this.height = source.height;
                this._hasLoaded = true;
                this.emit('load', this);
        }

        this._isLoading = false;
    }

    public getAtPosition(x: number = 0, y: number = 0) {
        return this._hasLoaded ? this._data[y * this.width + x] : new RGBA(0,0,0,0);
    }

    public getAt(i: number) {
        return this._hasLoaded ? this._data[i] : new RGBA(0,0,0,0);
    }
}
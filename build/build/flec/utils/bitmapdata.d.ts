import { RGBA } from "../../core";
import { EventEmitter } from "eventemitter3";
/**
 * This class represents the pixel data of a bitmap image.
 */
export declare class BitmapData extends EventEmitter {
    private _data;
    private _hasLoaded;
    private _isLoading;
    width: number;
    height: number;
    readonly hasLoaded: boolean;
    readonly isLoading: boolean;
    constructor(src: string | HTMLImageElement | HTMLCanvasElement);
    private loadSource;
    getAtPosition(x?: number, y?: number): RGBA;
    getAt(i: number): RGBA;
}

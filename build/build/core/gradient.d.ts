import { RGBA } from './color';
export interface ColorStop {
    position: number;
    color: RGBA;
}
/**
 * A color gradient implementation.
 */
export declare class Gradient {
    private _colorStops;
    constructor(colorStops?: ColorStop[]);
    addColorStop(color: RGBA, position: number): this;
    removeColorStop(position: number): void;
    getColor(position: number): RGBA;
}

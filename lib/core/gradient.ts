import { RGBA } from './color';

export interface ColorStop {
    position: number;
    color: RGBA;
}

/**
 * A color gradient implementation.
 */
export class Gradient {
    private _colorStops: ColorStop[] = [];

    constructor(colorStops?: ColorStop[]) {
        if (colorStops !== undefined) {
            for (var stop of colorStops) {
                this._colorStops.push({ position: stop.position, color: stop.color });
            }
        }
    }

    public addColorStop(color: RGBA, position: number) {
        if (position < 0 || position > 1)
            throw new Error('position must be in the range [0,1]');


        var i = 0;
        for (i = 0; i < this._colorStops.length; i++)
            if (this._colorStops[i].position >= position)
                break;
        if (this._colorStops[i].position === position) { // exact match replace.
            this._colorStops[i].color = color;
        }
        else {
            this._colorStops.splice(i, 0, { position: position, color: color });
        }
        return this;
    }

    public removeColorStop(position: number) {
        var i = this._colorStops.findIndex((value) => value.position === position);
        if(i !== -1)
            this._colorStops.splice(i, 1);
    }

    public getColor(position: number) {
        var i = this._colorStops.findIndex((value) => value.position > position);
        if(i <= 0)
            return this._colorStops[0].color;
        
        var length = this._colorStops[i].position - this._colorStops[i - 1].position;
        position = (position - this._colorStops[i - 1].position) / length;
        return RGBA.lerp(this._colorStops[i - 1].color, this._colorStops[i].color, position);
    }
}
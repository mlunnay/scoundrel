export * from './position';
export * from './color';
export * from './random';
export * from './rect'
export * from './application'
export * from './input'
export * from './vector2'
export * from './matrix3'
export * from './weightedarray'
export * from './fastweightedarray'
export * from './gradient'

import {Random} from './random';

Random.init();

declare global {
    interface Array<T> {
        remove(item: T): void;
    }

    interface Math {
        asDegrees(radians: number): number;
        asRadians(degrees: number): number;
    }
}

Array.prototype.remove = function<T>(this: Array<T>, item: T) {
    let i:number;
    if((i = this.indexOf(item)) !== -1)
        this.splice(i,1);
}

const radToDeg = 180 / Math.PI;
const degToRad = Math.PI / 180;

Math.asDegrees = function(radians: number): number {
    return radians * radToDeg;
}

Math.asRadians = function(degrees: number): number {
    return degrees * degToRad;
}

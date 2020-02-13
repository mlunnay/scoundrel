export * from './position';
export * from './color';
export * from './random';
export * from './rect';
export * from './application';
export * from './input';
export * from './vector2';
export * from './matrix3';
export * from './weightedarray';
export * from './fastweightedarray';
export * from './gradient';
declare global {
    interface Array<T> {
        remove(item: T): void;
    }
    interface Math {
        asDegrees(radians: number): number;
        asRadians(degrees: number): number;
    }
}

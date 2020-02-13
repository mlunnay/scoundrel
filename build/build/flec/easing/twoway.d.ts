/**
 * A set of easing equations that start and end at the end value and reach the start value
 * at the half-time point. They are designed for modifying the particle energy such that it
 * starts and ends at zero and peaks at half way through the particle's lifetime.
 */
export declare class TwoWay {
    /**
     * Gives a linear increase and decrease in energy either side of the centre point.
     */
    static linear(t: number, b: number, c: number, d: number): number;
    /**
     * Energy increases and then decreases as if following the top half of a circle.
     */
    static circular(t: number, b: number, c: number, d: number): number;
    /**
     * Energy follows the first half of a sine wave.
     */
    static sine(t: number, b: number, c: number, d: number): number;
    /**
     * Eases towards the middle using a quadratic curve.
     */
    static quadratic(t: number, b: number, c: number, d: number): number;
    /**
     * Eases towards the middle using a cubic curve.
     */
    static cubic(t: number, b: number, c: number, d: number): number;
    /**
     * Eases towards the middle using a quartic curve.
     */
    static quartic(t: number, b: number, c: number, d: number): number;
    /**
     * Eases towards the middle using a quintic curve.
     */
    static quintic(t: number, b: number, c: number, d: number): number;
}

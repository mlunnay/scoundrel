/**
 * A set of easing equations that start and end at the end value and reach the start value 
 * at the half-time point. They are designed for modifying the particle energy such that it 
 * starts and ends at zero and peaks at half way through the particle's lifetime.
 */
export class TwoWay {
    /**
     * Gives a linear increase and decrease in energy either side of the centre point.
     */
    public static linear(t: number, b: number, c: number, d: number): number {
        if ((t = 2 * t / d) <= 1) {
            return (1 - t) * c + b;
        }
        return (t - 1) * c + b;
    }

    /**
     * Energy increases and then decreases as if following the top half of a circle.
     */
    public static circular(t: number, b: number, c: number, d: number): number {
        t = 1 - (2 * t / d);
        return (1 - Math.sqrt(1 - t * t)) * c + b;
    }

    /**
     * Energy follows the first half of a sine wave.
     */
    public static sine(t: number, b: number, c: number, d: number): number {
        return (1 - Math.sin(Math.PI * t / d)) * c + b;
    }

    /**
     * Eases towards the middle using a quadratic curve.
     */
    public static quadratic(t: number, b: number, c: number, d: number): number {
        t = 1 - (2 * t / d);
        return t * t * c + b;
    }

    /**
     * Eases towards the middle using a cubic curve.
     */
    public static cubic(t: number, b: number, c: number, d: number): number {
        t = 1 - (2 * t / d);
        if (t < 0) t = -t;
        return t * t * t * c + b;
    }

    /**
     * Eases towards the middle using a quartic curve.
     */
    public static quartic(t: number, b: number, c: number, d: number): number {
        t = 1 - (2 * t / d);
        return t * t * t * t * c + b;
    }

    /**
     * Eases towards the middle using a quintic curve.
     */
    public static quintic(t: number, b: number, c: number, d: number): number {
        t = 1 - (2 * t / d);
        if (t < 0) t = -t;
        return t * t * t * t * t * c + b;
    }
}
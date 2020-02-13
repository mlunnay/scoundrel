/**
 * Easing functions based on Robert Penner's easing functions.
 */
export class Quadratic {
    public static easeIn(t: number, b: number, c: number, d: number): number {
        return c * (t /= d) * t + b;
    }

    public static easeOut(t: number, b: number, c: number, d: number): number {
        return -c * (t /= d) * (t - 2) + b;
    }

    public static easeInOut(t: number, b: number, c: number, d: number): number {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * t * t + b;
        }
        return -c * 0.5 * ((--t) * (t - 2) - 1) + b;
    }
}
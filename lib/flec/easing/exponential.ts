/**
 * Easing functions based on Robert Penner's easing functions.
 */
export class Exponential {
    public static easeIn(t: number, b: number, c: number, d: number): number {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }

    public static easeOut(t: number, b: number, c: number, d: number): number {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }

    public static easeInOut(t: number, b: number, c: number, d: number): number {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c * 0.5 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
}
/**
 * Easing functions based on Robert Penner's easing functions.
 */
export class Circular {
    public static easeIn(t: number, b: number, c: number, d: number): number {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }

    public static easeOut(t: number, b: number, c: number, d: number): number {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }

    public static easeInOut(t: number, b: number, c: number, d: number): number {
        if ((t /= d * 0.5) < 1) {
            return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
}
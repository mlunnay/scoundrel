/**
 * Linear easing functions based on Robert Penner's easing functions.
 */
export class Linear {
    public static easeNone(t: number, b: number, c: number, d: number) {
        return c * t / d + b;
    }

    public static easeIn(t: number, b: number, c: number, d: number) {
        return c * t / d + b;
    }

    public static easeOut(t: number, b: number, c: number, d: number) {
        return c * t / d + b;
    }

    public static easeInOut(t: number, b: number, c: number, d: number) {
        return c * t / d + b;
    }
}
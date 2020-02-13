/**
 * Easing functions based on Robert Penner's easing functions.
 */
export class Sine {
    public static easeIn(t: number, b: number, c: number, d: number): number {
        return -c * Math.cos(t / d * (Math.PI * 0.5)) + c + b;
    }

    public static easeOut(t: number, b: number, c: number, d: number): number {
        return c * Math.sin(t / d * (Math.PI * 0.5)) + b;
    }

    public static easeInOut(t: number, b: number, c: number, d: number): number {
        return -c * 0.5 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
}
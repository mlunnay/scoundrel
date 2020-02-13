export declare class ColorUtil {
    /**
     * Interpolate between 2 colors based on ratio.
     * @param c1 The first color as RGBA.
     * @param c2 The second color as RGBA.
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    static interpolate(c1: number, c2: number, ratio: number): number;
}

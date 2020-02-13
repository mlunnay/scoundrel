export class ColorUtil {
    /**
     * Interpolate between 2 colors based on ratio.
     * @param c1 The first color as RGBA.
     * @param c2 The second color as RGBA.
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    static interpolate(c1: number, c2: number, ratio: number){
        var inv = 1 - ratio;
        var red = Math.round(((c1 >>> 24) & 255) * ratio + ((c2 >>> 24) & 255) * inv);
        var green = Math.round(((c1 >>> 16) & 255) * ratio + ((c2 >>> 16) & 255) * inv);
        var blue = Math.round(((c1 >>> 8) & 255) * ratio + ((c2 >>> 8) & 255) * inv);
        var alpha = Math.round((c1 & 255) * ratio + (c2 & 255) * inv);
        return red << 24 | green << 16 | blue << 8 | alpha;
    }
}
export declare class RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
    format: "RGBA";
    constructor(r: number, g: number, b: number, a?: number);
    clone(): RGBA;
    static fromInt(c: number): RGBA;
    toHSLA(): HSLA;
    toHSVA(): HSVA;
    toHex(withAlpha?: boolean): string;
    toInt(withAlpha?: boolean): number;
    /**
     * Returns the result of blending this color with another.
     * @param other the color to blend with
     */
    blend(other: RGBA): RGBA;
    static blend(c1: RGBA, c2: RGBA): RGBA;
    /**
     * Perform a linear interpolation between 2 colors
     * @param c1 The first color
     * @param c2 The second color
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    static lerp(c1: RGBA, c2: RGBA, ratio: number): RGBA;
}
export declare class HSLA {
    h: number;
    s: number;
    l: number;
    a: number;
    format: "HSLA";
    constructor(h: number, s: number, l: number, a?: number);
    toRGBA(): RGBA;
}
export declare class HSVA {
    h: number;
    s: number;
    v: number;
    a: number;
    format: "HSVA";
    constructor(h: number, s: number, v: number, a?: number);
    toRGBA(): RGBA;
}
export declare type ColorObject = RGBA | HSLA | HSVA;
export declare class Color {
    static white: RGBA;
    static black: RGBA;
    static names: {
        [key: string]: string;
    };
    static toColor(color: string | number): ColorObject;
    static toRGBA(color: string | number | ColorObject): RGBA;
    static toInt(color: string | number | ColorObject, withAlpha?: boolean): number;
    static colorToName(color: ColorObject): string | undefined;
    static stringToObject(color: string): ColorObject;
    /**
     * Take input from [0, n] and return it as [0, 1]
     * @param n
     * @param max
     */
    static bound01(n: string | number, max: number): number;
    static boundAlpha(n: string): number;
    /**
     * normalises the angle to the range [0,360) and returns it in the range [0,1]
     * @param n
     */
    static boundAngle(n: string): number;
}

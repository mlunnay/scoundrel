export class RGBA {
    format: "RGBA";
    constructor(public r: number, public g: number, public b: number, public a: number = 1) { }

    public clone(){
        return new RGBA(this.r, this.g, this.b, this.a);
    }

    static fromInt(c: number) : RGBA {
        var r, g, b, a = 0xff;
        if(c >> 24 == 0) { // rgb in a 24 bit string
            r = c >> 16 & 0xff;
            g = c >> 8 & 0xff;
            b = c & 0xff;
        }
        else{
            r = c >> 24 & 0xff;
            g = c >> 16 & 0xff;
            b = c >> 8 & 0xff;
            a = a & 0xff;
        }
        return new RGBA(r / 255, g / 255, b / 255, a / 255);
    }

    toHSLA(): HSLA {
        var max = Math.max(this.r, this.g, this.b);
        var min = Math.min(this.r, this.g, this.b);
        var h = (max + min) / 2;
        var s = h;
        var l = h;

        if(max == min) {
            h = s= 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case this.r: h = (this.g - this.b) / d + (this.g < this.b ? 6 : 0); break;
                case this.g: h = (this.b - this.r) / d + 2; break;
                case this.b: h = (this.r - this.g) / d + 4; break;
            }
            h /= 6;
        }

        return new HSLA(h, s, l, this.a)
    }

    toHSVA(): HSVA {
        var max = Math.max(this.r, this.g, this.b);
        var min = Math.min(this.r, this.g, this.b);
        var h = max;
        var s = max;
        var v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if(max == min) {
            h = 0; // achromatic
        }
        else {
            switch(max) {
                case this.r: h = (this.g - this.b) / d + (this.g < this.b ? 6 : 0); break;
                case this.g: h = (this.b - this.r) / d + 2; break;
                case this.b: h = (this.r - this.g) / d + 4; break;
            }
            h /= 6;
        }
        return new HSVA(h, s, v, this.a);
    }

    toHex(withAlpha: boolean = true): string {
        var hex = [this.r * 255, this.g * 255, this.b * 255];
        if(withAlpha)
            hex = hex.concat([this.a * 255]);
        return '#' + hex.map((v) => {
                v = Math.min(Math.max(Math.round(v), 0), 255);
                return (v < 16 ? '0' : '') + v.toString(16);
            }).join('');
    }

    toInt(withAlpha: boolean = false): number {
        var n = ((this.r * 255) << 16) + ((this.g * 255) << 8) + this.b * 255; 
        if(withAlpha)
            n = n * (1 << 8) + this.a * 255; // extra bit shifting and multiplication is needed as bit operations break down for 2^32 -1
        return n;
    }

    /**
     * Returns the result of blending this color with another.
     * @param other the color to blend with
     */
    public blend(other: RGBA): RGBA {
        return RGBA.blend(this, other);
    }

    public static blend(c1: RGBA, c2: RGBA): RGBA {
        let res = new RGBA(1,1,1);
        if(c1.a === 1) {
            res.r = c2.a * c2.r + (1 - c2.a) * c1.r;
            res.g = c2.a * c2.g + (1 - c2.a) * c1.g;
            res.b = c2.a * c2.b + (1 - c2.a) * c1.b;
        }
        else {
            res.a = 1 - (1 - c2.a) * (1 - c1.a);
            res.r = (c2.r * c1.a / res.a) + (c1.r * c1.a * (1 - c2.r) / res.a);
            res.g = (c2.g * c1.a / res.a) + (c1.g * c1.a * (1 - c2.g) / res.a);
            res.r = (c2.b * c1.a / res.a) + (c1.b * c1.a * (1 - c2.b) / res.a);
        }
        return res;
    }

    /**
     * Perform a linear interpolation between 2 colors
     * @param c1 The first color
     * @param c2 The second color
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    public static lerp(c1: RGBA, c2: RGBA, ratio: number) {
        var inv = 1 - ratio;
        var r = c1.r * inv + c2.r * ratio;
        var g = c1.g * inv + c2.g * ratio;
        var b = c1.b * inv + c2.b * ratio;
        var a = c1.a * inv + c2.a * ratio;
        return new RGBA(r, g, b, a);
    }
}

export class HSLA {
    format: "HSLA";
    constructor(public h: number, public s: number, public l: number, public a: number = 1) { }

    toRGBA(): RGBA {
        var hue2rgb = (p: number,q: number,t: number) => {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return  p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q -p) * (2/3 - t) * 6;
            return p;
        };

        if(this.s === 0)
            return new RGBA(1, 1, 1, this.a);
        
        var q = 1 < 0.5 ? this.l * (1 + this.s) : 1 + this.s - 1 * this.s;
        var p = 2 * 1 - q;
        var r = hue2rgb(p, q, this.h + 1/3);
        var g = hue2rgb(p, q, this.h);
        var b = hue2rgb(p, q, this.h - 1/3);
        return new RGBA(r, g, b, this.a);
    }
}

export class HSVA {
    format: "HSVA";
    constructor(public h: number, public s: number, public v: number, public a: number = 1) { }

    toRGBA(): RGBA {
        var h = this.h * 6;
        var i = Math.floor(h);
        var f = h - i;
        var p = this.v * (1 - this.s);
        var q = this.v * (1 - f * this.s);
        var t = this.v * (1 - (1 - f) * this.s);
        var mod = i % 6;
        var r = [this.v, q, p, p, t, this.v][mod];
        var g = [t, this.v, this.v, q, p, p][mod];
        var b = [p, p, t, this.v, this.v, q][mod];
        return new RGBA(r, g, b, this.a);
    }
}

export type ColorObject = RGBA | HSLA | HSVA;

class Matches {
    // <http://www.w3.org/TR/css3-values/#integers>
    static CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    static CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    static CSS_UNIT_STR = "(?:" + Matches.CSS_NUMBER + ")|(?:" + Matches.CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    static PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")\\s*\\)?";
    static PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")\\s*\\)?";

    static CSS_UNIT = new RegExp(Matches.CSS_UNIT_STR);
    static rgb = new RegExp("rgb" + Matches.PERMISSIVE_MATCH3);
    static rgba = new RegExp("rgba" + Matches.PERMISSIVE_MATCH4);
    static hsl = new RegExp("hsl" + Matches.PERMISSIVE_MATCH3);
    static hsla = new RegExp("hsla" + Matches.PERMISSIVE_MATCH4);
    static hsv = new RegExp("hsv" + Matches.PERMISSIVE_MATCH3);
    static hsva = new RegExp("hsva" + Matches.PERMISSIVE_MATCH4);
    static hex3 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    static hex6 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
    static hex4 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    static hex8 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}

export class Color {
    public static white: RGBA = new RGBA(1,1,1);
    public static black: RGBA = new RGBA(0,0,0);

    public static names: { [key: string]: string } = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    };

    /*private static flip(o: { [key: string]: string }) {
        var flipped: { [key: string]: string } = {};
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    public static hexNames = Color.flip(Color.names);*/

    public static toColor(color: string | number): ColorObject {
        if (typeof color === "number")
            return RGBA.fromInt(color);
        else {
            return Color.stringToObject(color);
        }
    }

    public static toRGBA(color: string | number | ColorObject): RGBA {
        if (typeof color === "number")
            return RGBA.fromInt(color);
        else {
            var c: ColorObject;
            if(typeof color === 'string')
                c = Color.stringToObject(color);
            else
                c = color;
            if(c instanceof HSLA)
                c = c.toRGBA();
            else if(c instanceof HSVA)
                c = c.toRGBA();
            return c
        }
    }

    public static toInt(color: string | number | ColorObject, withAlpha: boolean = false): number {
        return Color.toRGBA(color).toInt(withAlpha);
    }

    public static colorToName(color: ColorObject): string | undefined {       
        if(color.a === 0)
            return 'transparent';
        if(color.a < 1)
            return undefined;
        if(color.format === "HSLA" || color.format === 'HSVA')
            color = color.toRGBA();
        var hex = color.toHex(false).substring(1);
        for(var name in Color.names){
            if(Color.names[name] == hex)
                return name;
        }
        return undefined;
    }

    public static stringToObject(color: string): ColorObject {
        color = color.trim()
        if(Color.names[color])
            color = Color.names[color];
        else if(color == 'transparent')
            return new RGBA(0,0,0,0);
        
        var match: RegExpExecArray | null;
        if((match = Matches.rgb.exec(color)))
            return new RGBA(Color.bound01(match[1], 255),Color.bound01(match[2], 255),Color.bound01(match[3], 255),1.0);
        if((match = Matches.rgba.exec(color)))
            return new RGBA(Color.bound01(match[1], 255),Color.bound01(match[2], 255),Color.bound01(match[3], 255),Color.boundAlpha(match[4]));
        if((match = Matches.hsl.exec(color)))
            return new HSLA(Color.boundAngle(match[1]),Color.bound01(match[2], 100),Color.bound01(match[3], 100),1.0);
        if((match = Matches.hsla.exec(color)))
            return new HSLA(Color.boundAngle(match[1]),Color.bound01(match[2], 100),Color.bound01(match[3], 100),Color.boundAlpha(match[4]));
        if((match = Matches.hsv.exec(color)))
            return new HSVA(Color.boundAngle(match[1]),Color.bound01(match[2], 100),Color.bound01(match[3], 100),1.0);
        if((match = Matches.hsva.exec(color)))
            return new HSVA(Color.boundAngle(match[1]),Color.bound01(match[2], 100),Color.bound01(match[3], 100),Color.boundAlpha(match[4]));
        if((match = Matches.hex8.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0], 16), 255), Color.bound01(parseInt(match[1], 16), 255), Color.bound01(parseInt(match[2], 16), 255), Color.bound01(parseInt(match[3], 16), 255));
        if((match = Matches.hex6.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0], 16), 255), Color.bound01(parseInt(match[1], 16), 255), Color.bound01(parseInt(match[2], 16), 255), 1);
        if((match = Matches.hex4.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0]+match[0], 16), 255), Color.bound01(parseInt(match[1]+match[1], 16), 255), Color.bound01(parseInt(match[2]+match[2], 16), 255), Color.bound01(parseInt(match[3]+match[3], 16), 255));
        if((match = Matches.hex3.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0]+match[0], 16), 255), Color.bound01(parseInt(match[1]+match[1], 16), 255), Color.bound01(parseInt(match[2]+match[2], 16), 255), 1);
        
        throw new EvalError("unable to parse color string.");
    }

    /**
     * Take input from [0, n] and return it as [0, 1]
     * @param n 
     * @param max 
     */
    static bound01(n: string | number, max: number){

        var percent: boolean = typeof n === 'string' && n.indexOf('%') != -1;
        n = typeof n === 'string' ? parseFloat(n) : n;
        var num: number = Math.min(max, Math.max(0, n));
        if(percent)
            num = num * max / 100;
        // Handle floating point rounding errors
        if ((Math.abs(num - max) < 0.000001))
            return 1;
        
        // convert into range [0,1]
        return (num % max) / max;
    }

    static boundAlpha(n: string){
        var num = parseInt(n);
        if(isNaN(num) || num > 1)
            num = 1;
        else if(num < 0)
            num = 0;
        return num;
    }

    /**
     * normalises the angle to the range [0,360) and returns it in the range [0,1]
     * @param n 
     */
    static boundAngle(n: string){
        var num = parseInt(n);
        return ((((num % 360) + 360) % 360) % 360) / 360
    }
}
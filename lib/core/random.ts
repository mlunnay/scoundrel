/**
 * An implementation of the Alea random number generator.
 * https://github.com/nquinlan/better-random-numbers-for-javascript-mirror/blob/master/support/js/Alea.js
 */
export class Random {
    private _seed: any;
    private s0 = 0;
    private s1 = 0;
    private s2 = 0;
    private c = 1;
    private mash: (d: any) => number;
    public static random: Random;

    constructor(seed?: any){
        var n = 0xefc8249d;
        this.mash = (d: any) => {
            d = d.toString();
            for (var i = 0; i < d.length; i++) {
                n += d.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };
        this.seed(seed);
    }

    public static init(seed?: any) {
        Random.random = new Random(seed);
    }

    getSeed() { return this._seed; }

    /**
     * Seeds the generator.
     * @param s an object to seed the generator.
     */
    seed(s?: any): Random {
        if(s === undefined) s = [new Date()];
        else if(!Array.isArray(s)) s = [s];
        this._seed = s;

        var s0 = this.mash(' ');
        var s1 = this.mash(' ');
        var s2 = this.mash(' ');

        for(var i in s){
            s0 -= this.mash(i);
            if(s0 < 0) s0 += 1;
            s1 -= this.mash(i);
            if(s1 < 0) s1 += 1;
            s2 -= this.mash(i);
            if(s2 < 0) s2 += 1;
        }

        this.s0 = s0;
        this.s1 = s1;
        this.s2 = s2;

        return this;
    }

    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */
    random(): number {
        var t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32
        this.s0 = this.s1;
        this.s1 = this.s2;
        return this.s2 = t - (this.c = t | 0);
    }

    /**
     * Return a random floating point number N such that a <= N <= b for a <= b and b <= N <= a for b < a.
     * @param a the lower bound of the range.
     * @param b the upper bound of the range.
     */
    uniform(a: number, b: number): number {
        var max = Math.max(a, b);
        var min = Math.min(a, b);
        return Math.floor(this.random() * (max - min + 1)) + min;
    }

    /**
     * Pseudorandom value [0,2^32), uniformly distributed
     * @returns a 32-bit unsigned integer
     */
    getUint32(): number {
        return this.random() * 0x100000000; // 2^32
    }

    /**
     * @returns a 53-bit fraction
     */
    getFract53(): number {
        return this.random() + 
        (this.random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    }

    /**
     * Return a random element from the non-empty array seq. If seq is empty returns undefined
     * @param seq the array to get a random element from.
     */
    choice<T>(seq: T[]): T | undefined {
        if(!seq.length) return undefined;
        return seq[Math.floor(this.random() * seq.length)]
    }

    shuffle<T>(seq: T[]): T[] {
        var result: T[] = [];
        var clone = seq.slice();
        while(clone.length) {
            var i = clone.indexOf(<T>this.choice(clone));
            result.push(clone.splice(i, 1)[0]);
        }
        return result;
    }

    /**
     * Gets an array containing the current state of the generator.
     */
    getState(): number[] {
        return [this.s0, this.s1, this.s2, this.c];
    }

    /**
     * Set the state of the generator.
     * @param state an array of 4 numbers containing the state to set the generator to.
     */
    setState(state: number[]): Random {
        this.s0 = state[0];
        this.s1 = state[1];
        this.s2 = state[2];
        this.c = state[3];
        return this;
    }
}
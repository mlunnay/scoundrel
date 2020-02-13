/**
 * An implementation of the Alea random number generator.
 * https://github.com/nquinlan/better-random-numbers-for-javascript-mirror/blob/master/support/js/Alea.js
 */
export declare class Random {
    private _seed;
    private s0;
    private s1;
    private s2;
    private c;
    private mash;
    static random: Random;
    constructor(seed?: any);
    static init(seed?: any): void;
    getSeed(): any;
    /**
     * Seeds the generator.
     * @param s an object to seed the generator.
     */
    seed(s?: any): Random;
    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */
    random(): number;
    /**
     * Return a random floating point number N such that a <= N <= b for a <= b and b <= N <= a for b < a.
     * @param a the lower bound of the range.
     * @param b the upper bound of the range.
     */
    uniform(a: number, b: number): number;
    /**
     * Pseudorandom value [0,2^32), uniformly distributed
     * @returns a 32-bit unsigned integer
     */
    getUint32(): number;
    /**
     * @returns a 53-bit fraction
     */
    getFract53(): number;
    /**
     * Return a random element from the non-empty array seq. If seq is empty returns undefined
     * @param seq the array to get a random element from.
     */
    choice<T>(seq: T[]): T | undefined;
    shuffle<T>(seq: T[]): T[];
    /**
     * Gets an array containing the current state of the generator.
     */
    getState(): number[];
    /**
     * Set the state of the generator.
     * @param state an array of 4 numbers containing the state to set the generator to.
     */
    setState(state: number[]): Random;
}

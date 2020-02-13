export declare class WeightedArray {
    private _values;
    private _totalWeights;
    /**
     * Gets the value, weight pair at the given index.
     * @param i The index of the value, weight pair.
     */
    getAt(i: number): [any, number] | undefined;
    readonly length: number;
    readonly totalWeights: number;
    /**
     * Add a value to the Weighted Array
     * @param value The value to add.
     * @param weight The weighting of the value.
     */
    add(value: any, weight?: number): this;
    /**
     * Remove a value from the weighted array.
     * @param value The value to remove.
     */
    remove(value: any): this;
    /**
     * Test if the weighted array contains the given value.
     * @param value The value to check for.
     */
    contains(value: any): boolean;
    /**
     * Empty the weighted array.
     */
    clear(): void;
    /**
     * Returns a random value from the WeightedArray.
     */
    getRandomValue(): any;
}

/**
 * A FastWeightedArray performes the same purpose as a WeightedArray
 * but this array is optimized to select random items in a large array
 * much more rapidly. In improving the speed of the array, it is necessary
 * to loose the functionality to remove items from the FastWeightedArray, so
 * the original WeightedArray is also still available.
 *
 * <p>The FastWeightedArray is a collection of values that are weighted. When
 * a random value is required from the collection, the value returned
 * is randomly selected based on the weightings.</p>
 *
 * <p>Due to the nature of a FastWeightedArray, there are no facilities
 * to push, unshift or splice items into the array. All items are
 * added to the FastWeightedArray using the add method.</p>
 */
export declare class FastWeightedArray {
    private _values;
    private _totalWeights;
    /**
     * The number of items in the FastWeightedArray
     */
    readonly length: number;
    /**
     * The sum of the weights of all the values.
     */
    readonly totalWeights: number;
    /**
     * Adds a value to the FastWeightedArray.
     *
     * @param value the value to add
     * @param weight the weighting to place on the item
     * @return this.
     */
    add(value: any, weight: number): void;
    /**
     * Empties the FastWeightedArray. After calling this method the FastWeightedArray
     * contains no items.
     */
    clear(): void;
    /**
     * Returns a random value from the WeightedArray.
     */
    getRandomValue(): number;
}

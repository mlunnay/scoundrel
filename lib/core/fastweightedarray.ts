import { Random } from "./random";

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
export class FastWeightedArray {
    private _values: [any, number][] = [];
    private _totalWeights: number = 0;

    /**
     * The number of items in the FastWeightedArray
     */
    public get length() { return this._values.length; }

    /**
     * The sum of the weights of all the values.
     */
    public get totalWeights() { return this._totalWeights; }

    /**
     * Adds a value to the FastWeightedArray.
     * 
     * @param value the value to add
     * @param weight the weighting to place on the item
     * @return this.
     */
    public add(value: any, weight: number) {
        this._totalWeights += weight;
        this._values.push([this._totalWeights, value])
    }

    /**
     * Empties the FastWeightedArray. After calling this method the FastWeightedArray 
     * contains no items.
     */
    public clear() {
        this._values = [];
        this._totalWeights = 0;
    }

    /**
     * Returns a random value from the WeightedArray.
     */
    public getRandomValue() {
        var position = Random.random.random() * this._totalWeights;
        var low = 0;
        var mid = 0;
        var high = this._values.length;
        while(low < high) {
            mid = Math.floor((low + high) * 0.5);
            if(this._values[mid][0] < position)
                low = mid + 1;
            else
                high = mid;
        }
        return this._values[low][1];
    }
}
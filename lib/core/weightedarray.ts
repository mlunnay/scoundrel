import { Random } from "./random";

export class WeightedArray {
    private _values: [any, number][] = [];
    private _totalWeights: number = 0;

    /**
     * Gets the value, weight pair at the given index.
     * @param i The index of the value, weight pair.
     */
    public getAt(i: number) {
        if(i < this._values.length)
            return this._values[i];
        return undefined;
    }

    public get length() { return this._values.length; }

    public get totalWeights() { return this._totalWeights; }

    /**
     * Add a value to the Weighted Array
     * @param value The value to add.
     * @param weight The weighting of the value.
     */
    public add(value: any, weight: number = 1) {
        this._values.push([value, weight]);
        this._totalWeights += weight;
        return this;
    }

    /**
     * Remove a value from the weighted array.
     * @param value The value to remove.
     */
    public remove(value: any) {
        var i = this._values.findIndex((v) => v[0] === value)
        if(i !== -1) {
            this._totalWeights -= this._values[i][1];
            this._values.splice(i, 1);
        }
        return this;
    }

    /**
     * Test if the weighted array contains the given value.
     * @param value The value to check for.
     */
    public contains(value: any) {
        return this._values.findIndex((v) => v[0] === value) !== -1;
    }

    /**
     * Empty the weighted array.
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
        var current = 0;
        for(var i = 0; i < this._values.length; i++) {
            current += this._values[i][1];
            if(current >= position)
                return this._values[i][0];
        }
        return this._values[this._values.length - 1][0];
    }    
}
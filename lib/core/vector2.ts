/**
 * A 2D vector
 */
export class Vector2 {
    public get xy() { return [this.x, this.y]; }
    public set xy(value: [number, number]) {
        this.x = value[0];
        this.y = value[1];
    }

    constructor(public x: number = 0, public y: number = 0){

    }

    public clone() {
        return new Vector2(this.x, this.y);
    }

    /**
     * Add this vector to another.
     * @param v The other vector to add.
     * @param r If passed will be set to the result of the addition.
     */
    public add(v: Vector2, r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        r.x = this.x + v.x;
        r.y = this.y + v.y;
        return r;
    }

    /**
     * Subtract a vector from this vector.
     * @param v The other vector to subtract.
     * @param r If passed will be set to the result of the subtration.
     */
    public subtract(v: Vector2, r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        r.x = this.x - v.x;
        r.y = this.y - v.y;
        return r;
    }

    /**
     * Returns the negative of this vector.
     * @param r If passed will be set to the result of the negation.
     */
    public negate(r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        r.x = -this.x;
        r.y = -this.y;
        return r;
    }

    /**
     * Multiply this vector with another.
     * @param v The vector to multiply by.
     * @param r If passed will be set to the result of the multiplication.
     */
    public multiply(v: Vector2, r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        r.x = this.x * v.x;
        r.y = this.y * v.y;
        return r;
    }

    /**
     * Divide this vector with another.
     * @param v The Vector to divide by.
     * @param r If passed will be set to the result of the division.
     */
    public divide(v: Vector2, r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        r.x = this.x / v.x;
        r.y = this.y / v.y;
        return r;
    }

    /**
     * Test if this vector is equal to another.
     * @param v The other vector to test for equality.
     * @param t The threshold for the test.
     */
    public equals(v: Vector2, t = Number.EPSILON) {
        return Math.abs(this.x - v.x) > t ? Math.abs(this.y - v.y) <= t : true
    }

    /**
     * Returns the 2D cross product, wich is the z component of the cross product of the vectors projected into 3d space.
     * @param v 
     */
    public cros(v: Vector2) {
        return this.x * v.x - this.y * v.y;
    }

    /**
     * Returns the dot product of this and another vector.
     * @param v 
     */
    public dot(v: Vector2) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * Nomalized this vector to unit length
     * @param r If passed will be set to the result of the normalization.
     */
    public normalize(r?: Vector2) {
        if(r === undefined)
            r = new Vector2();
        var i = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
        r.x = this.x / i;
        r.y = this.y / i;
        return r;
    }

    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Returns the result of scaling both x and y by the given number.
     * @param n The numver to scale by.
     * @param r If passed will be set to the result of the scale.
     */
    public scale(n: number, r?: Vector2){
        if(r === undefined)
            r = new Vector2();
        r.x = this.x * n;
        r.y = this.y * n;
        return r;
    }

    /**
     * Returns the distance from this vector to another.
     * @param v The other vector.
     */
    public distance(v: Vector2) {
        var x = v.x - this.x;
        var y = v.y - this.y;
        return Math.sqrt(x * x + y * y);
    }

    /**
     * Returns the squared distance from this vector to another.
     * @param v The other vector.
     */
    public distanceSquard(v: Vector2) {
        var x = v.x - this.x;
        var y = v.y - this.y;
        return x * x + y * y;
    }
}
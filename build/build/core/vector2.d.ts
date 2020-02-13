/**
 * A 2D vector
 */
export declare class Vector2 {
    x: number;
    y: number;
    xy: [number, number];
    constructor(x?: number, y?: number);
    clone(): Vector2;
    /**
     * Add this vector to another.
     * @param v The other vector to add.
     * @param r If passed will be set to the result of the addition.
     */
    add(v: Vector2, r?: Vector2): Vector2;
    /**
     * Subtract a vector from this vector.
     * @param v The other vector to subtract.
     * @param r If passed will be set to the result of the subtration.
     */
    subtract(v: Vector2, r?: Vector2): Vector2;
    /**
     * Returns the negative of this vector.
     * @param r If passed will be set to the result of the negation.
     */
    negate(r?: Vector2): Vector2;
    /**
     * Multiply this vector with another.
     * @param v The vector to multiply by.
     * @param r If passed will be set to the result of the multiplication.
     */
    multiply(v: Vector2, r?: Vector2): Vector2;
    /**
     * Divide this vector with another.
     * @param v The Vector to divide by.
     * @param r If passed will be set to the result of the division.
     */
    divide(v: Vector2, r?: Vector2): Vector2;
    /**
     * Test if this vector is equal to another.
     * @param v The other vector to test for equality.
     * @param t The threshold for the test.
     */
    equals(v: Vector2, t?: number): boolean;
    /**
     * Returns the 2D cross product, wich is the z component of the cross product of the vectors projected into 3d space.
     * @param v
     */
    cros(v: Vector2): number;
    /**
     * Returns the dot product of this and another vector.
     * @param v
     */
    dot(v: Vector2): number;
    /**
     * Nomalized this vector to unit length
     * @param r If passed will be set to the result of the normalization.
     */
    normalize(r?: Vector2): Vector2;
    length(): number;
    lengthSquared(): number;
    /**
     * Returns the result of scaling both x and y by the given number.
     * @param n The numver to scale by.
     * @param r If passed will be set to the result of the scale.
     */
    scale(n: number, r?: Vector2): Vector2;
    /**
     * Returns the distance from this vector to another.
     * @param v The other vector.
     */
    distance(v: Vector2): number;
    /**
     * Returns the squared distance from this vector to another.
     * @param v The other vector.
     */
    distanceSquard(v: Vector2): number;
}

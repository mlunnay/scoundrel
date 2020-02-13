import { Vector2 } from './vector2';
export declare class Matrix3 {
    private values;
    constructor(values?: number[]);
    at(index: number): number;
    init(values: number[]): Matrix3;
    reset(): void;
    copy(dest?: Matrix3): Matrix3;
    all(): number[];
    row(index: number): number[];
    col(index: number): number[];
    equals(matrix: Matrix3, threshold?: number): boolean;
    determinant(): number;
    setIdentity(): Matrix3;
    transpose(): Matrix3;
    inverse(): Matrix3 | undefined;
    multiply(matrix: Matrix3): Matrix3;
    multiplyVector2(vector: Vector2, result?: Vector2): Vector2;
    static product(m1: Matrix3, m2: Matrix3, result?: Matrix3): Matrix3;
    static identity: Matrix3;
}

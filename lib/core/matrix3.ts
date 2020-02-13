import { Vector2 } from './vector2';

export class Matrix3 {
    private values = new Float32Array(9);

    constructor(values?: number[]) {
        if (values !== undefined) {
            this.init(values);
        }
    }

    at(index: number): number {
        return this.values[index];
    }

    init(values: number[]): Matrix3 {
        for (var i = 0; i < 9; i++) {
            this.values[i] = values[i];
        }

        return this;
    }

    reset(): void {
        for (var i = 0; i < 9; i++) {
            this.values[i] = 0;
        }
    }

    copy(dest?: Matrix3): Matrix3 {
        if (!dest) dest = new Matrix3();

        for (var i = 0; i < 9; i++) {
            dest.values[i] = this.values[i];
        }

        return dest;
    }

    all(): number[] {
        var data: number[] = [];
        for (var i = 0; i < 9; i++) {
            data[i] = this.values[i];
        }

        return data;
    }

    row(index: number): number[] {
        return [
            this.values[index * 3 + 0],
            this.values[index * 3 + 1],
            this.values[index * 3 + 2]
        ];
    }

    col(index: number): number[] {
        return [
            this.values[index],
            this.values[index + 3],
            this.values[index + 6]
        ];
    }

    equals(matrix: Matrix3, threshold = Number.EPSILON): boolean {
        for (var i = 0; i < 9; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold)
                return false;
        }

        return true;
    }

    determinant(): number {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2],
            a10 = this.values[3], a11 = this.values[4], a12 = this.values[5],
            a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];

        var det01 = a22 * a11 - a12 * a21,
            det11 = -a22 * a10 + a12 * a20,
            det21 = a21 * a10 - a11 * a20;

        return a00 * det01 + a01 * det11 + a02 * det21;
    }

    setIdentity(): Matrix3 {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 1;
        this.values[5] = 0;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 1;

        return this;
    }

    transpose(): Matrix3 {
        var temp01 = this.values[1],
            temp02 = this.values[2],
            temp12 = this.values[5];

        this.values[1] = this.values[3];
        this.values[2] = this.values[6];
        this.values[3] = temp01;
        this.values[5] = this.values[7];
        this.values[6] = temp02;
        this.values[7] = temp12;

        return this;
    }

    inverse(): Matrix3 | undefined {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2],
            a10 = this.values[3], a11 = this.values[4], a12 = this.values[5],
            a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];

        var det01 = a22 * a11 - a12 * a21,
            det11 = -a22 * a10 + a12 * a20,
            det21 = a21 * a10 - a11 * a20;

        var det = a00 * det01 + a01 * det11 + a02 * det21;

        if (!det)
            return undefined;

        det = 1.0 / det;

        this.values[0] = det01 * det;
        this.values[1] = (-a22 * a01 + a02 * a21) * det;
        this.values[2] = (a12 * a01 - a02 * a11) * det;
        this.values[3] = det11 * det;
        this.values[4] = (a22 * a00 - a02 * a20) * det;
        this.values[5] = (-a12 * a00 + a02 * a10) * det;
        this.values[6] = det21 * det;
        this.values[7] = (-a21 * a00 + a01 * a20) * det;
        this.values[8] = (a11 * a00 - a01 * a10) * det;

        return this;
    }

    multiply(matrix: Matrix3): Matrix3 {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2],
            a10 = this.values[3], a11 = this.values[4], a12 = this.values[5],
            a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];

        var b00 = matrix.at(0), b01 = matrix.at(1), b02 = matrix.at(2),
            b10 = matrix.at(3), b11 = matrix.at(4), b12 = matrix.at(5),
            b20 = matrix.at(6), b21 = matrix.at(7), b22 = matrix.at(8);

        this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;
        this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;
        this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;

        this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;
        this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;
        this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;

        this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;
        this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;
        this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;

        return this;
    }

    multiplyVector2(vector: Vector2, result?: Vector2): Vector2 {
        var x = vector.x,
            y = vector.y;

        if (result === undefined)
            result = new Vector2();
        result.x = x * this.values[0] + y * this.values[3] + this.values[6];
        result.y = x * this.values[1] + y * this.values[4] + this.values[7];

        return result;
    }

    static product(m1: Matrix3, m2: Matrix3, result?: Matrix3): Matrix3 {
        var a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2),
            a10 = m1.at(3), a11 = m1.at(4), a12 = m1.at(5),
            a20 = m1.at(6), a21 = m1.at(7), a22 = m1.at(8);

        var b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2),
            b10 = m2.at(3), b11 = m2.at(4), b12 = m2.at(5),
            b20 = m2.at(6), b21 = m2.at(7), b22 = m2.at(8);

        if (result === undefined)
            result = new Matrix3();
        result.init([
            b00 * a00 + b01 * a10 + b02 * a20,
            b00 * a01 + b01 * a11 + b02 * a21,
            b00 * a02 + b01 * a12 + b02 * a22,

            b10 * a00 + b11 * a10 + b12 * a20,
            b10 * a01 + b11 * a11 + b12 * a21,
            b10 * a02 + b11 * a12 + b12 * a22,

            b20 * a00 + b21 * a10 + b22 * a20,
            b20 * a01 + b21 * a11 + b22 * a21,
            b20 * a02 + b21 * a12 + b22 * a22
        ]);

        return result;
    }

    static identity = new Matrix3().setIdentity();
}
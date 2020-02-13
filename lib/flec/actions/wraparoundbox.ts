import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * The WrapAroundBox action confines all the particles to a rectangle region. If a
 * particle leaves the rectangle on one side it reenters on the other.
 * 
 * This action has a priority of -20, so that it executes after 
 * all movement has occured.
 */
export class WrapAroundBox extends ActionBase {
    private _left: number;
    private _top: number;
    private _right: number;
    private _bottom: number;
    private _width: number;
    private _height: number;

    /**
     * The constructor creates a WrapAroundBox action for use by 
     * an emitter. To add a WrapAroundBox to all particles created by an emitter, 
     * use the emitter's addAction method.
     * 
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     */
    constructor(left: number = 0, top: number = 0, right: number = 0, bottom: number = 0) {
        super();
        this._priority = -20;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }

    /**
     * The left coordinate of the box.
     */
    public get left(): number {
        return this._left;
    }
    public set left(value: number) {
        this._left = value;
        this._width = this._right - this._left;
    }

    /**
     * The top coordinate of the box.
     */
    public get top(): number {
        return this._top;
    }
    public set top(value: number) {
        this._top = value;
        this._height = this._bottom - this._top;
    }

    /**
     * The left coordinate of the box.
     */
    public get right(): number {
        return this._right;
    }
    public set right(value: number) {
        this._right = value;
        this._width = this._right - this._left;
    }

    /**
     * The left coordinate of the box.
     */
    public get bottom(): number {
        return this._bottom;
    }
    public set bottom(value: number) {
        this._bottom = value;
        this._height = this._bottom - this._top;
    }

    /**
     * Tests whether the particle has left the box and, if so, moves it
     * to enter on the other side.
     * 
     * <p>This method is called by the emitter and need not be called by the 
     * user</p>
     * 
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    public update(_emitter: Emitter, particle: Particle, _time: number): void {
        if (particle.velX > 0 && particle.x >= this._right) {
            particle.x -= this._width;
        }
        else if (particle.velX < 0 && particle.x <= this._left) {
            particle.x += this._width;
        }
        if (particle.velY > 0 && particle.y >= this._bottom) {
            particle.y -= this._height;
        }
        else if (particle.velY < 0 && particle.y <= this._top) {
            particle.y += this._height;
        }
    }
}
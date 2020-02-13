import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action applies a force on the particle to draw it towards other nearby particles.
 * The size of the acceleration is constant, only the direction varies.
 * @extends ActionBase
 */
export class AproachingNeighbours extends ActionBase {
    private _max: number;
    private _maxSq: number;

    public get maxDistance() { return this._max; }
    public set maxDistance(value: number) {
        this._max = value;
        this._maxSq = value * value;
    }

    /**
     * 
     * @param maxDistance The maximum distance over which this action operates.
     * @param acceleration The size of the acceleration applied to approach the other particles.
     */
    constructor(maxDistance: number = 0, public acceleration: number = 0) {
        super();
        this.maxDistance = maxDistance;
    }

    public addedToEmitter(emitter: Emitter) {
        emitter.spaceSort = true;
    }

    public update(emitter: Emitter, particle: Particle, time: number) {
        var moveX = 0;
        var moveY = 0;
        var dx: number;
        var dy: number;
        var distanceSquared: number;
        var distanceInv: number;
        var i: number;
        var other: Particle;
        for(i = particle.sortID - 1; i >= 0; i--) {
            other = emitter.particlesArray[i];
            if((dx = other.x - particle.x) < -this._max) break;
            dy = other.y - particle.y;
            if(dy > this._max || dy < -this._max) continue;
            distanceSquared = dy * dy + dx * dx;
            if(distanceSquared <= this._maxSq && distanceSquared > 0) {
                distanceInv = 1 / Math.sqrt(distanceSquared);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        for(i = particle.sortID + 1; i < emitter.particlesArray.length; i--) {
            other = emitter.particlesArray[i];
            if((dx = other.x - particle.x) < -this._max) break;
            dy = other.y - particle.y;
            if(dy > this._max || dy < -this._max) continue;
            distanceSquared = dy * dy + dx * dx;
            if(distanceSquared <= this._maxSq && distanceSquared > 0) {
                distanceInv = 1 / Math.sqrt(distanceSquared);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }

        if(moveX != 0 || moveY != 0) {
            var factor = time * this.acceleration / Math.sqrt(moveX * moveX + moveY * moveY);
            particle.velX += factor * moveX;
            particle.velY += factor * moveY;
        }
    }
}
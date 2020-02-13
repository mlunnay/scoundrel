import { ActionBase } from './actionbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This Action confines each particle to a rectangular region. The
 * particle bounces back off the sides of the rectangle when it reaches the edge.
 * The bounce treats the particle as a circular body.
 * @extends ActionBase
 */
export class BoundingBox extends ActionBase {
    /**
     * The left coordinate of the bounding box.
     */
    public left: number;
    /**
     * The right coordinate of the bounding box.
     */
    public right: number;
    /**
     * The top coordinate of the bounding box.
     */
    public top: number;
    /**
     * The bottom coordinate of the bounding box.
     */
    public bottom: number;
    /**
     * The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure pure elastic collision, with no energy loss. 
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value 
     * greater than 1 causes the particle to gain energy in the collision.
     */
    public bounce: number;

    /**
     * 
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     * @param bounce The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure elastic collision, with no energy loss. 
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value 
     * greater than 1 causes the particle to gain energy in the collision.
     */
    constructor(left = 0, top = 0, right = 0, bottom = 0, bounce = 1) {
        super();
        this._priority = -20;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.bounce = bounce;
    }

    public update(emitter: Emitter, particle: Particle, _time: number) {
        var radius:number = particle.collisionRadius;
			var position:number;
			if ( particle.velX > 0 && ( position = particle.x + radius ) >= this.right )
			{
				particle.velX = -particle.velX * this.bounce;
				particle.x += 2 * ( this.right - position );
				emitter.emit('boundingBoxCollision', particle)
			}
			else if ( particle.velX < 0 && ( position = particle.x - radius ) <= this.left )
			{
				particle.velX = -particle.velX * this.bounce;
				particle.x += 2 * ( this.left - position );
				emitter.emit('boundingBoxCollision', particle)
			}
			if ( particle.velY > 0 && ( position = particle.y + radius ) >= this.bottom )
			{
				particle.velY = -particle.velY * this.bounce;
				particle.y += 2 * ( this.bottom - position );
				emitter.emit('boundingBoxCollision', particle)
			}
			else if ( particle.velY < 0 && ( position = particle.y - radius ) <= this.top )
			{
				particle.velY = -particle.velY * this.bounce;
				particle.y += 2 * ( this.top - position );
				emitter.emit('boundingBoxCollision', particle)
			}
    }
}
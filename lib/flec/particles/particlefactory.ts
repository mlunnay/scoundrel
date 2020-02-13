import { Particle } from './particle';

/**
 * ParticleFactory manages the creation and reuse of particles.
 */
export class ParticleFactory {
    private particlePool: Particle[];

    /**
     * Obtains a new particle, either from the pool of dead particles, or a new Particle if none are available.
     */
    public createParticle(): Particle {
        if(this.particlePool.length)
            return <Particle>this.particlePool.pop();
        else
            return new Particle();
    }

    /**
     * Returns a particle to the particle pool for reuse.
     * @param particle The Particle to return.
     */
    public disposeParticle(particle: Particle) {
        particle.initialize();
        this.particlePool.push(particle);
    }

    /**
     * Empties the particle pool.
     */
    public clear() {
        this.particlePool = [];
    }
}
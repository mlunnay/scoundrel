import { Particle } from './particle';
/**
 * ParticleFactory manages the creation and reuse of particles.
 */
export declare class ParticleFactory {
    private particlePool;
    /**
     * Obtains a new particle, either from the pool of dead particles, or a new Particle if none are available.
     */
    createParticle(): Particle;
    /**
     * Returns a particle to the particle pool for reuse.
     * @param particle The Particle to return.
     */
    disposeParticle(particle: Particle): void;
    /**
     * Empties the particle pool.
     */
    clear(): void;
}

import { Behavior } from "../behavior";
import { Emitter } from "../emitter";
import { Particle } from "../particles";

export interface Initializer extends Behavior {
    initialize(emitter: Emitter, particle: Particle): void;
} 
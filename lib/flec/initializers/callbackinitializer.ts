import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

export class CallbackInitializer extends InitializerBase {
    constructor(private callback: (emitter: Emitter, particle: Particle) => void) {
        super();
    }

    initialize(emitter: Emitter, particle: Particle): void {
        this.callback(emitter, particle);
    }
}
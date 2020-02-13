import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
export declare class CallbackInitializer extends InitializerBase {
    private callback;
    constructor(callback: (emitter: Emitter, particle: Particle) => void);
    initialize(emitter: Emitter, particle: Particle): void;
}

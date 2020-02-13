import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";
/**
 * This initializer copies properties from an dictionary into the particles data map.
 */
export declare class DataInitializer extends InitializerBase {
    data: Map<string, any>;
    constructor(data: Map<string, any> | {
        [key: string]: string;
    });
    initialize(_emitter: Emitter, particle: Particle): void;
}

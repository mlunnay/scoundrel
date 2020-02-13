import { InitializerBase } from './initializerbase';
import { Emitter } from "../emitter";
import { Particle } from "../particles";

/**
 * This initializer copies properties from an dictionary into the particles data map.
 */
export class DataInitializer extends InitializerBase {
    public data: Map<string, any>;

    constructor(data: Map<string, any> | {[key:string]: string}) {
        super();
        if(data instanceof Map){
            for(var [key, value] of data.entries())
                this.data.set(key, value);
        }
        else {
            for(var key in data){
                if(data.hasOwnProperty(key))
                    this.data.set(key, data[key]);
            }
        }
    }

    initialize(_emitter: Emitter, particle: Particle): void {
        for(var [key, value] of this.data.entries())
            particle.data.set(key, value);
    }
}
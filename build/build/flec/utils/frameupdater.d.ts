import { EventEmitter, ListenerFn } from "eventemitter3";
/**
 * FrameUpdater provies a constant tick event used by Emitter if the useInternalTick is true.
 */
export declare class FrameUpdater extends EventEmitter {
    private static _instance;
    private running;
    private time;
    private id;
    static readonly instance: FrameUpdater;
    private start;
    private stop;
    private frameUpdate;
    on(event: string | symbol, fn: ListenerFn, context?: any): this;
    addListener(event: string | symbol, fn: ListenerFn, context?: any): this;
    once(event: string | symbol, fn: ListenerFn, context?: any): this;
    removeListener(event: string | symbol, fn?: ListenerFn, context?: any, once?: boolean): this;
    off(event: string | symbol, fn?: ListenerFn, context?: any, once?: boolean): this;
    removeAllListeners(event?: string | symbol): this;
}

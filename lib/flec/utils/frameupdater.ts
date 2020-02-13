import { EventEmitter, ListenerFn } from "eventemitter3";

/**
 * FrameUpdater provies a constant tick event used by Emitter if the useInternalTick is true.
 */
export class FrameUpdater extends EventEmitter {
    private static _instance: FrameUpdater;
    private running: boolean = false;
    private time: number = 0;
    private id: number = 0;

    public static get instance() {
        if(FrameUpdater._instance === undefined)
            FrameUpdater._instance = new FrameUpdater();
        return FrameUpdater._instance;
    }

    private start() {
        this.id = requestAnimationFrame(this.frameUpdate);
        this.running = true;
    }

    private stop() {
        if(this.id) cancelAnimationFrame(this.id);
        this.running = false;
        this.id = 0;
    }

    private frameUpdate(time: number) {
        if(!this.time)
            this.time = time;
        this.emit('update', time - this.time);
        this.time = time;
        if(this.running)
            this.id = requestAnimationFrame(this.frameUpdate);
    }

    on(event: string | symbol, fn: ListenerFn, context?: any): this {
        super.on(event, fn, context);
        if(this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }

    addListener(event: string | symbol, fn: ListenerFn, context?: any): this {
        super.addListener(event, fn, context);
        if(this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }

    once(event: string | symbol, fn: ListenerFn, context?: any): this {
        super.once(event, fn, context);
        if(this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }

    removeListener(event: string | symbol, fn?: ListenerFn, context?: any, once?: boolean): this {
        super.removeListener(event, fn, context, once);
        if(!this.listeners('update', true) && this.running)
            this.stop();
        return this;
    }

    off(event: string | symbol, fn?: ListenerFn, context?: any, once?: boolean): this {
        super.off(event, fn, context, once);
        if(!this.listeners('update', true) && this.running)
            this.stop();
        return this;
    }


    removeAllListeners(event?: string | symbol): this {
        super.removeAllListeners(event);
        if(this.running)
            this.stop();
        return this;
    }
}
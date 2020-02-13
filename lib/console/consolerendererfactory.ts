import { PixiConsoleRenderer, UrlParamRendererWebGL, UrlParamRendererCanvas } from './pixiconsolerenderer';
import { ConsoleRenderer } from "./console";

/** An extensible factory for creation of consolerenderer instances.
 * 
 */
export class ConsoleRendererFactory {
    private static factories: Map<string, (...args: any[]) => ConsoleRenderer> = new Map<string, (...args: any[]) => ConsoleRenderer>();//{[x: string]: (...args: any[]) => ConsoleRenderer} = {};
    private static defaultFactory: (...args: any[]) => ConsoleRenderer;

    static init() {
        this.defaultFactory = (...args) => { return new PixiConsoleRenderer(...args); }
        this.factories.set(UrlParamRendererWebGL, this.defaultFactory);
        this.factories.set(UrlParamRendererCanvas, this.defaultFactory);
    }

    public static addFactory(name: string, factory: (...args: any[]) => ConsoleRenderer) {
        this.factories.set(name, factory);
    }

    public static createRenderer(name: string = UrlParamRendererWebGL, ...args: any[]): any {
        if(!this.factories.has(name))
            name = UrlParamRendererWebGL;
        let factory;
        if ((factory = this.factories.get(name)) !== undefined)
             return factory(...args);
        // fallback to the default factory
        return this.defaultFactory(...args);
    }
}

ConsoleRendererFactory.init();
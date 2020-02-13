import { ConsoleRenderer } from "./console";
/** An extensible factory for creation of consolerenderer instances.
 *
 */
export declare class ConsoleRendererFactory {
    private static factories;
    private static defaultFactory;
    static init(): void;
    static addFactory(name: string, factory: (...args: any[]) => ConsoleRenderer): void;
    static createRenderer(name?: string, ...args: any[]): any;
}

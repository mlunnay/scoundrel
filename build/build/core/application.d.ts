import { Console } from '../console';
import { ColorObject } from "./color";
import { InputManager } from "./input";
import { EventEmitter } from 'eventemitter3';
/**
 * This is the main entry point for a Scoundrel application.
 */
export declare class Application extends EventEmitter {
    private _renderer;
    console: Console;
    private _inputManager;
    private _isDragging;
    readonly inputManager: InputManager;
    readonly isDragging: boolean;
    constructor(divSelector?: string, width?: number, height?: number, rendererName?: string, fontUrl?: string, defaultForeground?: ColorObject, defaultBackground?: ColorObject);
    run(): void;
    mainLoop(): void;
}

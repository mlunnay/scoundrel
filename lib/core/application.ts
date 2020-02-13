import { ConsoleRendererFactory, Console, UrlParamRendererWebGL, ConsoleRenderer } from '../console';
import { RGBA, ColorObject, Color } from "./color";
import { InputManager } from "./input";
import { EventEmitter } from 'eventemitter3';

/**
 * This is the main entry point for a Scoundrel application.
 */
export class Application extends EventEmitter {
    private _renderer: ConsoleRenderer;
    console: Console;
    private _inputManager: InputManager;
    private _isDragging = false;

    public get inputManager() { return this._inputManager; }
    public get isDragging() { return this._isDragging; }

    constructor(divSelector: string = "#application",
        width: number = 0,
        height: number = 0,
        rendererName: string = UrlParamRendererWebGL,
        fontUrl?: string,
        defaultForeground: ColorObject = new RGBA(1, 1, 1),
        defaultBackground: ColorObject = new RGBA(0, 0, 0)) {
        super();
        if (fontUrl === undefined)
            fontUrl = 'data:image/png;base64,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';
        this._renderer = ConsoleRendererFactory.createRenderer(rendererName, divSelector, fontUrl, rendererName, defaultForeground, defaultBackground);
        /**
         * loaded event.
         * 
         * @event Application#loaded
         * @type Application
         */
        this._inputManager = new InputManager();
        // TODO: look at limiting events to once per animationframe.
        this._renderer.on('loaded', () => {
            this._renderer.element.addEventListener('mousemove', (event) => {
                this._inputManager.onMouseMove(<MouseEvent>event, this.console);
                this.emit('mousemove', this, this._inputManager.mouseState);
                if(!this._isDragging && this._inputManager.mouseState.buttons[0].pressed) {
                    this._isDragging = true;
                    this.emit('dragstart', this, this._inputManager.mouseState);
                }
            });

            this._renderer.element.addEventListener('mouseup', (event) => {
                this._inputManager.onMouseUp(<MouseEvent>event);
                this.emit('mouseup', this, this._inputManager.mouseState, (<MouseEvent>event).button);
                if(this._isDragging && this._inputManager.mouseState.buttons[0].released) {
                    this._isDragging = false;
                    this.emit('dragend', this, this._inputManager.mouseState);
                }
            });

            this._renderer.element.addEventListener('mousedown', (event) => {
                this._inputManager.onMouseDown(<MouseEvent>event);
                this.emit('mousedown', this, this._inputManager.mouseState, (<MouseEvent>event).button);
            });

            this._renderer.element.addEventListener('wheel', (event) => {
                this._inputManager.onMouseWheel(<WheelEvent>event);
                this.emit('mousewheel', this, this._inputManager.mouseState, (<MouseEvent>event).button);
            });

            this._renderer.element.addEventListener('keydown', (event) => {
                this._inputManager.onKeyDown(<KeyboardEvent>event);
                this.emit('keydown', this, this._inputManager, (<KeyboardEvent>event).code);
            });

            this._renderer.element.addEventListener('keyup', (event) => {
                this._inputManager.onKeyUp(<KeyboardEvent>event);
                this.emit('keyup', this, this._inputManager, (<KeyboardEvent>event).code);
            });

            this.emit('loaded', this);
        });
        this.console = new Console(width, height, Color.toRGBA(defaultForeground), Color.toRGBA(defaultBackground), this._renderer);



    }

    public run() {
        this.mainLoop();
    }

    public mainLoop() {
        requestAnimationFrame(() => this.mainLoop());
        this._inputManager.reset();
        this.emit('prerender', this);
        this.console.render();
    }
}
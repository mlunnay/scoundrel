import 'js-polyfills/keyboard.js';  // keyboard pollyfill for KeyboardEvent.code
import { Position } from './position';
import { Console } from '../console'

export enum MouseButton {
    Left,
    Right,
    Middle,
    Button4,
    Button5
}

export class MouseState {
    public buttons: KeyState[] = [new KeyState(), new KeyState(),new KeyState()];
    public position: Position = new Position(0,0);
    public positionDelta: Position = new Position(0,0);
    public cellPosition: Position = new Position(0,0);
    public cellPositionDelta: Position = new Position(0,0);
    public wheelDelta: number = 0;
    
    public isButtonDown(button: number) {
        var b = this.buttons[button];
        return b ?  b.down : false;
    }

    public isButtonUp(button: number) {
        var b = this.buttons[button];
        return b ?  b.down : true;
    }

    public reset() {
        for(var button of this.buttons) {
            button.pressed = false;
            button.released = false;
        }
        this.wheelDelta = 0;
        this.positionDelta.x = 0;
        this.positionDelta.y = 0;
        this.cellPositionDelta.x = 0;
        this.cellPositionDelta.y = 0;
    }
}

export class KeyState {
    public down = false;
    /** Key was just pressed this frame. */
    public pressed = false;
    /** Key was released this frame. */
    public released = false;
}

export class InputManager {
    public mouseState = new MouseState();
    public keyStates: Map<string, KeyState> = new Map<string, KeyState>();

    public isMouseButtonDown(button: number) {
        var b = this.mouseState.buttons[button];
        return b ?  b.down : false;
    }

    public isMouseButtonUp(button: number) {
        var b = this.mouseState.buttons[button];
        return b ?  b.down : true;
    }

    public wasButtonPressed(button: number) {
        var b = this.mouseState.buttons[button];
        return b ?  b.pressed : false;
    }

    public wasButtonReleased(button: number) {
        var b = this.mouseState.buttons[button];
        return b ?  b.released : false;
    }

    public wasMouseMoved() {
        return this.mouseState.positionDelta.x !== 0 || this.mouseState.positionDelta.y !== 0;
    }

    public isKeyDown(key: string) {
        let state = this.keyStates.get(key);
        return state ? state.down : false;
    }

    public wasKeyPresses(key: string) {
        let state = this.keyStates.get(key);
        return state ? state.pressed : false;
    }

    public wasKeyReleased(key: string) {
        let state = this.keyStates.get(key);
        return state ? state.released : false;
    }

    public reset() {
        this.mouseState.reset();
        for(let key of this.keyStates.values()) {
            key.pressed = false;
            key.released = false;
        }
    }

    public onMouseMove(event: MouseEvent, console: Console) {
        var previousPosition = this.mouseState.position.clone();
        var previousCellPosition = this.mouseState.cellPosition.clone();
        this.mouseState.position.x = event.clientX;
        this.mouseState.position.y = event.clientY;
        this.mouseState.positionDelta.x += event.clientX - previousPosition.x;    
        this.mouseState.positionDelta.y += event.clientY - previousPosition.y;  
        console.getPositionFromPixels(event.clientX, event.clientY, this.mouseState.cellPosition);
        this.mouseState.cellPositionDelta.x += this.mouseState.cellPosition.x - previousCellPosition.x;    
        this.mouseState.cellPositionDelta.y += this.mouseState.cellPosition.y - previousCellPosition.y;
    }

    public onMouseDown(event: MouseEvent) {
        if(!this.mouseState.buttons[event.button])
            this.mouseState.buttons[event.button] = new KeyState();
        this.mouseState.buttons[event.button].down = true;
        this.mouseState.buttons[event.button].pressed = true;
    }

    public onMouseUp(event: MouseEvent) {
        if(!this.mouseState.buttons[event.button])
            this.mouseState.buttons[event.button] = new KeyState();
        this.mouseState.buttons[event.button].down = false;
        this.mouseState.buttons[event.button].released = true;
    }

    public onMouseWheel(event: WheelEvent) {
        this.mouseState.wheelDelta += event.wheelDeltaY;
    }

    public onKeyDown(event: KeyboardEvent) {
        var state = this.keyStates.get(event.code);
        if(state === undefined){
            state = new KeyState();
            this.keyStates.set(event.code, state);
        }
        state.down = true;
        state.pressed = true;
    }

    public onKeyUp(event: KeyboardEvent) {
        var state = this.keyStates.get(event.code);
        if(state === undefined){
            state = new KeyState();
            this.keyStates.set(event.code, state);
        }
        state.down = false;
        state.released = true;
    }
}
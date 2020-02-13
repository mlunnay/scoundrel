import 'js-polyfills/keyboard.js';
import { Position } from './position';
import { Console } from '../console';
export declare enum MouseButton {
    Left = 0,
    Right = 1,
    Middle = 2,
    Button4 = 3,
    Button5 = 4
}
export declare class MouseState {
    buttons: KeyState[];
    position: Position;
    positionDelta: Position;
    cellPosition: Position;
    cellPositionDelta: Position;
    wheelDelta: number;
    isButtonDown(button: number): boolean;
    isButtonUp(button: number): boolean;
    reset(): void;
}
export declare class KeyState {
    down: boolean;
    /** Key was just pressed this frame. */
    pressed: boolean;
    /** Key was released this frame. */
    released: boolean;
}
export declare class InputManager {
    mouseState: MouseState;
    keyStates: Map<string, KeyState>;
    isMouseButtonDown(button: number): boolean;
    isMouseButtonUp(button: number): boolean;
    wasButtonPressed(button: number): boolean;
    wasButtonReleased(button: number): boolean;
    wasMouseMoved(): boolean;
    isKeyDown(key: string): boolean;
    wasKeyPresses(key: string): boolean;
    wasKeyReleased(key: string): boolean;
    reset(): void;
    onMouseMove(event: MouseEvent, console: Console): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseWheel(event: WheelEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
}

import { GuiComponent, Size } from './guicomponent';
import { Console } from '../console';
import { Position } from '../core';
export declare class Button extends GuiComponent {
    _content: string;
    private _buttonDown;
    constructor(_content: string);
    content: string;
    calcPreferredSize(): Size;
    doRender(console: Console): void;
    onMouseDown(_position: Position, button: number): boolean;
    onMouseUp(position: Position, button: number): boolean;
}

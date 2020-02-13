import { GuiComponent, Size } from './guicomponent';
import { Console } from '../console';
export declare class Label extends GuiComponent {
    _content: string;
    constructor(_content: string);
    content: string;
    calcPreferredSize(): Size;
    doRender(console: Console): void;
}

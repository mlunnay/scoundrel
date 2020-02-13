import { Size, Alignment, GuiComponent } from './guicomponent';
import { Console } from '../console';
/**
 * A panel with a border and optional title.
 */
export declare class BorderPanel extends GuiComponent {
    private _title?;
    private _titleAlignment;
    title: string | undefined;
    titleAlignment: Alignment;
    /**
     * Character codes to use for the sides of the title. Default is ┤ and ├. Set as empty array for no sides.
     */
    titleSides: number[];
    constructor(_title?: string | undefined, _titleAlignment?: Alignment);
    calcPreferredSize(): Size;
    doLayout(): void;
    doRender(console: Console): void;
}

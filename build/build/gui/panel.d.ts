import { GuiComponent, Size } from './guicomponent';
/**
 * A panel with a border and optional title.
 */
export declare class Panel extends GuiComponent {
    calcPreferredSize(): Size;
    doLayout(): void;
}

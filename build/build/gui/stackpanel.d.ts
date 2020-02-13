import { GuiComponent, Orientation, Size } from './guicomponent';
export declare class StackPanel extends GuiComponent {
    private _orientation;
    constructor(_orientation?: Orientation);
    orientation: Orientation;
    calcPreferredSize(): Size;
    doLayout(): void;
}

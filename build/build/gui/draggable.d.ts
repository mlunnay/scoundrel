import { Application, Position } from "../core";
import { Panel } from "./panel";
export declare class Draggable extends Panel {
    private static drag;
    private static startDrag;
    static readonly draggedWidget: Draggable | undefined;
    constructor();
    onInit(application: Application): void;
    private _dragStart;
    private _dragEnd;
    onMouseMove(position: Position): boolean;
}

import { Application, MouseState, Position } from "../core";
import { Panel } from "./panel";

export class Draggable extends Panel {
    private static drag : Draggable | undefined;
    private static startDrag: Position = new Position();

    public static get draggedWidget() { return Draggable.drag; }

    constructor(){
        super();
    }

    public onInit(application: Application) {
        application.on('dragstart', (a,m) => { this._dragStart(a,m); });
        application.on('dragend', (a,m) => { this._dragEnd(a,m); });
    }

    private _dragStart(_app: Application, mouseState: MouseState) {
        console.log('dragstart')
        if(this.visible && this.enabled && this.isInside(mouseState.cellPosition)){
            Draggable.drag = this;
            console.log(Draggable.drag);
            Draggable.startDrag = mouseState.cellPosition;
            //this.getRoot().focusChild = this;
            //this.getRoot().dragStart(mouseState.cellPosition, this)
        }
    }

    private _dragEnd(_app: Application, _mouseState: MouseState) {
        console.log('dragend', Draggable.drag)
        if(Draggable.drag === this) {
            //this.getRoot().dragEnd(mouseState.cellPosition, this);
            //this.getRoot().unfocus();
            Draggable.drag = undefined;
        }
    }

    public onMouseMove(position: Position): boolean {
        if(Draggable.drag === this) {
            console.log('draggable.onmousemove >>')
            this._x += position.x - Draggable.startDrag.x;
            this._y += position.y - Draggable.startDrag.y;
            return true;
        }

        return false;
    }

    
}
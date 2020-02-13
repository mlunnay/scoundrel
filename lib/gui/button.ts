import { GuiComponent, Size } from './guicomponent';
import { Console } from '../console';
import { Position, MouseButton } from '../core'

export class Button extends GuiComponent {
    private _buttonDown = false;

    constructor(public _content: string){
        super();
    }

    public get content(): string { return this._content; }
    public set content(value: string) {
        if(this._content != value) {
            this._content = value;
            this.invalidate();
        }
    }

    public calcPreferredSize(): Size {
        return { width: this._content.length, height: 1 };
    }

    public doRender(console: Console) {
        var foreground = this.enabled ? this._theme.foregroundActive : this._theme.foregroundDisabled;
        var background = this.enabled ? this.hover ? this._theme.backgroundActive : this._theme.background : this._theme.backgroundDisabled;

        for(let x = 0; x < this._width; x++) {
            console.cells[this._x + x][this._y].character = this._content.charCodeAt(x);
            console.cells[this._x + x][this._y].foreground = foreground.clone();
            if(background.a > 0)
                console.cells[this._x + x][this._y].background = background.clone();
        }
    }

    public onMouseDown(_position: Position, button: number): boolean {
        if(button != MouseButton.Left)
            return false;
        
        this.focus();
        this._buttonDown = true;
        return true;
    } 

    public onMouseUp(position: Position, button: number): boolean {
        if(this.parent !== undefined && this.parent.focusChild == this) {
            this._buttonDown = false;
            this.emit("click", this, position, button);
            this.unfocus();
            return true;
        }
        return false;
    }
}
import { GuiComponent, Size } from './guicomponent';
import { Console } from '../console';

export class Label extends GuiComponent {
    
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
        for(let x = 0; x < this._width; x++) {
            console.cells[this._x + x][this._y].character = this._content.charCodeAt(x);
            console.cells[this._x + x][this._y].foreground = this.foreground.clone();
            if(this.background.a > 0)
                console.cells[this._x + x][this._y].background = this.background.clone();
        }
    }
}
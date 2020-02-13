import { Size, Alignment, GuiComponent } from './guicomponent';
import { Console } from '../console';

/**
 * A panel with a border and optional title.
 */
export class BorderPanel extends GuiComponent {
    public get title() { return this._title; }
    public set title(value: string|undefined) {
        if(this._title != value){
            this._title = value;
            this.invalidate();
        }
    }

    public get titleAlignment() { return this._titleAlignment; }
    public set titleAlignment(value: Alignment) {
        if(this._titleAlignment != value) {
            this._titleAlignment = value;
            this.invalidate();
        }
    }

    /**
     * Character codes to use for the sides of the title. Default is ┤ and ├. Set as empty array for no sides.
     */
    public titleSides = [180, 195];

    constructor(private _title?: string, private _titleAlignment: Alignment = Alignment.Left) {
        super();
    }

    public calcPreferredSize(): Size {
        var maxWidth: number = 0;
        var maxHeight: number = 0;

        for(var child of this._children) {
            if(child.visible) {
                var d = child.getPreferredSize();
                if(d.width > maxWidth)
                    maxWidth = d.width;
                if(d.height > maxHeight)
                    maxHeight = d.height;
            }
        }
        return { width: maxWidth + 2, height: maxHeight + 2 };
    }
    
    public doLayout() {
        var l = this.getLeft() + 1;
        var t = this.getTop() + 1;
        var ew = this._width - t - this.getRight() - 1;
        var eh = this._height - l - this.getBottom() - 1;
        for(var child of this._children) {
            var d = child.getPreferredSize();
            child.layoutAligned(this._x + l, this._y + t, d.width, d.height, ew, eh);
        }
    }

    public doRender(console: Console) {
        // draw border
        var width = this._width - 1;
        var height = this._height - 1;
        
        console.cells[this._x][this._y].character = 218;
        console.cells[this._x][this._y].foreground = this.foreground.clone();
        console.cells[this._x][this._y + height].character = 192;
        console.cells[this._x][this._y + height].foreground = this.foreground.clone();
        console.cells[this._x + width][this._y].character = 191;
        console.cells[this._x + width][this._y].foreground = this.foreground.clone();
        console.cells[this._x + width][this._y + height].character = 217;
        console.cells[this._x + width][this._y + height].foreground = this.foreground.clone();
        for(let x = 1; x < width; x++) {
            console.cells[this._x + x][this._y].character = 196;
            console.cells[this._x + x][this._y].foreground = this.foreground.clone();
            console.cells[this._x + x][this._y + height].character = 196;
            console.cells[this._x + x][this._y + height].foreground = this.foreground.clone();
            for(let y = 1; y < height; y++) { // make the foreground visible but empty
                console.cells[this._x + x][this._y + y].character = 0;
                console.cells[this._x + x][this._y + y].foreground.a = 1;
            }
        }
        for(let y = 1; y < height; y++) {
            console.cells[this._x][this._y + y].character = 179;
            console.cells[this._x][this._y + y].foreground = this.foreground.clone();
            console.cells[this._x + width][this._y + y].character = 179;
            console.cells[this._x + width][this._y + y].foreground = this.foreground.clone();
        }
        if(this.background !== undefined){
            for(let x = 0; x < this._width; x++){
                for(let y = 0; y < this._height; y++){
                    console.cells[this._x + x][this._y + y].background = this.background.clone();
                }
            }
        }

        if(this._title !== undefined) {
            var sl = this.titleSides.length === 0 ? 0 : 2
            var length = Math.min(this._width - 2 - sl, this._title.length);
            var l = 1;
            if(this._titleAlignment === Alignment.Right)
                l = this._width - 1 - sl - length;
            else if(this._titleAlignment === Alignment.Center)
                l = Math.round((this._width - 1 - sl - length) / 2);
            if(sl)
                console.cells[l++][0].character = this.titleSides[0];
            for(var i = 0; i < length; i++) {
                console.cells[l][0].character = this._title.charCodeAt(i);
                console.cells[l++][0].foreground = this._theme.titleForeground.clone();
            }
            if(sl)
                console.cells[l][0].character = this.titleSides[1];
        }
    }
}
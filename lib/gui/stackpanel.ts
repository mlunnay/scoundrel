import { GuiComponent, Orientation, Size } from './guicomponent';

export class StackPanel extends GuiComponent {
    constructor(private _orientation: Orientation = Orientation.Vertical) {
        super();
    }

    public get orientation(): Orientation { return this._orientation; }
    public set orientation(value: Orientation) {
        if(this._orientation != value){
            this._orientation = value;
            this.invalidate();
        }
    }

    public calcPreferredSize(): Size {
        var sumWidth: number = 0;
        var sumHeight: number = 0;
        var maxWidth: number = 0;
        var maxHeight: number = 0;

        for(var child of this._children) {
            if(child.visible) {
                var d = child.getPreferredSize();
                if(d.width > maxWidth)
                    maxWidth = d.width;
                if(d.height > maxHeight)
                    maxHeight = d.height;
                sumWidth += d.width;
                sumHeight += d.height;
            }
        }

        return { width: this._orientation === Orientation.Horizontal ? sumWidth : maxWidth,
            height: this._orientation === Orientation.Horizontal ? maxHeight : sumHeight };
    }

    public doLayout() {
        var t = this.getLeft();
        var l = this.getTop();
        var ew = this._width - t - this.getRight();
        var eh = this._height - l - this.getBottom();

        for(var child of this._children) {
            if(child.visible) {
                var d = child.getPreferredSize();
                var x = l;
                var y = t;
                var w = d.width;
                var h = d.height;
                var aw = ew;
                var ah = eh;
                if(this._orientation === Orientation.Horizontal) {
                    aw = w;
                    l += w;
                }
                else {
                    ah = h;
                    t += h;
                }
                child.layoutAligned(this._x + x, this._y + y, w, h, aw, ah);
            }
        }
    }
}
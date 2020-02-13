import { GuiComponent, Size } from './guicomponent';

/**
 * A panel with a border and optional title.
 */
export class Panel extends GuiComponent {
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
        return { width: maxWidth, height: maxHeight };
    }
    
    public doLayout() {
        var l = this.getLeft();
        var t = this.getTop();
        var ew = this._width - t - this.getRight();
        var eh = this._height - l - this.getBottom();
        for(var child of this._children) {
            var d = child.getPreferredSize();
            child.layoutAligned(this._x + l, this._y + t, d.width, d.height, ew, eh);
        }
    }
}
import { Position, RGBA, Application, MouseButton } from '../core';
import { Console } from '../console';
import { Theme } from "./theme";
import { EventEmitter } from "eventemitter3";

export enum Reference {
    Relative,
    Absolute
}

export enum Alignment {
    None = 0,
    Left = 1,
    Top = 1 << 1,
    Center = 1 << 2,
    Right = 1 << 3,
    Bottom = 1 << 4
}

export enum Orientation {
    Horizontal = 1,
    Vertical = 1 << 1
}

export interface Size {
    width: number;
    height: number
}

export class GuiComponent extends EventEmitter {
    protected _x: number = 0;
    protected _y: number = 0;
    protected _width: number;
    protected _height: number;
    protected _preferredWidth: number = -1;
    protected _preferredHeight: number = -1;
    protected _preferredWidthReference: Reference = Reference.Absolute;
    protected _preferredHeightReference: Reference = Reference.Absolute;
    protected _horizontalAlignment: Alignment = Alignment.None;
    protected _verticalAlignment: Alignment = Alignment.None;
    private cachedWidth = -1;
    private cachedHeight = 0;
    // padding
    private _top: number = 0;
    private _left: number = 0;
    private _right: number = 0;
    private _bottom: number = 0;

    private application: Application | undefined;

    protected _theme = new Theme();

    public isValid: boolean = false;
    public isLayoutValid: boolean = false;
    public enabled: boolean = true;
    public visible: boolean = true;
    public parent?: GuiComponent;
    public focusChild?: GuiComponent;
    protected _children: GuiComponent[] = [];
    public hover: boolean = false;
    private static isDragging: boolean = false;

    public get x(): number { return this._x; }
    public get y(): number { return this._y; }
    public get position(): Position { return new Position(this._x, this._y); }
    public setPosition(x: number, y: number) {
        if (this._x != x || this._y != y) {
            this._x = x;
            this._y = y;
        }
        return this;
    }

    public get size(): Position { return new Position(this._width, this._height); }
    public setSize(w: number, h: number): GuiComponent {
        if (this._width != w || this._height != h) {
            this._width = w;
            this._height = h;
            this.isLayoutValid = false;
        }
        return this;
    }

    public get horizontalAlignment(): Alignment { return this._horizontalAlignment; }
    public set horizontalAlignment(align: Alignment) {
        this._horizontalAlignment = align;
        this.invalidateLayout();
    }

    public get verticalAlignment(): Alignment { return this._verticalAlignment; }
    public set verticalAlignment(align: Alignment) {
        this._verticalAlignment = align;
        this.invalidateLayout();
    }

    public getTop() { return this._top; }
    public setTop(v: number) {
        this._top = v;
        this.invalidate();
    }

    public getLeft() { return this._left; }
    public setLeft(v: number) {
        this._left = v;
        this.invalidate();
    }

    public getBottom() { return this._bottom; }
    public setBottom(v: number) {
        this._bottom = v;
        this.invalidate();
    }

    public getRight() { return this._right; }
    public setRight(v: number) {
        this._right = v;
        this.invalidate();
    }

    public get children(): GuiComponent[] { return this._children; }

    public get theme() { return this._theme; }

    public get foreground(): RGBA { return this._theme.foreground; }
    public set foreground(value) { this._theme.foreground = value; }

    public get background(): RGBA { return this._theme.background; }
    public set background(value) { this._theme.background = value; }

    public getApplication(): Application | undefined {
        if(this.application !== undefined)
            return this.application;
        return this.parent ? this.parent.getApplication() : undefined;
    }

    constructor(width: number = 0, height: number = 0) {
        super();
        this._width = width;
        this._height = height;
    }

    /**
     * Connects this GuiComponent to the application events.
     * @param app the application that will supply the events.
     */
    public connect(application: Application) {
        this.application;
        application.on('mousemove', (_app, state) => {
            this.mouseMove(state.cellPosition);
        });
        application.on('mouseup', (_app, state, button) => {
            this.mouseUp(state.cellPosition, button);
        });
        application.on('mousedown', (_app, state, button) => {
            this.mouseDown(state.cellPosition, button);
        });
        application.on('wheel', (_app, state, button) => {
            this.mouseDown(state.cellPosition, button);
        });
    }

    public getRoot(): GuiComponent {
        if (this.parent)
            return this.parent.getRoot();
        return this;
    }

    public setPreferredSize(w: number = -1, h: number = -1,
        wReference: Reference = Reference.Absolute, hReference: Reference = Reference.Absolute): GuiComponent {
        if (this._preferredWidth != w || this._preferredHeight != h ||
            this._preferredWidthReference != wReference || this._preferredHeightReference != hReference) {
            this._preferredWidth = w;
            this._preferredHeight = h;
            this._preferredWidthReference = wReference;
            this._preferredHeightReference = hReference;
            this.invalidate();
        }
        return this;
    }

    public setPreferredSizeFill(orientation: Orientation = Orientation.Horizontal | Orientation.Vertical) {
        if (orientation & Orientation.Horizontal) {
            this._preferredWidth = 100;
            this._preferredWidthReference = Reference.Relative;
        }
        if (orientation & Orientation.Vertical) {
            this._preferredHeight = 100;
            this._preferredHeightReference = Reference.Relative;
        }
        this.invalidate();
    }

    public getPreferredSize(): Size {
        this.validateMetrics();
        if (this.cachedWidth === -1) {
            var ps = { width: 0, height: 0 };
            var ps = this.calcPreferredSize();

            if (this._preferredWidth > 0 && this._preferredWidthReference === Reference.Absolute)
                ps.width = this._preferredWidth;
            else
                ps.width += this._left + this._right;

            if (this._preferredHeight > 0 && this._preferredHeightReference === Reference.Absolute)
                ps.height = this._preferredHeight;
            else
                ps.height += this._top + this._bottom;

            this.cachedWidth = ps.width;
            this.cachedHeight = ps.height;
            return ps;
        }
        return { width: this.cachedWidth, height: this.cachedHeight };
    }

    /**
     * Needs to be implemented by child classes to calculate needed size.
     */
    public calcPreferredSize(): Size {
        return { width: this._width, height: this._height };
    }

    public setBounds(x: number, y: number, w: number, h: number): GuiComponent {
        this.setPosition(x, y);
        this.setSize(w, h);
        return this;
    }

    public invalidate() {
        this.isValid = false;
        this.isLayoutValid = false;
        this.cachedWidth = -1;
        if (this.parent !== undefined)
            this.parent.invalidate();
    }

    public invalidateLayout() {
        this.isLayoutValid = false;
        if (this.parent !== undefined)
            this.parent.invalidateLayout();
    }

    private validateMetrics() {
        if (!this.isValid) {
            this.recalc();
            this.isValid = true;
        }
    }

    public validate() {
        this.validateMetrics();
        if (this._width > 0 && this._height > 0 &&
            !this.isLayoutValid && this.visible) {
            this.doLayout();
            for (let child of this._children)
                child.validate();
            this.isLayoutValid = true;
        }
    }

    /**
     * Should be implemented by subclasses that need to recalculate anything prior to doing layout
     */
    protected recalc() { }

    public setPadding(top: number, left?: number, bottom?: number, right?: number) {
        if (left === undefined || bottom === undefined || right == undefined)
            left = bottom = right = top;
        this._top = top;
        this._left = left;
        this._bottom = bottom;
        this._right = right;
        this.invalidate();
    }

    public doLayout() {
        var top = this.getTop();
        var width = this._height - this.getBottom() - top;
        var left = this.getLeft();
        var height = this._width - this.getRight() - left;

        for (var child of this._children) {
            if (child.visible === true) {
                var ps = child.getPreferredSize();
                child.layoutAligned(left, top, ps.width, ps.height, width, height);
            }
        }
    }

    /**
     * Layout the component inside an available size, doing alignment and relative sizing.
     * @param x the x position to place the component.
     * @param y the y position to place the component.
     * @param w the width of the component to place.
     * @param h the height of the component to place.
     * @param aw available width.
     * @param ah available width.
     */
    public layoutAligned(x: number, y: number,
        w: number, h: number,
        aw: number, ah: number) {
        if (this._preferredWidthReference === Reference.Relative && this._preferredWidth >= 0 && this._preferredWidth <= 100) {
            w = Math.round(aw * this._preferredWidth / 100);
        }
        if (this._preferredHeightReference === Reference.Relative && this._preferredWidth > 0 && this._preferredHeight <= 100) {
            h = Math.round(ah * this._preferredHeight / 100);
        }

        if (this._horizontalAlignment === Alignment.Center || this._horizontalAlignment === Alignment.Right ||
            this._verticalAlignment === Alignment.Center || this._verticalAlignment === Alignment.Bottom) {
            if (this._horizontalAlignment === Alignment.Right && aw != w) {
                x += aw - w;
            }
            else if (this._horizontalAlignment === Alignment.Center && aw != w) {
                x += (aw - w) / 2;
            }
            if (this._verticalAlignment === Alignment.Bottom && ah != h) {
                y += ah - h;
            }
            else if (this._verticalAlignment === Alignment.Center && ah != h) {
                y += (ah - h) / 2;
            }

        }
        this.setSize(w, h);
        this.setPosition(x, y);
    }

    public addChild(child: GuiComponent) {
        if (child.parent !== undefined)
            child.parent._children.remove(child);
        child.parent = this;
        this._children.push(child);
        child.invalidate();
    }

    public render(console: Console, root = true) {
        if (root)
            this.validate();
        if (this.visible) {
            this.doRender(console);
            for (var child of this._children) {
                child.render(console, false);
            }
        }
    }

    /**
     * Should be overridden by child classes that need to do rendering.
     * @param _console 
     */
    public doRender(_console: Console) { }

    public focus() {
        if (this.parent !== undefined) {
            if (this.parent.focusChild !== undefined)
                this.parent.focusChild.unfocus(this);
            else
                this.parent.focusChild = this;
            this.parent.focus();
        }
    }

    public unfocus(newFocus?: GuiComponent) {
        if (this.parent !== undefined)
            this.parent.focusChild = newFocus;
    }

    public isInside(pos: Position): boolean {
        return pos.x >= this._x && pos.x <= this._x + this._width && pos.y >= this._y && pos.y <= this._y + this._height;
    }

    public onMouseDown(_position: Position, _button: number): boolean { return false; }

    public mouseDown(position: Position, button: number): boolean {
        if (!(this.visible && this.enabled))
            return false;

        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseDown(position, button))
            return true;

        if (!this.isInside(position))
            return false;
        
        this.emit('mousedown', this, position, button);

        if(this.onMouseDown(position, button))
            return true;

        for (var child of this._children) {
            if (child.mouseDown(position, button))
                return true;
        }

        return false; // not handled
    }

    public onMouseUp(_position: Position, _button: number): boolean { return false; }

    public mouseUp(position: Position, button: number): boolean {
        if (!(this.visible && this.enabled))
            return false;

        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseUp(position, button))
            return true;

        if (!this.isInside(position))
            return false;

        this.emit('mouseup', this, position, button);
        
        // if(this.isDragging) {
        //     this.isDragging = false;
        //     this.emit
        // }

        if(this.onMouseUp(position, button))
            return true;

        for (var child of this._children) {
            if (child.mouseUp(position, button))
                return true;
        }

        return false; // not handled
    }

    public onMouseMove(_position: Position): boolean { return false; }

    public mouseMove(position: Position): boolean {
        if (!(this.visible && this.enabled))
            return false;

        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseMove(position))
            return true;

        var inside = this.isInside(position);
        if (!inside) {
            if(this.hover) {
                this.hover = false;
                for (var child of this._children) {
                    if (child.hover)
                        child.mouseMove(position);
                }
                this.emit('mouseout', this);
            }
            return false;
        }

        if(!this.hover) {
            this.hover = true;
            this.emit('mouseenter');
        }
        

        this.emit('mousemove', this, position);

        var application = this.getApplication();
        if(!GuiComponent.isDragging && application !== undefined && application.inputManager.mouseState.isButtonDown(MouseButton.Left)) {
            GuiComponent.isDragging = true;
            this.emit('dragstart', this, position);
        }

        if(this.onMouseMove(position))
            return true;

        for (var child of this._children) {
            if (child.mouseMove(position))
                return true;
        }

        return false; // not handled
    }

    public onMouseWheel(_position: Position, _delta: number) { return false; }

    public mouseWheel(position: Position, delta: number) {
        if (!(this.visible && this.enabled))
            return false;

        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseWheel(position, delta))
            return true;

        if (!this.isInside(position))
            return false;

        this.emit('mousewheel', this, position, delta);

        if(this.onMouseWheel(position, delta))
            return true;

        for (var child of this._children) {
            if (child.mouseWheel(position, delta))
                return true;
        }

        return false; // not handled
    }

    public Update(dt: number) {
        for (var child of this._children) {
            child.Update(dt);
        }
    }
}
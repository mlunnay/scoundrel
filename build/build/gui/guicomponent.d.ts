import { Position, RGBA, Application } from '../core';
import { Console } from '../console';
import { Theme } from "./theme";
import { EventEmitter } from "eventemitter3";
export declare enum Reference {
    Relative = 0,
    Absolute = 1
}
export declare enum Alignment {
    None = 0,
    Left = 1,
    Top = 2,
    Center = 4,
    Right = 8,
    Bottom = 16
}
export declare enum Orientation {
    Horizontal = 1,
    Vertical = 2
}
export interface Size {
    width: number;
    height: number;
}
export declare class GuiComponent extends EventEmitter {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;
    protected _preferredWidth: number;
    protected _preferredHeight: number;
    protected _preferredWidthReference: Reference;
    protected _preferredHeightReference: Reference;
    protected _horizontalAlignment: Alignment;
    protected _verticalAlignment: Alignment;
    private cachedWidth;
    private cachedHeight;
    private _top;
    private _left;
    private _right;
    private _bottom;
    private application;
    protected _theme: Theme;
    isValid: boolean;
    isLayoutValid: boolean;
    enabled: boolean;
    visible: boolean;
    parent?: GuiComponent;
    focusChild?: GuiComponent;
    protected _children: GuiComponent[];
    hover: boolean;
    private static isDragging;
    readonly x: number;
    readonly y: number;
    readonly position: Position;
    setPosition(x: number, y: number): this;
    readonly size: Position;
    setSize(w: number, h: number): GuiComponent;
    horizontalAlignment: Alignment;
    verticalAlignment: Alignment;
    getTop(): number;
    setTop(v: number): void;
    getLeft(): number;
    setLeft(v: number): void;
    getBottom(): number;
    setBottom(v: number): void;
    getRight(): number;
    setRight(v: number): void;
    readonly children: GuiComponent[];
    readonly theme: Theme;
    foreground: RGBA;
    background: RGBA;
    getApplication(): Application | undefined;
    constructor(width?: number, height?: number);
    /**
     * Connects this GuiComponent to the application events.
     * @param app the application that will supply the events.
     */
    connect(application: Application): void;
    getRoot(): GuiComponent;
    setPreferredSize(w?: number, h?: number, wReference?: Reference, hReference?: Reference): GuiComponent;
    setPreferredSizeFill(orientation?: Orientation): void;
    getPreferredSize(): Size;
    /**
     * Needs to be implemented by child classes to calculate needed size.
     */
    calcPreferredSize(): Size;
    setBounds(x: number, y: number, w: number, h: number): GuiComponent;
    invalidate(): void;
    invalidateLayout(): void;
    private validateMetrics;
    validate(): void;
    /**
     * Should be implemented by subclasses that need to recalculate anything prior to doing layout
     */
    protected recalc(): void;
    setPadding(top: number, left?: number, bottom?: number, right?: number): void;
    doLayout(): void;
    /**
     * Layout the component inside an available size, doing alignment and relative sizing.
     * @param x the x position to place the component.
     * @param y the y position to place the component.
     * @param w the width of the component to place.
     * @param h the height of the component to place.
     * @param aw available width.
     * @param ah available width.
     */
    layoutAligned(x: number, y: number, w: number, h: number, aw: number, ah: number): void;
    addChild(child: GuiComponent): void;
    render(console: Console, root?: boolean): void;
    /**
     * Should be overridden by child classes that need to do rendering.
     * @param _console
     */
    doRender(_console: Console): void;
    focus(): void;
    unfocus(newFocus?: GuiComponent): void;
    isInside(pos: Position): boolean;
    onMouseDown(_position: Position, _button: number): boolean;
    mouseDown(position: Position, button: number): boolean;
    onMouseUp(_position: Position, _button: number): boolean;
    mouseUp(position: Position, button: number): boolean;
    onMouseMove(_position: Position): boolean;
    mouseMove(position: Position): boolean;
    onMouseWheel(_position: Position, _delta: number): boolean;
    mouseWheel(position: Position, delta: number): boolean;
    Update(dt: number): void;
}

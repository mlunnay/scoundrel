import { RGBA } from "../core";

export class Theme {
    private _background?: RGBA;
    private _backgroundActive?: RGBA;
    private _backgroundDisabled?: RGBA;
    private _foreground?: RGBA;
    private _foregroundActive?: RGBA;
    private _foregroundDisabled?: RGBA;
    private _titleForeground?: RGBA;

    public get background() { return this._background || <RGBA>Theme.default()._background; }
    public set background(value) { this._background = value; }

    public get backgroundActive() { return this._backgroundActive || <RGBA>Theme.default()._backgroundActive; }
    public set backgroundActive(value) { this._backgroundActive = value; }

    public get backgroundDisabled() { return this._backgroundDisabled || <RGBA>Theme.default()._backgroundDisabled; }
    public set backgroundDisabled(value) { this._backgroundDisabled = value; }

    public get foreground() { return this._foreground || <RGBA>Theme.default()._foreground; }
    public set foreground(value) { this._foreground = value; }

    public get foregroundActive() { return this._foregroundActive || <RGBA>(Theme.default()._foregroundActive); }
    public set foregroundActive(value) { this._foregroundActive = value; }

    public get foregroundDisabled() { return this._foregroundDisabled || <RGBA>Theme.default()._foregroundDisabled; }
    public set foregroundDisabled(value) { this._foregroundDisabled = value; }

    public get titleForeground() { return this._titleForeground || <RGBA>(Theme.default()._titleForeground); }
    public set titleForeground(value) { this._titleForeground = value; }

    static _default: Theme;

    static default() {
        if(!Theme._default) {
            Theme._default = new Theme();
            Theme._default._background = RGBA.fromInt(0x272822);
            Theme._default._backgroundActive = RGBA.fromInt(0x383830);
            Theme._default._backgroundDisabled = RGBA.fromInt(0x272822);
            Theme._default._foreground = RGBA.fromInt(0xFD971F);
            Theme._default._foregroundActive = RGBA.fromInt(0xFFDF90);
            Theme._default._foregroundDisabled = RGBA.fromInt(0x748E5F);
            Theme._default._titleForeground = RGBA.fromInt(0xFFFFFF);
        }
        return Theme._default;
    }
}
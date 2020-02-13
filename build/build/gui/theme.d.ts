import { RGBA } from "../core";
export declare class Theme {
    private _background?;
    private _backgroundActive?;
    private _backgroundDisabled?;
    private _foreground?;
    private _foregroundActive?;
    private _foregroundDisabled?;
    private _titleForeground?;
    background: RGBA;
    backgroundActive: RGBA;
    backgroundDisabled: RGBA;
    foreground: RGBA;
    foregroundActive: RGBA;
    foregroundDisabled: RGBA;
    titleForeground: RGBA;
    static _default: Theme;
    static default(): Theme;
}

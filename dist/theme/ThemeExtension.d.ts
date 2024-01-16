export declare type ThemeUpdateCallback = (themeCss: string) => void;
export declare class ThemeExtension {
    listeners: Map<string, ThemeUpdateCallback>;
    theme: string;
    constructor(theme: string);
    addListener(pluginId: string, callback?: ThemeUpdateCallback): void;
}

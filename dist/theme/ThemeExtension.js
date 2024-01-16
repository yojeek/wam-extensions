export class ThemeExtension {
    constructor(theme) {
        this.theme = theme;
        this.listeners = new Map();
    }
    addListener(pluginId, callback) {
        if (callback) {
            this.listeners.set(pluginId, callback);
            callback(this.theme);
        }
        else {
            this.listeners.delete(pluginId);
        }
    }
}

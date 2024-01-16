// Asset extension is for plugins that load or save external assets
export class AssetExtension {
    constructor() {
        this.delegates = new Map();
    }
    register(pluginId, delegate) {
        if (delegate) {
            this.delegates.set(pluginId, delegate);
        }
        else {
            this.delegates.delete(pluginId);
        }
    }
}

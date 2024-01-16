export class PatternExtension {
    constructor() {
        this.delegates = new Map();
    }
    setPatternDelegate(pluginId, delegate) {
        if (delegate) {
            this.delegates.set(pluginId, delegate);
        }
        else {
            this.delegates.delete(pluginId);
        }
    }
    getPatternViewDelegate(pluginId) {
        return this.delegates.get(pluginId);
    }
}

export class RunPresetExtension {
    constructor() {
        this.delegates = new Map();
    }
    register(instanceId, delegate) {
        this.delegates.set(instanceId, delegate);
    }
    deregister(instanceId) {
        this.delegates.delete(instanceId);
    }
    runPreset(instanceId) {
        let delegate = this.delegates.get(instanceId);
        if (delegate) {
            delegate.runPreset();
        }
    }
}

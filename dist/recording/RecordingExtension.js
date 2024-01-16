export class RecordingExtension {
    constructor() {
        this.delegates = new Map();
    }
    register(instanceId, delegate) {
        this.delegates.set(instanceId, delegate);
    }
    deregister(instanceId) {
        this.delegates.delete(instanceId);
    }
    armRecording(instanceId, armed) {
        let delegate = this.delegates.get(instanceId);
        if (delegate) {
            delegate.armRecording(armed);
        }
    }
}

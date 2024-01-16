export interface RecordingDelegate {
    armRecording: (armed: boolean) => void;
}
export declare class RecordingExtension {
    delegates: Map<string, RecordingDelegate>;
    constructor();
    register(instanceId: string, delegate: RecordingDelegate): void;
    deregister(instanceId: string): void;
    armRecording(instanceId: string, armed: boolean): void;
}

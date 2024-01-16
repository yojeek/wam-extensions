export interface RunPresetDelegate {
    runPreset: () => void;
}
export declare class RunPresetExtension {
    delegates: Map<string, RunPresetDelegate>;
    constructor();
    register(instanceId: string, delegate: RunPresetDelegate): void;
    deregister(instanceId: string): void;
    runPreset(instanceId: string): void;
}

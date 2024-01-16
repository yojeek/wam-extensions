import { WamParameterInfoMap } from "@webaudiomodules/api";
export declare type ModulationTargetDelegate = {
    connectModulation: (params: WamParameterInfoMap) => Promise<void>;
};
export declare class ModulationTargetExtension {
    delegates: Map<string, ModulationTargetDelegate>;
    constructor();
    setModulationTargetDelegate(pluginId: string, delegate?: ModulationTargetDelegate): void;
    getModulationTargetDelegate(pluginId: string): ModulationTargetDelegate | undefined;
    lockParametersForAutomation?: (pluginId: string, paramIds: string[]) => Promise<void>;
}

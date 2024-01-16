export declare type PatternEntry = {
    id: string;
    name: string;
};
export declare type PatternDelegate = {
    getPatternList: () => PatternEntry[];
    createPattern: (id: string) => void;
    deletePattern: (id: string) => void;
    playPattern: (id: string | undefined) => void;
    getPatternState: (id: string) => any;
    setPatternState: (id: string, state: any) => any;
};
export declare class PatternExtension {
    delegates: Map<string, PatternDelegate>;
    constructor();
    setPatternDelegate(pluginId: string, delegate?: PatternDelegate): void;
    getPatternViewDelegate(pluginId: string): PatternDelegate | undefined;
}

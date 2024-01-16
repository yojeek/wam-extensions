export declare type NoteDefinition = {
    number: number;
    name?: string;
    blackKey: boolean;
};
export declare type NoteListenerCallback = (notes: NoteDefinition[] | undefined) => void;
export declare class NoteExtension {
    noteDefinitions: Map<string, NoteDefinition[]>;
    listeners: Map<string, NoteListenerCallback>;
    pluginMapping: Map<string, string[]>;
    constructor();
    setNoteList(pluginId: string, notes?: NoteDefinition[]): void;
    addListener(pluginId: string, callback?: NoteListenerCallback): void;
    addMapping(destinationId: string, sourceIds?: string[]): void;
    clearMapping(): void;
    sendNoteLists(): void;
}

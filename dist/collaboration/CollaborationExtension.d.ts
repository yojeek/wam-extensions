export declare type CollaborationOperation = {
    operation: "INSERT" | "DELETE";
    position: number;
    length?: number;
    text?: string;
};
export declare type RemoteSelection = {
    anchor: number;
    head: number;
    color: string;
    username: string;
    userId: string;
};
export interface CollaborationDocumentInterface {
    toString(): Promise<string>;
    observe(callback?: (operations: CollaborationOperation[]) => Promise<void>): Promise<void>;
    insert(position: number, text: string): Promise<void>;
    delete(index: number, length: number): Promise<void>;
    applyOperations(operations: CollaborationOperation[]): Promise<void>;
    updateSelection(anchor: number, head: number): Promise<void>;
    selections(): Promise<RemoteSelection[]>;
}
export declare class CollaborationExtension {
    getDocument?: (pluginId: string, documentId: string, initialContent: string) => Promise<CollaborationDocumentInterface>;
}

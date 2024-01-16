export class NoteExtension {
    constructor() {
        this.noteDefinitions = new Map();
        this.listeners = new Map();
        this.pluginMapping = new Map();
    }
    setNoteList(pluginId, notes) {
        if (notes) {
            this.noteDefinitions.set(pluginId, notes);
        }
        else {
            this.noteDefinitions.delete(pluginId);
        }
        this.sendNoteLists();
    }
    addListener(pluginId, callback) {
        if (callback) {
            this.listeners.set(pluginId, callback);
        }
        else {
            this.listeners.delete(pluginId);
        }
        this.sendNoteLists();
    }
    addMapping(destinationId, sourceIds) {
        if (sourceIds) {
            this.pluginMapping.set(destinationId, sourceIds);
        }
        else {
            this.pluginMapping.delete(destinationId);
        }
        this.sendNoteLists();
    }
    clearMapping() {
        this.pluginMapping.clear();
    }
    sendNoteLists() {
        this.pluginMapping.forEach((sourceIds, destinationId) => {
            let callback = this.listeners.get(destinationId);
            if (callback) {
                let noteListId = sourceIds.find((id) => this.noteDefinitions.has(id));
                if (noteListId) {
                    callback(this.noteDefinitions.get(noteListId));
                }
                else {
                    callback(undefined);
                }
            }
        });
    }
}

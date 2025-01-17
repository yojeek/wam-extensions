import { NoteExtension } from "./notes/NoteExtension.js";
import { PatternExtension } from "./patterns/PatternExtension.js";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension.js";
import { VideoExtension } from "./video/VideoExtension.js";
import { AssetExtension } from "./assets/AssetExtension.js";
import { CollaborationExtension } from "./collaboration/CollaborationExtension.js";
import { RecordingExtension } from "./recording/RecordingExtension.js";
import { UserSettingExtension } from "./userSetting/userSetting.js";
import { ThemeExtension } from "./theme/ThemeExtension.js";
import { RunPresetExtension } from "./runPreset/RunPresetExtension.js";
export declare type WAMExtensions = {
    assets?: AssetExtension;
    notes?: NoteExtension;
    patterns?: PatternExtension;
    modulationTarget?: ModulationTargetExtension;
    video?: VideoExtension;
    collaboration?: CollaborationExtension;
    recording?: RecordingExtension;
    userSetting?: UserSettingExtension;
    theme?: ThemeExtension;
    runPreset?: RunPresetExtension;
};
declare global {
    interface Window {
        WAMExtensions: WAMExtensions;
    }
}

export declare type VideoExtensionDelegate = {
    connectVideo(options: VideoExtensionOptions): void;
    config(): VideoModuleConfig;
    render(inputs: (WebGLTexture | undefined)[], currentTime: number): (WebGLTexture | undefined)[];
    disconnectVideo(): void;
};
export declare type VideoExtensionOptions = {
    width: number;
    height: number;
    gl: WebGL2RenderingContext;
};
export declare type VideoModuleConfig = {
    numberOfInputs: number;
    numberOfOutputs: number;
};
export declare class VideoExtension {
    delegates: Map<string, VideoExtensionDelegate>;
    connections: Map<string, string>;
    constructor();
    setDelegate(pluginId: string, delegate?: VideoExtensionDelegate): void;
    getDelegate(pluginId: string): VideoExtensionDelegate | undefined;
}

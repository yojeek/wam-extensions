export declare type WamAsset = {
    uri: string;
    name: string;
    content?: Blob;
};
export declare type WamAssetType = "AUDIO" | "DATA";
export interface AssetExtensionInterface {
    fetchAssetList(): WamAsset[];
}
export declare class AssetExtension {
    delegates: Map<string, AssetExtensionInterface>;
    constructor();
    register(pluginId: string, delegate?: AssetExtensionInterface): void;
    pickAsset?: (pluginId: string, assetType: WamAssetType, loadCallback: (asset: WamAsset | undefined) => Promise<void>) => void;
    loadAsset?: (pluginId: string, assetUri: string) => Promise<WamAsset | undefined>;
    saveAsset?: (pluginId: string, assetType: WamAssetType, content: Blob, name?: string) => Promise<WamAsset | undefined>;
}

export interface VideoAsset {
    type: "video";
    src: string;
    query: string;
}

export interface ImageAsset {
    type: "image";
    src: string;
    query: string;
}

export interface AudioAsset {
    type: "audio";
    src: string;
    duration: number;
}
export interface MediaInfo {
    search: string;
    icon?: string;
    overlay?: string;
}

export interface SceneStyle {
    theme?: string;
    accent?: string;
}

export type MediaAsset =
    | VideoAsset
    | ImageAsset
    | AudioAsset;
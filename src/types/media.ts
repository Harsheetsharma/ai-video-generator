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

export type MediaAsset =
    | VideoAsset
    | ImageAsset
    | AudioAsset;
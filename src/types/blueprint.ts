export type LayoutType =
    | "hero"
    | "split"
    | "news"
    | "quote";

export type VisualType =
    | "stock_market"
    | "tech"
    | "ai"
    | "warning"
    | "news"
    | "abstract";

export type AnimationType =
    | "zoom_in"
    | "fade"
    | "slide_up"
    | "glitch";

export interface Scene {
    id: number;
    start: number;
    end: number;
    text: string;
    caption: string;
    visualType: VisualType;
    animation: AnimationType;
    background: VisualType;
    layout: LayoutType;
}

export interface VideoBlueprint {
    title: string;
    totalDuration: number;
    scenes: Scene[];
}
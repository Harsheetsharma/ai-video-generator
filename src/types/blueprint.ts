export type VisualType =
    | "tech"
    | "ai"
    | "news"
    | "warning"
    | "abstract"
    | "stock_market";

export type AnimationType =
    | "zoom_in"
    | "fade"
    | "slide_up"
    | "glitch";

export type LayoutType =
    | "hero"
    | "split"
    | "news"
    | "quote"
    | "statistics"
    | "timeline";

export type TransitionType =
    | "cut"
    | "fade"
    | "zoom"
    | "slide";

// export type ScenePurpose =
//     | "hook"
//     | "explanation"
//     | "statistic"
//     | "quote"
//     | "comparison"
//     | "timeline"
//     | "steps"
//     | "cta";

export interface Scene {
    id: number;

    start: number;
    end: number;

    text: string;
    caption: string;

    visualType: VisualType;

    background: VisualType;

    animation: AnimationType;

    layout: LayoutType;

    transition: TransitionType;

    visualSearch: string;

    musicMood: string;

    voiceEmotion: string;

    // scenePurpose: ScenePurpose;
}

export interface VideoBlueprint {
    title: string;
    totalDuration: number;
    scenes: Scene[];
}

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

export interface HeroContent {
    title: string;
    subtitle: string;
}

export interface TimelineContent {
    year: string;
    title: string;
    subtitle: string;
}

export interface StatisticsContent {
    value: string;
    label: string;
}

export interface QuoteContent {
    quote: string;
    author?: string;
}

// export type ScenePurpose =
//     | "hook"
//     | "explanation"
//     | "statistic"
//     | "quote"
//     | "comparison"
//     | "timeline"
//     | "steps"
//     | "cta";

export interface BaseScene {
    id: number;

    start: number;
    end: number;

    visualType: VisualType;

    background: VisualType;

    animation: AnimationType;

    transition: TransitionType;

    visualSearch: string;

    musicMood: string;

    voiceEmotion: string;

    // scenePurpose: ScenePurpose;
}

// interface BaseScene {
//     id: string;
//     duration: number;
//     background: VisualType;
//     animation: AnimationType;
// }

export type Scene =
    | (BaseScene & {
        layout: "hero";
        content: HeroContent;
    })
    | (BaseScene & {
        layout: "timeline";
        content: TimelineContent;
    })
    | (BaseScene & {
        layout: "statistics";
        content: StatisticsContent;
    })
    | (BaseScene & {
        layout: "quote";
        content: QuoteContent;
    });

export interface VideoBlueprint {
    title: string;
    totalDuration: number;
    scenes: Scene[];
}
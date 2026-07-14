import { z } from "zod";
// import { VideoPlan } from "@/types/videoPlan";
import { VideoBlueprint } from "@/types/blueprint";


import { SectionPlan } from "@/types/sectionPlan";
const SceneSchema = z.object({
    id: z.number().int().positive(),
    start: z.number().min(0),
    end: z.number().positive(),
    text: z.string().min(1),
    caption: z.string().min(1),

    visualType: z.enum([
        "stock_market",
        "tech",
        "ai",
        "warning",
        "news",
        "abstract",
    ]),

    animation: z.enum([
        "zoom_in",
        "fade",
        "slide_up",
        "glitch",
    ]),

    background: z.enum([
        "stock_market",
        "tech",
        "ai",
        "warning",
        "news",
        "abstract",
    ]),

    layout: z.enum([
        "hero",
        "split",
        "news",
        "quote",
    ]),

    transition: z.enum([
        "cut",
        "fade",
        "zoom",
        "slide",
    ]),

    visualSearch: z.string().min(1),

    musicMood: z.string().min(1),

    voiceEmotion: z.string().min(1),
});

export class SectionPlanValidator {
    private schema = z.object({

        scenes: z.array(SceneSchema).min(1),
    });

    validate(data: unknown): SectionPlan {
        return this.schema.parse(data);
    }
}
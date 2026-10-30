import { VideoBlueprint } from "@/types/blueprint";

export class BlueprintRepairer {
    repair(data: unknown): VideoBlueprint {
        if (typeof data !== "object" || data === null) {
            return data as VideoBlueprint;
        }

        const blueprint = data as { scenes?: unknown };

        if (!Array.isArray(blueprint.scenes)) {
            return data as VideoBlueprint;
        }

        for (const scene of blueprint.scenes) {
            if (typeof scene !== "object" || scene === null) {
                continue;
            }

            const fields = scene as Record<string, unknown>;
            fields.voiceEmotion ??= "neutral";
            fields.musicMood ??= "calm";
            fields.transition ??= "cut";
            fields.layout ??= "hero";
            fields.animation ??= "fade";
            fields.visualType ??= "abstract";
            fields.background ??= "abstract";
            fields.visualSearch ??= "abstract background";
            fields.text ??= "...";
            fields.caption ??= "...";
        }

        return data as VideoBlueprint;
    }
}

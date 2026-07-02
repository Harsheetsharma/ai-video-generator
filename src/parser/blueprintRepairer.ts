import { VideoBlueprint } from "@/types/blueprint";

export class BlueprintRepairer {
    repair(data: any): VideoBlueprint {
        if (!data.scenes) {
            return data;
        }

        for (const scene of data.scenes) {
            // Default values
            scene.voiceEmotion ??= "neutral";
            scene.musicMood ??= "calm";

            scene.transition ??= "cut";
            scene.layout ??= "hero";

            scene.animation ??= "fade";

            scene.visualType ??= "abstract";
            scene.background ??= "abstract";

            scene.visualSearch ??= "abstract background";

            scene.text ??= "...";
            scene.caption ??= "...";
        }

        return data;
    }
}
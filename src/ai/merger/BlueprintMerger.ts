import { VideoBlueprint, Scene } from "@/types/blueprint";
import { Outline } from "@/types/outline";
import { SectionPlan } from "@/types/sectionPlan";

export class BlueprintMerger {
    merge(
        outline: Outline,
        sectionPlans: SectionPlan[]
    ): VideoBlueprint {
        const scenes: Scene[] = [];

        let currentTime = 0;
        let currentId = 1;

        for (const plan of sectionPlans) {
            for (const scene of plan.scenes) {
                const duration = scene.end - scene.start;

                scenes.push({
                    ...scene,

                    id: currentId++,

                    start: currentTime,

                    end: currentTime + duration,
                });

                currentTime += duration;
            }
        }

        return {
            title: outline.title,

            totalDuration: currentTime,

            scenes,
        };
    }
}
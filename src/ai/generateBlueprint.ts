import { VideoBlueprint } from "@/types/blueprint";
import { GenerateVideoRequest } from "@/types/generateVideoRequest";
import { BlueprintValidator } from "@/parser/blueprintValidator";
import { OutlineGenerator } from "./outline/OutlineGenerator";
import { SectionPlanner } from "./planner/SectionPlanner";
import { BlueprintMerger } from "./merger/BlueprintMerger";

const merger = new BlueprintMerger();
const sectionPlanner = new SectionPlanner();
const outlineGenerator = new OutlineGenerator();
const validator = new BlueprintValidator();


export async function generateBlueprint({
    script,
    targetType,
}: GenerateVideoRequest): Promise<VideoBlueprint> {

    const MAX_RETRIES = 3;
    let lastError: unknown;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {

        try {
            const outline = await outlineGenerator.generate(script, targetType);
            const sectionPlans = [];
            console.log(`\n========== ATTEMPT ${attempt} ==========`);
            const start = performance.now();

            for (const section of outline.sections) {
                console.log(`Generating section ${section.id}: ${section.title}`);
                const plan = await sectionPlanner.generate(section);

                sectionPlans.push(plan);
            }
            console.log("outline", outline);
            console.log("Pipeline:", performance.now() - start);
            const blueprint = merger.merge(outline, sectionPlans);

            console.log("========== BLUEPRINT ==========");
            console.log(blueprint);

            console.log("Blueprint generated successfully.");

            return validator.validate(blueprint);

        } catch (error) {
            lastError = error;

            console.log(`❌ Attempt ${attempt} failed.`);
            console.error(error);
        }
    }

    throw lastError;
}
import { VideoBlueprint } from "@/types/blueprint";
import { OllamaClient } from './ollamaClient';
import { PromptBuilder } from "./promptBuilder";
import { BlueprintParser } from "@/parser/blueprintParser";
import { ResponseSanitizer } from "@/parser/responseSanitizer";
import { GenerateVideoRequest } from "@/types/generateVideoRequest";
import { BlueprintValidator } from "@/parser/blueprintValidator";
import { BlueprintRepairer } from "@/parser/blueprintRepairer";

const repairer = new BlueprintRepairer();
const validator = new BlueprintValidator();
const sanitizer = new ResponseSanitizer();
const parser = new BlueprintParser();
const promptBuilder = new PromptBuilder()
const ollama = new OllamaClient();

export async function generateBlueprint({
    script,
    targetType,
}: GenerateVideoRequest): Promise<VideoBlueprint> {

    const prompt = promptBuilder.buildScenePlanningPrompt(script, targetType);

    const MAX_RETRIES = 3;

    let lastError: unknown;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`\n========== ATTEMPT ${attempt} ==========`);

            console.log("========== SYSTEM ==========");
            console.log(prompt.systemPrompt);

            console.log("========== USER ==========");
            console.log(prompt.userPrompt);

            const start = performance.now();
            const rawResponse = await ollama.generate(prompt);
            console.log("Ollama:", performance.now() - start);

            console.log("========== RAW RESPONSE ==========");
            console.log(rawResponse);

            const t1 = performance.now();
            const sanitizedResponse = sanitizer.sanitize(rawResponse);
            console.log("Sanitize:", performance.now() - t1);

            console.log("========== SANITIZED ==========");
            console.log(sanitizedResponse);

            const t2 = performance.now()
            const parsed = parser.parse(sanitizedResponse);
            console.log("parsed", performance.now() - t2);

            const repaired = repairer.repair(parsed);

            const t3 = performance.now()
            const blueprint = validator.validate(repaired);
            console.log("validate", performance.now() - t3);

            console.log("========== BLUEPRINT ==========");
            console.log(blueprint);

            console.log("Blueprint generated successfully.");

            return blueprint;

        } catch (error) {
            lastError = error;

            console.log(`❌ Attempt ${attempt} failed.`);
            console.error(error);
        }
    }

    throw lastError;
}
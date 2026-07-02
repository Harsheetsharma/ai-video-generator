import { VideoBlueprint } from "@/types/blueprint";
import { OllamaClient } from './ollamaClient';
import { PromptBuilder } from "./promptBuilder";
import { BlueprintParser } from "@/parser/blueprintParser";
import { ResponseSanitizer } from "@/parser/responseSanitizer";
import { VideoPlan } from "@/types/videoPlan";
import { GenerateVideoRequest } from "@/types/generateVideoRequest";
import { BlueprintValidator } from "@/parser/blueprintValidator";

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

            const rawResponse = await ollama.generate(prompt);

            console.log("========== RAW RESPONSE ==========");
            console.log(rawResponse);

            const sanitizedResponse = sanitizer.sanitize(rawResponse);

            console.log("========== SANITIZED ==========");
            console.log(sanitizedResponse);

            const parsed = parser.parse(sanitizedResponse);

            const blueprint = validator.validate(parsed);

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
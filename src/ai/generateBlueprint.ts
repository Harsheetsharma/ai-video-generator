import { VideoBlueprint } from "@/types/blueprint";
import { OllamaClient } from './ollamaClient';
import { PromptBuilder } from "./promptBuilder";
import { BlueprintParser } from "@/parser/blueprintParser";
import { ResponseSanitizer } from "@/parser/responseSanitizer";
import { VideoPlan } from "@/types/videoPlan";
import { GenerateVideoRequest } from "@/types/generateVideoRequest";


const sanitizer = new ResponseSanitizer();
const parser = new BlueprintParser();
const promptBuilder = new PromptBuilder()
const ollama = new OllamaClient();

export async function generateBlueprint({ script, targetType }: GenerateVideoRequest): Promise<VideoBlueprint> {

    const prompt = promptBuilder.buildScenePlanningPrompt(script, targetType);

    const rawResponse = await ollama.generate(prompt);
    const sanitizedResponse = sanitizer.sanitize(rawResponse);
    const videoPlan = parser.parse<VideoPlan>(sanitizedResponse);

    console.log("========== SYSTEM ==========");
    console.log(prompt.systemPrompt);

    console.log("========== USER ==========");
    console.log(prompt.userPrompt);

    console.log("========== RESPONSE ==========");
    console.log(rawResponse);

    console.log("========== RAW RESPONSE ==========");
    console.log(rawResponse);

    console.log("========== SANITIZED ==========");
    console.log(sanitizedResponse);

    console.log(videoPlan);

    console.log("========== VIDEO PLAN ==========");
    console.log(videoPlan);


    console.log("Generating blueprint for:", script);

    return {
        title: "Mock Video",
        totalDuration: 15,
        scenes: [],
    };
}
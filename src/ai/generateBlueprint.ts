import { VideoBlueprint } from "@/types/blueprint";
import { OllamaClient } from './ollamaClient';
import { PromptBuilder } from "./promptBuilder";

const promptBuilder = new PromptBuilder
const ollama = new OllamaClient();
export interface generateBlueprintInput {
    script: string;
}

export async function generateBlueprint({ script }: generateBlueprintInput): Promise<VideoBlueprint> {

    const prompt = promptBuilder.buildScenePlanningPrompt(script);

    const rawResponse = await ollama.generate(prompt);

    console.log("========== SYSTEM ==========");
    console.log(prompt.systemPrompt);

    console.log("========== USER ==========");
    console.log(prompt.userPrompt);

    console.log("========== RESPONSE ==========");
    console.log(rawResponse);

    console.log("Generating blueprint for:", script);

    return {
        title: "Mock Video",
        totalDuration: 15,
        scenes: [],
    };
}
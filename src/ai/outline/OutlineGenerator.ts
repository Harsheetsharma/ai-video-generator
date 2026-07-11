import { OllamaClient } from "../ollamaClient";
import { OutlinePromptBuilder } from "./OutlinePromptBuilder";
import { ResponseSanitizer } from "@/parser/responseSanitizer";
import { BlueprintParser } from "@/parser/blueprintParser";
import { Outline } from "@/types/outline";
import { TargetType } from "@/types/generateVideoRequest";

const ollama = new OllamaClient();
const promptBuilder = new OutlinePromptBuilder();
const sanitizer = new ResponseSanitizer();
const parser = new BlueprintParser();

export class OutlineGenerator {
    async generate(
        script: string,
        targetType: TargetType
    ): Promise<Outline> {
        const prompt = promptBuilder.build(script, targetType);

        const raw = await ollama.generate(prompt);
        console.log("========== OUTLINE RAW ==========");
        console.log(raw);

        const sanitized = sanitizer.sanitize(raw);
        console.log("========== OUTLINE SANITIZED ==========");
        console.log(sanitized);

        console.log("========== OUTLINE PARSED ==========");
        console.log(parser.parse<Outline>(sanitized));
        return parser.parse<Outline>(sanitized);
    }
}
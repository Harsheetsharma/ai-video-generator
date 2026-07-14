import { OllamaClient } from "../ollamaClient";
import { SectionPromptBuilder } from "./SectionPromptBuilder";
import { ResponseSanitizer } from "@/parser/responseSanitizer";
import { BlueprintParser } from "@/parser/blueprintParser";
import { SectionPlan } from "@/types/sectionPlan";
import { OutlineSection } from "@/types/outline";
import { SectionPlanValidator } from "@/parser/sectionPlanValidator";

const ollama = new OllamaClient();
const promptBuilder = new SectionPromptBuilder();
const sanitizer = new ResponseSanitizer();
const parser = new BlueprintParser();
const validator = new SectionPlanValidator();

export class SectionPlanner {
  async generate(section: OutlineSection): Promise<SectionPlan> {
    const prompt = promptBuilder.build(section);

    const raw = await ollama.generate(prompt);
    console.log("========== SECTION RAW ==========");
    console.log(raw);


    const sanitized = sanitizer.sanitize(raw);
    console.log("========== SECTION SANITIZED ==========");
    console.log(sanitized);


    const parsed = parser.parse<SectionPlan>(sanitized);
    console.log("========== SECTION PARSED ==========");
    console.log(parsed);

    return validator.validate(parsed);
  }
}
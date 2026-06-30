import { Prompt } from "@/types/prompt";
import { TargetType } from "@/types/generateVideoRequest";
export class PromptBuilder {
    buildScenePlanningPrompt(script: string, targetType: TargetType): Prompt {

        const duration =
            targetType === "short"
                ? "15-60 seconds"
                : "5-10 minutes";

        const scenes =
            targetType === "short"
                ? "5-10 scenes"
                : "40-80 scenes";
        return {
            systemPrompt: `
You are a backend API.

Your job is to return ONLY valid JSON.

Rules:
- Return ONLY JSON.
- Do NOT explain anything.
- Do NOT use Markdown.
- Do NOT wrap the JSON inside triple backticks.
- Do NOT write any text before or after the JSON.
- The JSON must be valid.
`.trim(),

            userPrompt: `
Read the following script.

Create a video plan.

Target Video Type:
${targetType}

Target Duration:
${duration}

Expected Scene Count:
${scenes}

Return ONLY valid JSON.

JSON Schema:

{
  "title": "string",
  "summary": "string",
  "estimatedDuration": number,
  "sceneCount": number
}

Rules:

- title should be short and engaging.
- summary should be 1-2 sentences.
- estimatedDuration MUST match the target duration.
- sceneCount MUST match the expected scene count.
- Return ONLY JSON.
- Do NOT add extra fields.

Script:

${script}
`.trim(),
        };
    }
}
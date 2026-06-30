import { Prompt } from "@/types/prompt";

export class PromptBuilder {
    buildScenePlanningPrompt(script: string): Prompt {
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

Return this exact JSON structure:

{
  "summary": "string"
}

Script:

${script}
`.trim(),
        };
    }
}
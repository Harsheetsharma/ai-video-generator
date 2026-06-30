import { Prompt } from "@/types/prompt";

export class PromptBuilder {
    buildScenePlanningPrompt(script: string): Prompt {
        return {
            systemPrompt: `
You are a helpful AI assistant.

Your job is to help the user.

Always answer clearly.
`.trim(),

            userPrompt: `
Summarize the following script in one paragraph.

Script:

${script}
`.trim(),
        };
    }
}
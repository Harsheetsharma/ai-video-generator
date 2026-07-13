import { Prompt } from "@/types/prompt";
import { OutlineSection } from "@/types/outline";

export class SectionPromptBuilder {
    build(section: OutlineSection): Prompt {
        return {
            systemPrompt: `
You are an expert AI video planner.

Return ONLY valid JSON.

Generate scenes ONLY for the given section.

Do not generate the full video.
`.trim(),

            userPrompt: `
Section:

Title:
${section.title}

Description:
${section.description}

Generate between 3 and 5 scenes.

JSON Schema:

{
  "scenes": [
    {
      "id": number,
      "start": number,
      "end": number,
      "text": "string",
      "caption": "string",
      "visualType": "stock_market | tech | ai | warning | news | abstract",
      "animation": "zoom_in | fade | slide_up | glitch",
      "background": "stock_market | tech | ai | warning | news | abstract",
      "layout": "hero | split | news | quote",
      "transition": "cut | fade | zoom | slide",
      "visualSearch": "string",
      "musicMood": "string",
      "voiceEmotion": "string"
    }
  ]
}

Rules:

- Return ONLY JSON.
- Generate ONLY this section.
- Generate 3–5 scenes.
- Scene IDs start at 1.
- First scene starts at 0.
- Every next scene starts where the previous one ends.
- Keep scene durations between 3 and 8 seconds.
- Never leave any field empty.
`.trim(),
        };
    }
}
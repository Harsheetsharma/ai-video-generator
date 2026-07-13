import { Prompt } from "@/types/prompt";
import { TargetType } from "@/types/generateVideoRequest";

export class OutlinePromptBuilder {
  build(script: string, targetType: TargetType): Prompt {
    const sectionCount =
      targetType === "short" ? "3-5" : "8-12";

    return {
      systemPrompt: `
You are an expert video planner.

Return ONLY valid JSON.

Your job is to break a script into logical sections.

Do not generate scenes.
Do not generate captions.
Do not generate visual details.

Return ONLY an outline.
`.trim(),

      userPrompt: `
Script:
${script}

Create a video outline.

Generate ${sectionCount} logical sections.

JSON Schema:

{
  "title": "string",
  "sections": [
    {
      "id": number,
      "title": "string",
      "description": "string"
    }
  ]
}

Rules:

- Return ONLY JSON.
- Every section should represent ONE idea.
- Sections should be sequential.
- Do not generate scenes.
- Do not generate timings.
- Do not generate animations.

- Do not invent facts.
- If the topic is educational or factual,
  only include information that is likely to be correct.
- Avoid making up cultural rules,
- statistics,
- historical events,
  or technical claims.
- Base the outline on the user's script.
- Expand the script logically, but do not introduce unsupported claims.
`.trim(),
    };
  }
}
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
Create a complete video blueprint.

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
  "totalDuration": number,
  "scenes": [
    {
      "id": number,
      "start": number,
      "end": number,
      "text": "string",
      "caption": "string",
      "visualType": "stock_market | tech | ai | warning | news | abstract",
      "animation": "zoom_in | fade | slide_up | glitch",
      "background": "stock_market | tech | ai | warning | news | abstract"
      "layout": "hero | split | news | quote"
    }
  ]
}

Rules:
- background MUST be one of:
  stock_market
  tech
  ai
  warning
  news
  abstract

- visualType MUST be one of:
  stock_market
  tech
  ai
  warning
  news
  abstract

- animation MUST be one of:
  zoom_in
  fade
  slide_up
  glitch

- layout MUST be one of:
  hero
  split
  news
  quote
  
- Do NOT use colors for background.
- background represents an asset key, not a color.
- captions must NOT contain quotation marks.
- Generate exactly the number of scenes needed for the requested video type.
- totalDuration MUST equal the end value of the last scene.
- Every scene must start where the previous scene ended.
- Every scene must continue naturally from the previous one.
- Scene IDs must start from 1.
- start/end must be sequential.
- Every caption should be short.
- Return ONLY JSON.

Script:
${script}
`.trim(),
    };
  }
}
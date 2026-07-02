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

You are an expert AI video planner.
Your job is to transform any script into a professional video storyboard for automated video generation.
Think like a YouTube documentary editor and motion graphics designer.
Create engaging, logical scene sequences.
Every scene should represent one clear visual idea.
Return ONLY valid JSON.

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

- Return ONLY valid JSON.
- Do NOT return Markdown.
- Do NOT explain anything.
- Do NOT wrap JSON in backticks.
- Every required field MUST be present.
- Never return null.
- Never return empty strings.
- Never omit fields.

- For short videos:
  - Generate exactly 5 scenes.

- For long videos:
  - Generate exactly 50 scenes.

- Every scene must continue naturally from the previous scene.
- Every scene must have different text.
- Every caption must be different.
- Every scene must have a different visualSearch whenever possible.

- visualType MUST be one of:
  stock_market
  tech
  ai
  warning
  news
  abstract

- background MUST be one of:
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

- transition MUST be one of:
  cut
  fade
  zoom
  slide

- musicMood must contain ONE word.
- voiceEmotion must contain ONE word.
- visualSearch must describe real stock footage.
- captions must NOT contain quotation marks.
- totalDuration MUST equal the end of the final scene.
- If the script is very short,
  expand it into a complete video while preserving its meaning.
- Never leave any field empty.

Script:
${script}
`.trim(),
    };
  }
}
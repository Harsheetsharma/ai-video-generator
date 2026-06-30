export class PromptBuilder {
    buildScenePlanningPrompt(script: string): string {
        return `
You are a helpful AI assistant.

The user will provide a script.

Your job is to read the script and respond with a short summary.

User Script:
${script}
`;
    }
}
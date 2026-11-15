import { Prompt } from "@/types/prompt";

interface OllamaChatResponse {
    message?: {
        content?: string;
    };
    error?: string;
}

export class OllamaClient {
    async generate(prompt: Prompt): Promise<string> {
        const baseUrl = (process.env.OLLAMA_URL || "http://127.0.0.1:11434")
            .replace(/\/+$/, "");
        const model = process.env.OLLAMA_MODEL;

        if (!model) {
            throw new Error(
                "OLLAMA_MODEL is not configured. Set it to a model available in your local Ollama installation."
            );
        }

        let response: Response;

        try {
            response = await fetch(`${baseUrl}/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                signal: AbortSignal.timeout(120_000),
                body: JSON.stringify({
                    model,
                    stream: false,
                    think: false,
                    messages: [
                        {
                            role: "system",
                            content: prompt.systemPrompt,
                        },
                        {
                            role: "user",
                            content: prompt.userPrompt,
                        },
                    ],
                }),
            });
        } catch (error) {
            if (error instanceof Error && error.name === "TimeoutError") {
                throw new Error("Ollama did not respond within 120 seconds.");
            }

            throw new Error(
                `Could not connect to Ollama at ${baseUrl}. Make sure Ollama is running.`
            );
        }

        if (!response.ok) {
            const details = await response.text().catch(() => "");
            throw new Error(
                `Ollama request failed (${response.status}): ${details || response.statusText}`
            );
        }

        const data = (await response.json()) as OllamaChatResponse;
        const content = data.message?.content;

        if (typeof content !== "string" || !content.trim()) {
            throw new Error(data.error || "Ollama returned an empty or invalid response.");
        }

        return content;
    }
}

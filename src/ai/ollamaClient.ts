import { Prompt } from "@/types/prompt";

export class OllamaClient {
    async generate(prompt: Prompt): Promise<string> {
        const response = await fetch(
            `${process.env.OLLAMA_URL}/api/chat`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: process.env.OLLAMA_MODEL,
                    stream: false,
                    think: false,
                    messages: [
                        {
                            role: "system",
                            content: prompt.systemPrompt
                        },
                        {
                            role: "user",
                            content: prompt.userPrompt,
                        },
                    ],
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to communicate with Ollama");
        }

        const data = await response.json();

        return data.message.content;
    }
}
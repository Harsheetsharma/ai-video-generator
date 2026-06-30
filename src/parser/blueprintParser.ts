export class BlueprintParser {
    parse<T>(raw: string): T {
        try {
            return JSON.parse(raw) as T;
        } catch (error) {
            throw new Error("Failed to parse AI response as JSON.");
        }
    }
}
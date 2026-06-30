export class ResponseSanitizer {
    sanitize(response: string): string {
        return response.trim();
    }
}
import { NextResponse } from "next/server";
import { generateBlueprint } from "@/ai/generateBlueprint";

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();

        if (
            typeof body !== "object" ||
            body === null ||
            !("script" in body) ||
            typeof body.script !== "string" ||
            !body.script.trim() ||
            !("targetType" in body) ||
            (body.targetType !== "short" && body.targetType !== "long")
        ) {
            return NextResponse.json(
                { error: "A non-empty script and a valid targetType (short or long) are required." },
                { status: 400 }
            );
        }

        const blueprint = await generateBlueprint({
            script: body.script.trim(),
            targetType: body.targetType,
        });

        return NextResponse.json({ blueprint });
    } catch (error) {
        console.error("Video generation failed:", error);

        return NextResponse.json(
            { error: "Video generation failed. Check that Ollama is running and configured correctly, then try again." },
            { status: 500 }
        );
    }
}

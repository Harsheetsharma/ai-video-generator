import { NextRequest, NextResponse } from "next/server";
import { OutlineGenerator } from "@/ai/outline/OutlineGenerator";
import { OutlineValidator } from "@/parser/outlineValidator";
import { TargetType } from "@/types/generateVideoRequest";

const generator = new OutlineGenerator();
const validator = new OutlineValidator();

export async function POST(req: NextRequest) {
    try {
        const body: unknown = await req.json();

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
                { error: "A non-empty script and targetType (short or long) are required." },
                { status: 400 }
            );
        }

        const outline = await generator.generate(
            body.script.trim(),
            body.targetType as TargetType
        );
        const validated = validator.validate(outline);

        return NextResponse.json(validated);
    } catch (error) {
        console.error("Outline generation failed:", error);

        return NextResponse.json(
            { error: "Failed to generate outline. Check the Ollama connection and try again." },
            { status: 500 }
        );
    }
}

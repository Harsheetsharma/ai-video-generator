import { NextRequest, NextResponse } from "next/server";
import { OutlineGenerator } from "@/ai/outline/OutlineGenerator";
import { OutlineValidator } from "@/parser/outlineValidator";

const generator = new OutlineGenerator();
const validator = new OutlineValidator();

export async function POST(req: NextRequest) {
    try {
        const { script, targetType } = await req.json();

        const outline = await generator.generate(script, targetType);

        const validated = validator.validate(outline);

        return NextResponse.json(validated);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to generate outline." },
            { status: 500 }
        );
    }
}
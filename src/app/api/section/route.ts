import { NextRequest, NextResponse } from "next/server";
import { SectionPlanner } from "@/ai/planner/SectionPlanner";
import { SectionPlanValidator } from "@/parser/sectionPlanValidator";
import { OutlineSection } from "@/types/outline";

const planner = new SectionPlanner();
const validator = new SectionPlanValidator();

export async function POST(req: NextRequest) {
    try {
        const body: unknown = await req.json();

        if (
            typeof body !== "object" ||
            body === null ||
            !("id" in body) ||
            typeof body.id !== "number" ||
            !Number.isInteger(body.id) ||
            body.id < 1 ||
            !("title" in body) ||
            typeof body.title !== "string" ||
            !body.title.trim() ||
            !("description" in body) ||
            typeof body.description !== "string" ||
            !body.description.trim()
        ) {
            return NextResponse.json(
                { error: "A valid section id, title, and description are required." },
                { status: 400 }
            );
        }

        const section: OutlineSection = {
            id: body.id,
            title: body.title.trim(),
            description: body.description.trim(),
        };
        const plan = await planner.generate(section);
        const validated = validator.validate(plan);

        return NextResponse.json(validated);
    } catch (error) {
        console.error("Section planning failed:", error);

        return NextResponse.json(
            { error: "Failed to generate section. Check the Ollama connection and try again." },
            { status: 500 }
        );
    }
}

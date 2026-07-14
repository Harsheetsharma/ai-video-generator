import { NextRequest, NextResponse } from "next/server";
import { SectionPlanner } from "@/ai/planner/SectionPlanner";
import { SectionPlanValidator } from "@/parser/sectionPlanValidator";

const planner = new SectionPlanner();
const validator = new SectionPlanValidator();

export async function POST(req: NextRequest) {
    try {
        const section = await req.json();

        const plan = await planner.generate(section);

        const validated = validator.validate(plan);

        return NextResponse.json(validated);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to generate section." },
            { status: 500 }
        );
    }
}
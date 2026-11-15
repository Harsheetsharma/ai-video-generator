import { NextRequest, NextResponse } from "next/server";
import { BlueprintMerger } from "@/ai/merger/BlueprintMerger";
import { Outline } from "@/types/outline";
import { SectionPlan } from "@/types/sectionPlan";

const merger = new BlueprintMerger();

export async function POST(req: NextRequest) {
    try {
        const body: unknown = await req.json();

        if (
            typeof body !== "object" ||
            body === null ||
            !("outline" in body) ||
            typeof body.outline !== "object" ||
            body.outline === null ||
            !("title" in body.outline) ||
            typeof body.outline.title !== "string" ||
            !body.outline.title.trim() ||
            !("sections" in body.outline) ||
            !Array.isArray(body.outline.sections) ||
            !("sections" in body) ||
            !Array.isArray(body.sections) ||
            body.sections.length === 0 ||
            !body.sections.every(
                (section) =>
                    typeof section === "object" &&
                    section !== null &&
                    "scenes" in section &&
                    Array.isArray(section.scenes)
            )
        ) {
            return NextResponse.json(
                { error: "A valid outline and a non-empty array of section plans are required." },
                { status: 400 }
            );
        }

        const blueprint = merger.merge(
            body.outline as Outline,
            body.sections as SectionPlan[]
        );

        return NextResponse.json(blueprint);
    } catch (error) {
        console.error("Blueprint merge failed:", error);

        return NextResponse.json(
            { error: "Failed to merge the video blueprint." },
            { status: 500 }
        );
    }
}

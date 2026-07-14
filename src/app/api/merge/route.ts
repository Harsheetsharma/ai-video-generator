import { NextRequest, NextResponse } from "next/server";
import { BlueprintMerger } from "@/ai/merger/BlueprintMerger";

const merger = new BlueprintMerger();

export async function POST(req: NextRequest) {
    const { outline, sections } = await req.json();

    const blueprint = merger.merge(outline, sections);

    return NextResponse.json(blueprint);
}
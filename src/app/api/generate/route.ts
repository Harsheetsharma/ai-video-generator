import { NextResponse } from "next/server";
import { generateBlueprint } from "@/ai/generateBlueprint";

export async function POST(request: Request) {
    const body = await request.json();

    const blueprint = await generateBlueprint(body);

    return NextResponse.json({
        blueprint
    });
}
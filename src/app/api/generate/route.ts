import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    console.log("Received script:", body.script);

    return NextResponse.json({
        status: 200,
        success: true,
        message: "backend is working",
        script: body.script,
    });
}
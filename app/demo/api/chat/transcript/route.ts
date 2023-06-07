import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    formData.append("model", "whisper-1");

    const response = await fetch(`${process.env.OPENAI_API_BASE_URL}/audio/transcriptions`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });

    const json = await response.json();

    return NextResponse.json(json);
}

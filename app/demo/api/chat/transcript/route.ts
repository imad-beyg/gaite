import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const formData: any = await request.formData();

    formData.append("model", "whisper-1")

    const response = await fetch(`${process.env.OPENAI_API_BASE_URL}/audio/transcriptions`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: formData
    });

    const json = await response.json();
    // const json = {
    //     test: 'imad',
    // }
    return NextResponse.json(json);
}

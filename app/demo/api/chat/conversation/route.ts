import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function POST(request: NextRequest) {
    const {message} = await request.json();


    const response = await fetch(`${process.env.API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: message
        }),
    });

    const json = await response.json();

    return NextResponse.json(json);
}

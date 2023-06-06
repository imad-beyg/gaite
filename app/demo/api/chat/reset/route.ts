import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function POST(request: NextRequest) {
    const response = await fetch(`${process.env.API_BASE_URL}/reset`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const json = await response.json();

    return NextResponse.json(json);
}

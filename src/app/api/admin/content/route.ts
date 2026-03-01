import { NextRequest, NextResponse } from 'next/server';
import { getSiteContent, saveSiteContent } from '@/lib/data-service';

export async function GET() {
    const content = await getSiteContent();
    return NextResponse.json(content);
}

export async function POST(req: NextRequest) {
    const content = await req.json();
    await saveSiteContent(content);
    return NextResponse.json({ success: true });
}

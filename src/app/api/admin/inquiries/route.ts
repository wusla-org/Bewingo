import { NextRequest, NextResponse } from 'next/server';
import { getInquiries, saveInquiries } from '@/lib/data-service';

export async function GET() {
    const inquiries = await getInquiries();
    return NextResponse.json(inquiries);
}

export async function PUT(req: NextRequest) {
    const updatedInquiry = await req.json();
    await saveInquiries([updatedInquiry]);
    return NextResponse.json(updatedInquiry);
}

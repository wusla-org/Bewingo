import { NextRequest, NextResponse } from 'next/server';
import { getProducts, saveProducts } from '@/lib/data-service';

export const dynamic = 'force-dynamic';
import { AdminProduct } from '@/lib/admin-data';

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
    const newProduct: AdminProduct = await req.json();

    // The data-service saveProducts uses .upsert() which handles list or object
    await saveProducts([newProduct]);
    return NextResponse.json(newProduct);
}

export async function PUT(req: NextRequest) {
    const updatedProduct: AdminProduct = await req.json();
    await saveProducts([updatedProduct]);
    return NextResponse.json(updatedProduct);
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    // In a real Supabase setup, data-service would have deleteProduct(id)
    // For now, let's add it to data-service.ts or handle here.
    // Let's handle it via supabase directly for speed as it's a specific action.
    const { supabase } = await import('@/lib/supabase');
    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}

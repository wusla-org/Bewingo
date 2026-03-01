import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
    try {
        const { email, role } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Invite the user via email
        // They will receive a link to confirm and set their password
        const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
            data: { role: role || 'admin' },
            // You can specify a redirectTo URL if needed:
            // redirectTo: `${req.nextUrl.origin}/admin/login`
        });

        if (error) throw error;

        return NextResponse.json({ success: true, user: data.user });
    } catch (error: any) {
        console.error('Invitation error:', error);
        return NextResponse.json({
            error: error.message || 'Failed to send invitation. Make sure SUPABASE_SERVICE_ROLE_KEY is correctly set.'
        }, { status: 500 });
    }
}

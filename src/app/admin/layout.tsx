"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isLoginPage = pathname === "/admin/login";

    useEffect(() => {
        async function checkAuth() {
            setLoading(true);
            const { data: { session } } = await supabase.auth.getSession();

            if (!session && !isLoginPage) {
                router.push("/admin/login");
            } else if (session && isLoginPage) {
                router.push("/admin");
            } else {
                setAuthenticated(!!session);
                setLoading(false);
            }
        }

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT' && !isLoginPage) {
                setAuthenticated(false);
                router.push("/admin/login");
            } else if (event === 'SIGNED_IN' && isLoginPage) {
                setAuthenticated(true);
                router.push("/admin");
            }
        });

        return () => subscription.unsubscribe();
    }, [isLoginPage, router]);

    if (loading && !isLoginPage) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-gold animate-spin" />
                <p className="text-gold/50 text-[10px] font-black uppercase tracking-[0.3em]">Validating Session</p>
            </div>
        );
    }

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <main className="min-h-screen bg-black lg:flex">
            <AdminSidebar />
            <section className="flex-1 p-6 lg:p-10 bg-cream/5 min-h-screen relative">
                {/* Decorative background element for industrial feel */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                    {children}
                </div>
            </section>
        </main>
    );
}




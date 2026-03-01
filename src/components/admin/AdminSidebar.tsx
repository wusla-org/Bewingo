"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, MessageSquare, Settings, Layout, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const links = [
    { href: "/admin", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", Icon: Package },
    { href: "/admin/inquiries", label: "Enquiries", Icon: MessageSquare },
    { href: "/admin/content", label: "Content", Icon: Layout },
    { href: "/admin/users", label: "Team", Icon: Settings },
    { href: "/admin/settings", label: "Settings", Icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    }

    return (
        <aside className="w-full lg:w-72 lg:min-h-screen bg-forest text-cream lg:sticky lg:top-0 flex flex-col">
            <div className="px-6 py-6 border-b border-cream/10">
                <Link href="/admin">
                    <Image
                        src="/logo/bewingo SVG-04.svg"
                        alt="BEWINGO Admin"
                        width={280}
                        height={70}
                        className="h-16 w-auto brightness-200"
                    />
                </Link>
            </div>

            <nav className="p-4 flex lg:flex-col gap-2 overflow-x-auto flex-1">
                {links.map(({ href, label, Icon }) => {
                    const active = pathname === href || pathname.startsWith(`${href}/`);
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap transition-colors ${active ? "bg-gold text-forest font-semibold" : "text-cream/75 hover:text-cream hover:bg-cream/10"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 mt-auto border-t border-cream/10">
                <button
                    onClick={handleLogout}
                    className="w-full inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-cream/75 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}

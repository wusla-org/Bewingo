"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingBag, MessageSquare, Settings } from "lucide-react";

const links = [
    { href: "/admin", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", Icon: Package },
    { href: "/admin/orders", label: "Orders", Icon: ShoppingBag },
    { href: "/admin/inquiries", label: "Inquiries", Icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", Icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full lg:w-72 lg:min-h-screen bg-forest text-cream lg:sticky lg:top-0">
            <div className="px-6 py-6 border-b border-cream/10">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">BEWINGO</p>
                <h1 className="text-xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Admin Panel
                </h1>
            </div>

            <nav className="p-4 flex lg:flex-col gap-2 overflow-x-auto">
                {links.map(({ href, label, Icon }) => {
                    const active = pathname === href || pathname.startsWith(`${href}/`);
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                                active ? "bg-gold text-forest font-semibold" : "text-cream/75 hover:text-cream hover:bg-cream/10"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}




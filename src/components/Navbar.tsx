"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { label: "Collection", href: "/shop" },
        { label: "Our Story", href: "/our-story" },
        { label: "Sourcing", href: "/sourcing" },
        { label: "Contact", href: "/contact" },
    ];

    if (pathname.startsWith("/admin")) {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-forest/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Leaf className="text-gold w-5 h-5" />
                        <span className="text-xl font-bold tracking-tight text-forest" style={{ fontFamily: "'Playfair Display', serif" }}>
                            BEWINGO
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-xs font-semibold tracking-widest uppercase text-muted hover:text-gold transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block text-right">
                            <p className="text-[10px] uppercase tracking-widest text-muted">Direct Support</p>
                            <p className="text-xs font-bold text-forest">+91 7012 228 978</p>
                        </div>
                        <Link
                            href="/shop"
                            className="flex items-center gap-2 bg-forest text-cream px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald transition-colors duration-200"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Cart (0)
                        </Link>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-forest p-1"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-forest/5 py-4 flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-xs font-semibold tracking-widest uppercase text-muted hover:text-gold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}




"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: "Export Catalog", href: "/shop" },
        { label: "Our Story", href: "/our-story" },
        { label: "Sourcing", href: "/sourcing" },
        { label: "Contact", href: "/contact" },
    ];

    if (pathname.startsWith("/admin")) {
        return null;
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo/bewingo SVG-04.svg"
                                alt="BEWINGO Logo"
                                width={240}
                                height={60}
                                className="h-16 md:h-20 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Right: Links & Actions */}
                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-8">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth hover:text-tan transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-earth p-1"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-md mt-4 rounded-lg"
                        >
                            <div className="py-6 flex flex-col items-center gap-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-xs font-bold uppercase tracking-widest text-earth hover:text-tan transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

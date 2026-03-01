"use client";

import { useState, useEffect } from "react";
import { Leaf, Handshake, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { initialSiteContent } from "@/lib/admin-data";

const iconMap = { Leaf, Handshake, ShieldCheck };

export default function SourcingPage() {
    const [content, setContent] = useState(initialSiteContent.sourcing);

    useEffect(() => {
        async function fetchContent() {
            try {
                const res = await fetch('/api/admin/content');
                if (res.ok) {
                    const data = await res.json();
                    if (data.sourcing) setContent(data.sourcing);
                }
            } catch (error) {
                console.error("Failed to fetch site content:", error);
            }
        }
        fetchContent();
    }, []);

    return (
        <>
            <main className="pt-20 bg-cream min-h-screen">
                <section className="bg-forest text-cream py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">{content.hero.badge}</p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{content.hero.title}</h1>
                        <p className="text-cream/75 text-lg md:text-xl max-w-3xl leading-relaxed">
                            {content.hero.description}
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {content.process.map((item) => {
                            const Icon = (iconMap as any)[item.icon] || Leaf;
                            return (
                                <article key={item.title} className="rounded-xl border border-forest/10 bg-white p-5">
                                    <Icon className="w-6 h-6 text-gold mb-3" />
                                    <h2 className="text-lg font-bold text-forest mb-2">{item.title}</h2>
                                    <p className="text-sm text-muted">{item.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="py-10">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="rounded-2xl border border-forest/10 bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-forest mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{content.banner.title}</h3>
                                <p className="text-muted text-base max-w-xl">{content.banner.text}</p>
                            </div>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gold hover:text-forest transition-all shrink-0">
                                Contact Trade Desk <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

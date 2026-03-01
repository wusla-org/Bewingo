"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Users, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import { initialSiteContent } from "@/lib/admin-data";

const iconMap = { Leaf, Users, ShieldCheck };

export default function OurStoryPage() {
    const [content, setContent] = useState(initialSiteContent.story);

    useEffect(() => {
        async function fetchContent() {
            try {
                const res = await fetch('/api/admin/content', { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    if (data.story) setContent(data.story);
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
                <section className="bg-forest text-cream py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{content.hero.badge}</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-5">{content.hero.title}</h1>
                        <p className="text-cream/75 text-lg max-w-2xl">
                            {content.hero.description}
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Our Mission</p>
                            <h2 className="text-4xl font-bold text-forest mb-5">{content.mission.title}</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                {content.mission.text1}
                            </p>
                            <p className="text-muted leading-relaxed mb-7">
                                {content.mission.text2}
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-forest text-cream text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded-lg hover:bg-emerald transition-colors"
                            >
                                Explore Products <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-forest/10 bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1200"
                                alt="BEWINGO journey"
                                className="w-full h-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 border-y border-forest/10 bg-white">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {content.cards.map((item) => {
                            const Icon = (iconMap as any)[item.icon] || Leaf;
                            return (
                                <article key={item.title} className="rounded-xl border border-forest/10 p-5">
                                    <Icon className="w-6 h-6 text-gold mb-3" />
                                    <h3 className="text-lg font-bold text-forest mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted">{item.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

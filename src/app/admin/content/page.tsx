"use client";

import { useState, useEffect } from "react";
import { initialSiteContent, type SiteContent } from "@/lib/admin-data";
import { Save, RefreshCcw, Layout, FileText, Globe, LifeBuoy, Info } from "lucide-react";

export default function ContentManagementPage() {
    const [content, setContent] = useState<SiteContent>(initialSiteContent);
    const [activeTab, setActiveTab] = useState<"home" | "story" | "sourcing" | "global">("home");
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("bewingo_site_content");
        if (saved) {
            try {
                setContent(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved site content", e);
            }
        }
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        localStorage.setItem("bewingo_site_content", JSON.stringify(content));
        setTimeout(() => {
            setIsSaving(false);
            setMessage("All changes saved successfully! Refresh the site to see updates.");
            setTimeout(() => setMessage(""), 3000);
        }, 800);
    };

    const handleReset = () => {
        if (confirm("Reset everything to original content? This cannot be undone.")) {
            setContent(initialSiteContent);
        }
    };

    const tabs = [
        { id: "home", label: "Home", Icon: Layout },
        { id: "story", label: "Our Story", Icon: Info },
        { id: "sourcing", label: "Sourcing", Icon: LifeBuoy },
        { id: "global", label: "Global", Icon: Globe },
    ];

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-forest">Full Site CMS</h2>
                    <p className="text-sm text-muted mt-1">Manage content across every page of your export portal.</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={handleReset} className="inline-flex items-center gap-2 px-4 py-2 border border-forest/20 text-forest rounded-lg text-sm font-semibold hover:bg-forest/5 transition-colors">
                        <RefreshCcw className="w-4 h-4" /> Reset
                    </button>
                    <button onClick={handleSave} disabled={isSaving} className="inline-flex items-center gap-2 px-6 py-2 bg-gold text-forest rounded-lg text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
                        <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </header>

            {message && (
                <div className="bg-sage/20 text-sage px-4 py-3 rounded-lg border border-sage/30 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                    {message}
                </div>
            )}

            {/* Tabs */}
            <nav className="flex gap-2 p-1 bg-cream/50 rounded-xl w-fit border border-forest/5">
                {tabs.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id as any)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === id ? "bg-white text-forest shadow-sm ring-1 ring-forest/5" : "text-muted hover:text-forest"
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                    </button>
                ))}
            </nav>

            <div className="grid grid-cols-1 gap-8">
                {/* --- HOME TAB --- */}
                {activeTab === "home" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Home Hero</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Badge</label>
                                    <input type="text" value={content.home.hero.badge} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, badge: e.target.value } } })} className="cms-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Title</label>
                                    <input type="text" value={content.home.hero.title} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Subtitle</label>
                                    <textarea rows={3} value={content.home.hero.subtitle} onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, subtitle: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Home About</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Title</label>
                                    <input type="text" value={content.home.about.title} onChange={(e) => setContent({ ...content, home: { ...content.home, about: { ...content.home.about, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Story 1</label>
                                    <textarea rows={4} value={content.home.about.description1} onChange={(e) => setContent({ ...content, home: { ...content.home, about: { ...content.home.about, description1: e.target.value } } })} className="cms-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Story 2</label>
                                    <textarea rows={4} value={content.home.about.description2} onChange={(e) => setContent({ ...content, home: { ...content.home, about: { ...content.home.about, description2: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- STORY TAB --- */}
                {activeTab === "story" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Story Hero</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Badge</label>
                                    <input type="text" value={content.story.hero.badge} onChange={(e) => setContent({ ...content, story: { ...content.story, hero: { ...content.story.hero, badge: e.target.value } } })} className="cms-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Title</label>
                                    <input type="text" value={content.story.hero.title} onChange={(e) => setContent({ ...content, story: { ...content.story, hero: { ...content.story.hero, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Description</label>
                                    <textarea rows={3} value={content.story.hero.description} onChange={(e) => setContent({ ...content, story: { ...content.story, hero: { ...content.story.hero, description: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Mission & Values</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Mission Title</label>
                                    <input type="text" value={content.story.mission.title} onChange={(e) => setContent({ ...content, story: { ...content.story, mission: { ...content.story.mission, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Text 1</label>
                                    <textarea rows={3} value={content.story.mission.text1} onChange={(e) => setContent({ ...content, story: { ...content.story, mission: { ...content.story.mission, text1: e.target.value } } })} className="cms-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Text 2</label>
                                    <textarea rows={3} value={content.story.mission.text2} onChange={(e) => setContent({ ...content, story: { ...content.story, mission: { ...content.story.mission, text2: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- SOURCING TAB --- */}
                {activeTab === "sourcing" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Sourcing Hero</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Badge</label>
                                    <input type="text" value={content.sourcing.hero.badge} onChange={(e) => setContent({ ...content, sourcing: { ...content.sourcing, hero: { ...content.sourcing.hero, badge: e.target.value } } })} className="cms-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Title</label>
                                    <input type="text" value={content.sourcing.hero.title} onChange={(e) => setContent({ ...content, sourcing: { ...content.sourcing, hero: { ...content.sourcing.hero, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Description</label>
                                    <textarea rows={3} value={content.sourcing.hero.description} onChange={(e) => setContent({ ...content, sourcing: { ...content.sourcing, hero: { ...content.sourcing.hero, description: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Bulk Banner</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Title</label>
                                    <input type="text" value={content.sourcing.banner.title} onChange={(e) => setContent({ ...content, sourcing: { ...content.sourcing, banner: { ...content.sourcing.banner, title: e.target.value } } })} className="cms-input font-bold" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Description</label>
                                    <textarea rows={3} value={content.sourcing.banner.text} onChange={(e) => setContent({ ...content, sourcing: { ...content.sourcing, banner: { ...content.sourcing.banner, text: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- GLOBAL TAB --- */}
                {activeTab === "global" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <section className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-forest mb-6">Footer Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase text-muted mb-1.5">Company Description</label>
                                    <textarea rows={4} value={content.global.footer.companyDesc} onChange={(e) => setContent({ ...content, global: { ...content.global, footer: { companyDesc: e.target.value } } })} className="cms-input" />
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>

            <style jsx>{`
                .cms-input {
                    @apply w-full px-4 py-2.5 bg-cream/30 border border-forest/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tan/50 leading-relaxed;
                }
            `}</style>
        </div>
    );
}

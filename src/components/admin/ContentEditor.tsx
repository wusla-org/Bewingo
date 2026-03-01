"use client";

import { useEffect, useState } from "react";
import { SiteContent } from "@/lib/admin-data";

export default function ContentEditor() {
    const [content, setContent] = useState<SiteContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchContent();
    }, []);

    async function fetchContent() {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/content', { cache: 'no-store' });
            const data = await res.json();
            setContent(data);
        } catch (error) {
            console.error("Failed to fetch content:", error);
        } finally {
            setLoading(false);
        }
    }

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        if (!content) return;
        setSaving(true);
        try {
            const res = await fetch('/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content),
            });
            if (res.ok) {
                alert("Content saved successfully!");
            }
        } catch (error) {
            console.error("Failed to save content:", error);
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <div className="p-8 text-center text-muted">Loading content...</div>;
    if (!content) return <div className="p-8 text-center text-red-500">Failed to load content.</div>;

    return (
        <form className="space-y-8" onSubmit={handleSave}>
            <header className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-forest">Site Content Editor</h2>
                <button
                    type="submit"
                    disabled={saving}
                    className="bg-forest text-cream px-6 py-2 rounded-lg font-bold hover:bg-emerald transition-colors disabled:opacity-50"
                >
                    {saving ? 'Saving...' : 'Save All Changes'}
                </button>
            </header>

            {/* Hero Section */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Home Hero Section</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Hero Badge</label>
                        <input
                            value={content.home.hero.badge}
                            onChange={(e) => setContent({
                                ...content,
                                home: { ...content.home, hero: { ...content.home.hero, badge: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">CTA Text</label>
                        <input
                            value={content.home.hero.ctaText}
                            onChange={(e) => setContent({
                                ...content,
                                home: { ...content.home, hero: { ...content.home.hero, ctaText: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Hero Title</label>
                    <input
                        value={content.home.hero.title}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, hero: { ...content.home.hero, title: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors font-bold"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Hero Subtitle</label>
                    <textarea
                        rows={2}
                        value={content.home.hero.subtitle}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, hero: { ...content.home.hero, subtitle: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">About Section</h3>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">About Title</label>
                    <input
                        value={content.home.about.title}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, about: { ...content.home.about, title: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors font-bold"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Description 1</label>
                    <textarea
                        rows={3}
                        value={content.home.about.description1}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, about: { ...content.home.about, description1: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Description 2</label>
                    <textarea
                        rows={3}
                        value={content.home.about.description2}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, about: { ...content.home.about, description2: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                    />
                </div>
            </section>

            {/* Certifications Marquee */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Certifications Marquee</h3>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Section Title</label>
                    <input
                        value={content.home.certifications.title}
                        onChange={(e) => setContent({
                            ...content,
                            home: { ...content.home, certifications: { ...content.home.certifications, title: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                    />
                </div>
            </section>

            {/* Quality Journey */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Supply Chain Journey (Home)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Journey Title</label>
                        <input
                            value={content.home.journey.title}
                            onChange={(e) => setContent({
                                ...content,
                                home: { ...content.home, journey: { ...content.home.journey, title: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Journey Subtitle</label>
                        <input
                            value={content.home.journey.subtitle}
                            onChange={(e) => setContent({
                                ...content,
                                home: { ...content.home, journey: { ...content.home.journey, subtitle: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Sourcing Page */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Sourcing Page Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Sourcing Badge</label>
                        <input
                            value={content.sourcing.hero.badge}
                            onChange={(e) => setContent({
                                ...content,
                                sourcing: { ...content.sourcing, hero: { ...content.sourcing.hero, badge: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Sourcing Hero Title</label>
                        <input
                            value={content.sourcing.hero.title}
                            onChange={(e) => setContent({
                                ...content,
                                sourcing: { ...content.sourcing, hero: { ...content.sourcing.hero, title: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Global / Footer */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Global / Footer</h3>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Company Description (Footer)</label>
                    <textarea
                        rows={3}
                        value={content.global.footer.companyDesc}
                        onChange={(e) => setContent({
                            ...content,
                            global: { ...content.global, footer: { ...content.global.footer, companyDesc: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                    />
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Public Email</label>
                        <input
                            value={content.global.contactInfo.email}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, contactInfo: { ...content.global.contactInfo, email: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Phone Number</label>
                        <input
                            value={content.global.contactInfo.phone}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, contactInfo: { ...content.global.contactInfo, phone: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">WhatsApp Number</label>
                        <input
                            value={content.global.contactInfo.whatsapp}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, contactInfo: { ...content.global.contactInfo, whatsapp: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Office Address</label>
                        <input
                            value={content.global.contactInfo.address}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, contactInfo: { ...content.global.contactInfo, address: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Instagram URL</label>
                        <input
                            value={content.global.socialLinks.instagram}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, socialLinks: { ...content.global.socialLinks, instagram: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Facebook URL</label>
                        <input
                            value={content.global.socialLinks.facebook}
                            onChange={(e) => setContent({
                                ...content,
                                global: { ...content.global, socialLinks: { ...content.global.socialLinks, facebook: e.target.value } }
                            })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story Page */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-forest border-b border-forest/10 pb-2">Our Story Page Content</h3>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Mission Title</label>
                    <input
                        value={content.story.mission.title}
                        onChange={(e) => setContent({
                            ...content,
                            story: { ...content.story, mission: { ...content.story.mission, title: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted">Mission Text 1</label>
                    <textarea
                        rows={3}
                        value={content.story.mission.text1}
                        onChange={(e) => setContent({
                            ...content,
                            story: { ...content.story, mission: { ...content.story.mission, text1: e.target.value } }
                        })}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                    />
                </div>
            </section>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={saving}
                    className="bg-forest text-cream px-8 py-3 rounded-lg font-bold hover:bg-emerald transition-colors shadow-lg disabled:opacity-50"
                >
                    {saving ? 'Saving...' : 'Save All Changes'}
                </button>
            </div>
        </form>
    );
}

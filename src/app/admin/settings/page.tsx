"use client";

import { useEffect, useState } from "react";
import { SiteContent } from "@/lib/admin-data";
import { Loader2, Save } from "lucide-react";

export default function AdminSettingsPage() {
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
            console.error("Failed to fetch settings:", error);
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
                alert("Settings saved successfully!");
            }
        } catch (error) {
            console.error("Failed to save settings:", error);
            alert("Failed to save settings. Please try again.");
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-8 h-8 text-forest animate-spin" />
                <p className="text-forest/50 text-xs font-bold uppercase tracking-widest">Loading Settings</p>
            </div>
        );
    }

    if (!content) {
        return (
            <div className="p-8 text-center text-red-500 bg-red-50 rounded-xl border border-red-100">
                Failed to load settings. Please refresh the page.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-forest">Settings</h2>
                    <p className="text-sm text-muted mt-1">Company profile and website contact preferences.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 bg-forest text-cream px-6 py-2.5 rounded-lg font-bold hover:bg-emerald transition-all shadow-lg hover:shadow-emerald/20 disabled:opacity-50 active:scale-95"
                >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {saving ? 'Saving...' : 'Save Settings'}
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white border border-forest/10 rounded-2xl p-8 space-y-6 shadow-sm">
                        <div className="flex items-center gap-3 border-b border-forest/5 pb-4 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-tan/10 flex items-center justify-center text-tan">
                                <Save className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-forest uppercase tracking-widest text-xs">Contact Information</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">Support Email Address</label>
                                <input
                                    type="email"
                                    value={content.global.contactInfo.email}
                                    onChange={(e) => setContent({
                                        ...content,
                                        global: {
                                            ...content.global,
                                            contactInfo: { ...content.global.contactInfo, email: e.target.value }
                                        }
                                    })}
                                    className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium"
                                    placeholder="e.g. support@bewingo.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">Support Phone Number</label>
                                <input
                                    type="text"
                                    value={content.global.contactInfo.phone}
                                    onChange={(e) => setContent({
                                        ...content,
                                        global: {
                                            ...content.global,
                                            contactInfo: { ...content.global.contactInfo, phone: e.target.value }
                                        }
                                    })}
                                    className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium"
                                    placeholder="+91 XXXX XXX XXX"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">WhatsApp Business Number</label>
                            <input
                                type="text"
                                value={content.global.contactInfo.whatsapp}
                                onChange={(e) => setContent({
                                    ...content,
                                    global: {
                                        ...content.global,
                                        contactInfo: { ...content.global.contactInfo, whatsapp: e.target.value }
                                    }
                                })}
                                className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium"
                                placeholder="+91 XXXX XXX XXX"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">Registered Office Address</label>
                            <textarea
                                rows={3}
                                value={content.global.contactInfo.address}
                                onChange={(e) => setContent({
                                    ...content,
                                    global: {
                                        ...content.global,
                                        contactInfo: { ...content.global.contactInfo, address: e.target.value }
                                    }
                                })}
                                className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium resize-none"
                                placeholder="Full business address..."
                            />
                        </div>
                    </section>

                    <section className="bg-white border border-forest/10 rounded-2xl p-8 space-y-6 shadow-sm">
                        <div className="flex items-center gap-3 border-b border-forest/5 pb-4 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-tan/10 flex items-center justify-center text-tan">
                                <Save className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-forest uppercase tracking-widest text-xs">Social Presence</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">Instagram Profile URL</label>
                                <input
                                    type="text"
                                    value={content.global.socialLinks.instagram}
                                    onChange={(e) => setContent({
                                        ...content,
                                        global: {
                                            ...content.global,
                                            socialLinks: { ...content.global.socialLinks, instagram: e.target.value }
                                        }
                                    })}
                                    className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/40">Facebook Page URL</label>
                                <input
                                    type="text"
                                    value={content.global.socialLinks.facebook}
                                    onChange={(e) => setContent({
                                        ...content,
                                        global: {
                                            ...content.global,
                                            socialLinks: { ...content.global.socialLinks, facebook: e.target.value }
                                        }
                                    })}
                                    className="w-full border border-forest/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all font-medium"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="bg-forest text-cream rounded-2xl p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16" />
                        <h3 className="text-xl font-black italic uppercase leading-tight mb-4 tracking-tighter">Live Preview</h3>
                        <p className="text-cream/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">How customers see you</p>

                        <div className="space-y-6">
                            <div className="opacity-80">
                                <p className="text-[9px] font-black text-tan uppercase tracking-widest mb-1">Email</p>
                                <p className="text-sm font-medium">{content.global.contactInfo.email}</p>
                            </div>
                            <div className="opacity-80">
                                <p className="text-[9px] font-black text-tan uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-sm font-medium">{content.global.contactInfo.phone}</p>
                            </div>
                            <div className="opacity-80">
                                <p className="text-[9px] font-black text-tan uppercase tracking-widest mb-1">Location</p>
                                <p className="text-[11px] leading-relaxed line-clamp-2">{content.global.contactInfo.address}</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-tan/5 border border-tan/20 rounded-2xl p-6">
                        <p className="text-[10px] font-bold text-tan/60 uppercase tracking-[0.1em] leading-relaxed">
                            Changes saved here are applied globally across the landing page, footer, and contact sections.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}




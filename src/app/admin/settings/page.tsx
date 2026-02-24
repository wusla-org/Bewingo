export const metadata = {
    title: "Admin Settings | BEWINGO",
};

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Settings</h2>
                <p className="text-sm text-muted mt-1">Company profile and website preferences for admin users.</p>
            </header>

            <section className="bg-white border border-forest/10 rounded-xl p-6 space-y-5 max-w-3xl">
                <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">Company Name</label>
                    <input
                        type="text"
                        defaultValue="BEWINGO Exports"
                        className="w-full border border-forest/15 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-gold"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">Support Email</label>
                    <input
                        type="email"
                        defaultValue="hello@bewingo.com"
                        className="w-full border border-forest/15 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-gold"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">Support Phone</label>
                    <input
                        type="text"
                        defaultValue="+91 7012 228 978"
                        className="w-full border border-forest/15 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-gold"
                    />
                </div>
                <button className="bg-forest text-cream text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-sage transition-colors">
                    Save Changes
                </button>
            </section>
        </div>
    );
}




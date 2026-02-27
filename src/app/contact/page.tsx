import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact | BEWINGO",
    description: "Contact BEWINGO for product inquiries, sourcing support, and bulk orders.",
};

export default function ContactPage() {
    return (
        <>
            <main className="pt-20 bg-cream min-h-screen">
                <section className="bg-forest text-cream py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <nav className="flex items-center gap-2 text-[10px] text-cream/30 mb-8 uppercase tracking-[0.3em] font-bold">
                            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gold">Trade Inquiry</span>
                        </nav>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Trade Inquiry Desk
                        </h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                            Connect with our procurement and logistics desk. Share your technical requirements for custom export lot sampling and global freight quotes.
                        </p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 border border-forest/10 bg-white p-10 space-y-8 rounded-sm shadow-sm">
                            <div>
                                <h3 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">Direct Contact</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Global Trade Desk</p>
                                        <p className="text-forest font-bold text-lg">+91 7012 228 978</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Inquiry Email</p>
                                        <p className="text-forest font-bold text-lg">hello@bewingo.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 border-t border-forest/5">
                                <h3 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">Export Office</h3>
                                <p className="text-forest font-bold">Kerala, India</p>
                                <p className="text-muted text-xs mt-2 leading-relaxed">Proximity to Kochi International Port & ICTT Vallarpadam.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 border border-forest/10 bg-white p-10 rounded-sm shadow-sm">
                            <h3 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">Technical RFQ Form</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Full Name</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Company Name</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="Global Spices LLC" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Business Email</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="trade@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Mobile/WhatsApp</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="+1 234 567 890" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Order Volume (Kg/MT)</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. 5 MT" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Port of Destination</label>
                                        <input className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. Jebel Ali" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Incoterms</label>
                                        <select className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors appearance-none">
                                            <option value="CIF">CIF</option>
                                            <option value="FOB">FOB</option>
                                            <option value="EXW">EXW</option>
                                            <option value="CFR">CFR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-black tracking-widest text-forest/50">Technical Specifications & Requirements</label>
                                    <textarea
                                        rows={4}
                                        className="w-full border-b border-forest/15 bg-transparent py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                                        placeholder="Specify moisture levels, grade (e.g. TGSEB), and any custom packaging needs..."
                                    />
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="bg-forest text-cream text-[10px] font-black uppercase tracking-[0.3em] px-10 py-5 hover:bg-emerald transition-all shadow-lg active:scale-95">
                                        Submit RFQ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

import Link from "next/link";
import { ArrowLeft, Leaf, Truck, ShieldCheck } from "lucide-react";

export default function ProductDetail() {
    const product = {
        id: 1,
        name: "Tellicherry Black Pepper",
        category: "The Kerala Collection",
        price: "Rs. 249",
        originalPrice: "Rs. 299",
        description:
            "Known as the King of Spices, our Tellicherry Black Pepper is harvested at peak maturity from the high ranges of Wayanad. These bold peppercorns are sun-dried to lock in aroma and potency.",
        details: [
            { label: "Origin", value: "Wayanad, Kerala" },
            { label: "Harvest", value: "January 2026" },
            { label: "Aroma", value: "Bold, Citrusy, Woody" },
            { label: "Processing", value: "Traditional Sun-Dry" },
        ],
        benefits: [
            "100% Organic & Single-Origin",
            "Sustainably Farmed & Direct Trade",
            "Hand-Picked for Quality Control",
            "No Artificial Preservatives",
        ],
        image: "https://images.unsplash.com/photo-1599307734110-d737397686a3?auto=format&fit=crop&q=80&w=1200",
    };

    return (
        <main className="bg-cream min-h-screen pt-28 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-gold mb-10 transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Catalog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <div className="rounded-sm overflow-hidden border border-forest/5 bg-white shadow-sm">
                            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-sm border border-forest/5 bg-white opacity-50" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-forest/5 rounded-sm p-8 md:p-12 shadow-sm">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-4">{product.category} · Export Grade</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-forest leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="inline-block px-3 py-1 bg-forest text-gold text-[9px] font-black uppercase tracking-widest">In Stock: 5 MT+</span>
                            <span className="inline-block px-3 py-1 bg-cream text-forest text-[9px] font-black uppercase tracking-widest border border-forest/5">Kochi Hub</span>
                        </div>

                        <p className="text-muted text-lg leading-relaxed mb-10">{product.description}</p>

                        <div className="grid grid-cols-1 gap-0 border border-forest/5 rounded-sm overflow-hidden mb-10 divide-y divide-forest/5">
                            {[
                                { label: "Technical Grade", value: "TGSEB / Bold 8mm" },
                                { label: "Moisture Content", value: "< 12.5% Max" },
                                { label: "Admixture", value: "< 0.5% Max" },
                                { label: "Packing Status", value: "Available in 25kg/50kg Jute/PP" },
                                { label: "Certifications", value: "APEDA, Spices Board, ISO" },
                                ...product.details
                            ].map((detail) => (
                                <div key={detail.label} className="grid grid-cols-2 px-6 py-4 bg-cream/20">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-forest/40">{detail.label}</span>
                                    <span className="text-sm font-bold text-forest text-right">{detail.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 mb-10">
                            <Link
                                href="/contact"
                                className="flex-1 bg-forest text-gold text-xs font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-forest/90 transition-all text-center shadow-lg hover:-translate-y-0.5"
                            >
                                Request Commercial Quote
                            </Link>
                            <button className="flex-1 border-2 border-forest/5 text-forest text-[10px] font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:border-gold hover:text-gold transition-all">
                                Download Data Sheet (PDF)
                            </button>
                        </div>

                        <div className="space-y-4 mb-10">
                            <h3 className="text-xs font-black text-forest uppercase tracking-[0.2em] border-b border-forest/5 pb-2">Export Standards</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {product.benefits.map((benefit) => (
                                    <li key={benefit} className="text-[11px] font-bold text-muted uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-gold" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-3 gap-3 border-t border-forest/10 pt-6">
                            {[
                                { Icon: Leaf, label: "Organic" },
                                { Icon: Truck, label: "Direct Source" },
                                { Icon: ShieldCheck, label: "Ethical Trade" },
                            ].map(({ Icon, label }) => (
                                <div key={label} className="text-center">
                                    <Icon className="w-5 h-5 text-gold mx-auto mb-1" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}



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
                <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-forest mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to shop
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden border border-forest/10 bg-white">
                            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-lg border border-forest/10 bg-white" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-forest/10 rounded-2xl p-6 md:p-8">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">{product.category}</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-4">{product.name}</h1>

                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-3xl font-bold text-forest">{product.price}</span>
                            <span className="text-lg text-muted/60 line-through">{product.originalPrice}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">20% Off</span>
                        </div>

                        <p className="text-muted leading-relaxed mb-8">{product.description}</p>

                        <div className="grid grid-cols-2 gap-4 border-y border-forest/10 py-6 mb-8">
                            {product.details.map((detail) => (
                                <div key={detail.label}>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">{detail.label}</p>
                                    <p className="text-sm font-semibold text-forest">{detail.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <button className="flex-1 bg-forest text-cream text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg hover:bg-sage transition-colors">
                                Add to Cart
                            </button>
                            <button className="flex-1 border border-forest/20 text-forest text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg hover:border-gold hover:text-gold transition-colors">
                                Request Bulk Quote
                            </button>
                        </div>

                        <div className="space-y-3 mb-8">
                            <h3 className="text-sm font-bold text-forest uppercase tracking-widest">BEWINGO Standards</h3>
                            <ul className="space-y-2">
                                {product.benefits.map((benefit) => (
                                    <li key={benefit} className="text-sm text-muted flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
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



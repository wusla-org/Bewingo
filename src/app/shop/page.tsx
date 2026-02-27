import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
    {
        id: 1,
        title: "Black Pepper Corn",
        description: "Bold & Aromatic",
        origin: "Wayanad, Kerala",
        grade: "TGSEB / FAQ",
        moq: "500 kg",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 2,
        title: "Cardamom Premium 8mm",
        description: "Big Pods, Bold Aroma",
        origin: "Idukki, Kerala",
        grade: "8mm Bold",
        moq: "100 kg",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 3,
        title: "Cashew W180",
        description: "Naturally Crunchy",
        origin: "Kannur, Kerala",
        grade: "W180 (Jumbo)",
        moq: "1 MT",
        image: "https://images.unsplash.com/photo-1599599810694-ec3ac9c34b11?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 4,
        title: "Wild Forest Honey",
        description: "Raw & Unfiltered",
        origin: "Silent Valley, Kerala",
        grade: "Raw / Unfiltered",
        moq: "200 kg",
        image: "https://images.unsplash.com/photo-1589182337358-2c63475155bb?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 5,
        title: "Turmeric Finger / Powder",
        description: "Golden Goodness",
        origin: "Erode, Kerala",
        grade: "High Curcumin (5–7%)",
        moq: "500 kg",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 6,
        title: "Cloves Premium",
        description: "Warm & Spicy",
        origin: "Thrissur, Kerala",
        grade: "Hand-Selected Whole",
        moq: "200 kg",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 7,
        title: "Cinnamon Sticks",
        description: "Sweet & Aromatic",
        origin: "Kottayam, Kerala",
        grade: "True Ceylon Type",
        moq: "200 kg",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
    {
        id: 8,
        title: "Cumin Seeds",
        description: "Earthy Flavor",
        origin: "Rajasthan / Gujarat",
        grade: "Sortex Cleaned",
        moq: "500 kg",
        image: "https://images.unsplash.com/photo-1585520191565-72d312ce0c90?auto=format&fit=crop&q=80&w=500",
        badge: "Export Grade",
    },
];

const filterCategories = ["All Products", "Signature Spices", "Artisanal Honey", "Dry Fruits"];

export const metadata = {
    title: "Export Products | BEWINGO - Kerala Spice Export Company",
    description: "Browse BEWINGO's full export range of Kerala spices, wild honey, and dry fruits. Get MOQ details and send an enquiry for custom export quotes.",
};

export default function ShopPage() {
    return (
        <>
            <main className="pt-20 min-h-screen bg-cream">
                {/* Page Header */}
                <section className="bg-forest text-cream py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <nav className="flex items-center gap-2 text-[10px] text-cream/30 mb-8 uppercase tracking-[0.3em] font-bold">
                            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gold">Digital Catalog</span>
                        </nav>
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Digital Catalog
                        </h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                            Browse our full range of industrial-grade Kerala agro-products. All lots are certified, traceable, and ready for global bulk export.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-forest/5">
                            <div className="flex flex-wrap gap-2">
                                {filterCategories.map((cat, i) => (
                                    <button
                                        key={cat}
                                        className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${i === 0
                                            ? "bg-forest text-cream border-forest"
                                            : "border-forest/10 text-muted hover:border-gold hover:text-gold"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <SlidersHorizontal className="w-4 h-4 text-muted" />
                                <select className="text-xs font-semibold uppercase tracking-wider text-muted bg-transparent border-none outline-none cursor-pointer">
                                    <option>Sort: Featured</option>
                                    <option>A–Z</option>
                                    <option>Most Enquired</option>
                                </select>
                            </div>
                        </div>

                        <p className="text-xs text-muted uppercase tracking-widest mb-8">
                            <span className="font-bold text-forest">{products.length}</span> Export Products Available
                        </p>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-forest text-center text-cream">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Trade Desk</p>
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Bespoke Sourcing Requirements?
                        </h2>
                        <p className="text-cream/60 mb-10 text-lg max-w-2xl mx-auto">Our procurement team can source specific grades or regional varieties beyond this catalog. Share your requirements for a customs lot-sampled quote.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gold text-forest text-xs font-black uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:-translate-y-1"
                        >
                            Open Trade Inquiry <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

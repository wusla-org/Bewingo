import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
    { id: 1, title: "Black Pepper Corn 100g", originalPrice: "Rs. 400.00", currentPrice: "Rs. 199.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Bold & Aromatic" },
    { id: 2, title: "Premium Cardamom 8mm 100g", originalPrice: "Rs. 550.00", currentPrice: "Rs. 499.00", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Big Pods, Bold Aroma" },
    { id: 3, title: "Premium Cashew W180", originalPrice: "Rs. 399.00", currentPrice: "Rs. 367.00", image: "https://images.unsplash.com/photo-1599599810694-ec3ac9c34b11?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Naturally Crunchy" },
    { id: 4, title: "Wild Forest Honey 500g", originalPrice: "Rs. 650.00", currentPrice: "Rs. 549.00", image: "https://images.unsplash.com/photo-1589182337358-2c63475155bb?auto=format&fit=crop&q=80&w=500", badge: "Best Seller", description: "Raw & Unfiltered" },
    { id: 5, title: "Turmeric Powder 100g", originalPrice: "Rs. 300.00", currentPrice: "Rs. 249.00", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Golden Goodness" },
    { id: 6, title: "Cloves Premium 50g", originalPrice: "Rs. 350.00", currentPrice: "Rs. 299.00", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Warm & Spicy" },
    { id: 7, title: "Cinnamon Sticks 50g", originalPrice: "Rs. 280.00", currentPrice: "Rs. 229.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Sweet & Aromatic" },
    { id: 8, title: "Cumin Seeds 100g", originalPrice: "Rs. 250.00", currentPrice: "Rs. 199.00", image: "https://images.unsplash.com/photo-1585520191565-72d312ce0c90?auto=format&fit=crop&q=80&w=500", badge: "Sale", description: "Earthy Flavor" },
];

const filterCategories = ["All Products", "Signature Spices", "Artisanal Honey", "Dry Fruits", "Gifts & Bundles"];

export const metadata = {
    title: "Shop | BEWINGO - Premium Kerala Spices",
    description: "Browse our curated selection of Kerala spices, wild honey, and dry fruits. Sourced directly from farmers.",
};

export default function ShopPage() {
    return (
        <>
            <main className="pt-20 min-h-screen bg-cream">
                {/* Shop Header */}
                <section className="bg-forest text-cream py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <nav className="flex items-center gap-2 text-xs text-cream/40 mb-8 uppercase tracking-widest">
                            <Link href="/" className="hover:text-cream/70 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gold">Collection</span>
                        </nav>
                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Our Collection
                        </h1>
                        <p className="text-cream/70 text-lg max-w-xl">
                            Explore our curated selection of authentic Kerala spices, honey, and dry fruits - sourced directly from trusted farmers.
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
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Best Sellers</option>
                                </select>
                            </div>
                        </div>

                        <p className="text-xs text-muted uppercase tracking-widest mb-8">
                            Showing <span className="font-bold text-forest">{products.length}</span> products
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
                <section className="py-20 bg-forest text-center text-cream">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Can&apos;t find what you&apos;re looking for?
                        </h2>
                        <p className="text-cream/70 mb-8">Reach out to us directly and we&apos;ll help you find the perfect spice.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gold text-forest text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors"
                        >
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}






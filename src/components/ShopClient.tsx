"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { AdminProduct } from "@/lib/admin-data";

const filterCategories = ["All Products", "Signature Spices", "Artisanal Honey", "Dry Fruits"];

export default function ShopClient() {
    const [products, setProducts] = useState<AdminProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All Products");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/admin/products');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data.filter((p: AdminProduct) => p.status === 'Published'));
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const filteredProducts = activeCategory === "All Products"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <>
            <main className="pt-20 min-h-screen bg-cream">
                {/* Page Header */}
                <section className="bg-forest text-cream py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex items-center gap-2 text-[10px] text-cream/30 mb-8 uppercase tracking-[0.3em] font-bold">
                            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gold">Digital Catalog</span>
                        </nav>
                        <h1
                            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Digital Catalog
                        </h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed font-medium tracking-tight">
                            Browse our full range of industrial-grade Kerala agro-products. All lots are certified, traceable, and ready for global bulk export.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Toolbar */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-forest/10">
                            <div className="flex flex-wrap gap-2">
                                {filterCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full border transition-all ${activeCategory === cat
                                            ? "bg-forest text-cream border-forest shadow-lg"
                                            : "border-forest/10 text-forest/40 hover:border-forest/30 hover:text-forest"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <SlidersHorizontal className="w-4 h-4 text-forest/40" />
                                <select className="text-[10px] font-black uppercase tracking-widest text-forest/60 bg-transparent border-none outline-none cursor-pointer focus:text-forest">
                                    <option>Sort: Featured</option>
                                    <option>A–Z</option>
                                    <option>Most Enquired</option>
                                </select>
                            </div>
                        </div>

                        {loading ? (
                            <div className="py-24 text-center text-forest/20 font-black uppercase tracking-[0.4em] animate-pulse">
                                Reaching the plantation gates...
                            </div>
                        ) : (
                            <>
                                <p className="text-[10px] text-forest/30 font-black uppercase tracking-[0.4em] mb-12">
                                    <span className="text-forest">{filteredProducts.length}</span> Export Products Available
                                </p>

                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} {...product} />
                                    ))}
                                </div>

                                {filteredProducts.length === 0 && (
                                    <div className="py-24 text-center">
                                        <p className="text-forest/30 font-black uppercase tracking-[0.2em]">No products found in this category.</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-forest text-center text-cream relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <p className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8">Trade Desk</p>
                        <h2
                            className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter leading-[0.9]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Bespoke Sourcing Requirements?
                        </h2>
                        <p className="text-cream/40 mb-14 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto">Our procurement team can source specific grades or regional varieties beyond this catalog. Share your requirements for a custom lot-sampled quote.</p>
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-4 bg-gold text-forest text-[10px] font-black uppercase tracking-[0.3em] px-16 py-7 rounded-full overflow-hidden transition-all shadow-2xl hover:bg-white active:scale-95"
                        >
                            <span className="relative z-10">Open Trade Inquiry</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

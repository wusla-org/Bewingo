"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminProduct } from "@/lib/admin-data";

export default function ProductGrid() {
    const [products, setProducts] = useState<AdminProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/admin/products', { cache: 'no-store' });
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

    if (loading) return <div className="py-20 text-center text-cream font-bold animate-pulse">SOURCING FRESH BATCHES...</div>;
    if (products.length === 0) return null;

    const featuredProduct = products[0];
    const smallProducts = products.slice(1, 5);

    return (
        <section className="bg-tan py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Featured Product Card (Takes 7 cols) */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 group shadow-2xl overflow-hidden relative"
                    >
                        <div className="flex-1 w-full aspect-square relative flex justify-center items-center">
                            <img
                                src={featuredProduct.image || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"}
                                alt={featuredProduct.name}
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-tan flex items-center justify-center text-cream">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-earth uppercase leading-[0.9] tracking-tighter">{featuredProduct.name}</h3>
                                    <p className="text-[10px] uppercase font-bold text-muted tracking-[0.2em] mt-2">{featuredProduct.id}</p>
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-earth/5 pt-6">
                                <div>
                                    <p className="text-[8px] uppercase font-black text-tan tracking-widest mb-1">Origin</p>
                                    <p className="text-sm font-bold text-earth">{featuredProduct.origin}</p>
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase font-black text-tan tracking-widest mb-1">Grade</p>
                                    <p className="text-sm font-bold text-earth">{featuredProduct.grade}</p>
                                </div>
                                <div>
                                    <p className="text-[8px] uppercase font-black text-tan tracking-widest mb-1">Export MOQ</p>
                                    <p className="text-sm font-bold text-earth">{featuredProduct.moq}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Small Grid (Takes 5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {smallProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-[1.5rem] p-5 flex flex-col group shadow-xl border border-transparent hover:border-tan/20 transition-all"
                            >
                                <div className="w-full aspect-square relative flex justify-center items-center mb-4 bg-cream/30 rounded-xl overflow-hidden">
                                    <img
                                        src={product.image || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400"}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-sm font-black text-earth uppercase leading-tight mb-1">{product.name}</h4>
                                    <p className="text-[8px] uppercase font-bold text-muted tracking-tighter mb-4">{product.category}</p>

                                    <div className="space-y-2 border-t border-earth/5 pt-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[7px] uppercase font-bold text-tan">Grade</span>
                                            <span className="text-[9px] font-bold text-earth truncate max-w-[80px] text-right">{product.grade}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[7px] uppercase font-bold text-tan">Pack</span>
                                            <span className="text-[9px] font-bold text-earth truncate max-w-[80px] text-right">{product.packing}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/shop"
                        className="group relative border-2 border-cream/30 text-cream text-[10px] font-black uppercase tracking-[0.3em] px-12 py-4 rounded-full overflow-hidden transition-all hover:border-cream"
                    >
                        <span className="relative z-10">VIEW ALL PRODUCTS</span>
                        <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="absolute inset-0 flex items-center justify-center text-tan opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black z-20">VIEW ALL PRODUCTS</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

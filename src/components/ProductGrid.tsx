"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plus } from "lucide-react";

interface SpiceProduct {
    id: number;
    title: string;
    code: string;
    specs: { label: string; value: string }[];
    image: string;
}

const featuredProduct: SpiceProduct = {
    id: 1,
    title: "Black Pepper",
    code: "BPP-TGS",
    specs: [
        { label: "Grade", value: "TGSEB / FAQ" },
        { label: "Moisture", value: "< 12%" },
        { label: "Piperine", value: "Min 4.5%" },
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
};

const smallProducts: SpiceProduct[] = [
    {
        id: 2,
        title: "Cinnamon",
        code: "CNN-ALB",
        specs: [
            { label: "Type", value: "Alba / C5" },
            { label: "Volatile Oil", value: "Min 1.5%" },
        ],
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 3,
        title: "Green Cardamom",
        code: "GCM-AGE",
        specs: [
            { label: "Size", value: "8mm Bold" },
            { label: "Purity", value: "99.5%" },
        ],
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 4,
        title: "White Pepper",
        code: "WPP-DWP",
        specs: [
            { label: "Density", value: "600 g/l" },
            { label: "Moisture", value: "< 13%" },
        ],
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 5,
        title: "Mace",
        code: "MAC-KL1",
        specs: [
            { label: "Origin", value: "Idukki Gold" },
            { label: "Color", value: "Deep Orange" },
        ],
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    },
];

export default function ProductGrid() {
    return (
        <section className="bg-tan py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Featured Product Card */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-between group h-full shadow-2xl"
                    >
                        <div className="w-full aspect-square relative flex justify-center items-center mb-8">
                            <img
                                src={featuredProduct.image}
                                alt={featuredProduct.title}
                                className="w-[80%] h-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-tan flex items-center justify-center text-cream">
                                    <Plus className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-earth uppercase leading-none">{featuredProduct.title}</h3>
                                    <p className="text-[10px] uppercase font-bold text-muted tracking-[0.2em] mt-1">{featuredProduct.code}</p>
                                </div>
                            </div>

                            {/* Technical Specs Grid */}
                            <div className="grid grid-cols-2 gap-4 border-t border-earth/5 pt-6 mt-6">
                                {featuredProduct.specs.map(spec => (
                                    <div key={spec.label}>
                                        <p className="text-[8px] uppercase font-black text-tan tracking-widest mb-1">{spec.label}</p>
                                        <p className="text-xs font-bold text-earth">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: 2x2 Small Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {smallProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-[1.5rem] p-6 flex flex-col group shadow-xl border border-transparent hover:border-tan/20 transition-all"
                            >
                                <div className="w-full aspect-square relative flex justify-center items-center mb-6 bg-cream/30 rounded-2xl overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-[70%] h-auto drop-shadow-md group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-sm font-black text-earth uppercase leading-none mb-1">{product.title}</h4>
                                    <p className="text-[8px] uppercase font-bold text-muted tracking-tighter mb-4">{product.code}</p>

                                    <div className="space-y-2 border-t border-earth/5 pt-3">
                                        {product.specs.map(spec => (
                                            <div key={spec.label} className="flex justify-between items-center">
                                                <span className="text-[7px] uppercase font-bold text-tan">{spec.label}</span>
                                                <span className="text-[9px] font-bold text-earth">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/shop"
                        className="border-2 border-cream/30 text-cream text-[10px] font-black uppercase tracking-[0.3em] px-12 py-4 rounded-full hover:bg-cream hover:text-tan transition-all"
                    >
                        VIEW ALL PRODUCTS
                    </Link>
                </div>
            </div>
        </section>
    );
}

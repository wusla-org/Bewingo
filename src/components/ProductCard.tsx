"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    origin?: string;
    grade?: string;
    moq?: string;
    image?: string;
    badge?: string;
}

export default function ProductCard({
    id,
    name,
    description,
    origin,
    grade,
    moq,
    image,
    badge,
}: ProductCardProps) {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group h-full flex flex-col bg-white border border-forest/10 rounded-sm hover:border-gold/30 hover:shadow-2xl transition-all duration-500"
        >
            {/* Image Thumbnail */}
            <div className="relative overflow-hidden aspect-[4/3] bg-cream border-b border-forest/5">
                {badge && (
                    <span className="absolute top-3 left-3 z-10 bg-gold text-forest text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm shadow-sm">
                        {badge}
                    </span>
                )}
                <img
                    src={image || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500"}
                    alt={name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
            </div>

            {/* Content & Specs */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-forest leading-snug mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{description}</p>
                </div>

                {/* Tabular Specs Area (Very B2B / Catalog feel) */}
                <div className="mt-auto flex flex-col border border-forest/10 rounded-sm divide-y divide-forest/10 bg-forest/[0.02]">
                    {origin && (
                        <div className="flex justify-between items-center px-3 py-2 text-[11px] text-forest">
                            <span className="text-forest/50 font-bold uppercase tracking-widest text-[9px]">Origin</span>
                            <span className="font-semibold">{origin}</span>
                        </div>
                    )}
                    {grade && (
                        <div className="flex justify-between items-center px-3 py-2 text-[11px] text-forest">
                            <span className="text-forest/50 font-bold uppercase tracking-widest text-[9px]">Technical Grade</span>
                            <span className="font-semibold text-right truncate max-w-[65%] text-forest">{grade}</span>
                        </div>
                    )}
                    {moq && (
                        <div className="flex justify-between items-center px-3 py-2 text-[11px] text-forest">
                            <span className="text-forest/50 font-bold uppercase tracking-widest text-[9px]">Export MOQ</span>
                            <span className="font-black text-gold">{moq}</span>
                        </div>
                    )}
                </div>

                {/* Action Footer */}
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-forest/5">
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                        <Link
                            href={`/product/${id}`}
                            className="text-[9px] font-bold text-muted hover:text-forest uppercase tracking-[0.2em] transition-colors inline-block"
                        >
                            Spec Sheet
                        </Link>
                    </motion.div>
                    <Link
                        href="/contact"
                        className="text-[10px] font-black bg-forest text-cream border border-forest hover:bg-emerald transition-all uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm shadow-sm"
                    >
                        Request Quote
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}

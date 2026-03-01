"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Leaf, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { initialSiteContent } from "@/lib/admin-data";

export default function HomePage() {
    const [content, setContent] = useState(initialSiteContent);

    useEffect(() => {
        async function fetchContent() {
            try {
                const res = await fetch('/api/admin/content', { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    setContent(data);
                }
            } catch (error) {
                console.error("Failed to fetch site content:", error);
            }
        }
        fetchContent();
    }, []);

    const home = content.home;

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <main className="bg-cream">
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#FBF9F6]">
                    {/* Premium Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                    {/* Dynamic Ambient Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{
                                y: [0, -40, 0],
                                rotate: [0, 10, 0],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-20 -left-20 w-[40vw] h-[40vw] bg-tan/10 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                y: [0, 50, 0],
                                x: [0, -30, 0],
                                opacity: [0.05, 0.1, 0.05]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 right-[-10%] w-[35vw] h-[35vw] bg-earth/5 rounded-full blur-[100px]"
                        />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Content Column */}
                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                            className="flex-1 z-10 text-center lg:text-left"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 bg-tan/10 rounded-full mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" />
                                <span className="text-tan text-[10px] font-black uppercase tracking-[0.2em]">{home.hero.badge}</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeIn}
                                className="text-6xl md:text-8xl xl:text-9xl font-black text-earth mb-8 tracking-tighter uppercase leading-[0.85] italic"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {home.hero.title.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="text-tan relative inline-block">
                                    {home.hero.title.split(' ').slice(-1)}
                                    <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 text-tan/30 overflow-visible" preserveAspectRatio="none">
                                        <path d="M0,5 Q50,0 100,5" stroke="currentColor" fill="none" strokeWidth="2" />
                                    </svg>
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeIn} className="text-earth/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-medium tracking-tight">
                                {home.hero.subtitle}
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center bg-earth text-cream text-[10px] font-black uppercase tracking-[0.3em] px-14 py-6 rounded-full overflow-hidden transition-all shadow-2xl hover:bg-tan active:scale-95"
                                >
                                    <span className="relative z-10">{home.hero.ctaText}</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                </Link>

                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FBF9F6] bg-cream flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-tan/20 flex items-center justify-center">
                                                <Globe className="w-5 h-5 text-tan" />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pl-6 flex flex-col justify-center items-start">
                                        <span className="text-earth font-black text-xs leading-none">24+ Countries</span>
                                        <span className="text-earth/40 text-[9px] font-bold uppercase tracking-wider mt-1">Global Trade Network</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Visual Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 relative w-full max-w-2xl"
                        >
                            <div className="relative aspect-[4/5] md:aspect-square">
                                {/* Geometric Design Behind Product */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-earth/10 rounded-full rotate-45" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-tan/10 rounded-full -rotate-12" />

                                {/* Featured Visual */}
                                <div className="relative z-10 h-full w-full flex items-center justify-center p-8 group overflow-hidden rounded-[3rem]">
                                    <img
                                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200"
                                        alt="Global Spice Distribution"
                                        className="w-full h-full object-cover rounded-[3rem] transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-earth/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Certification Hover Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-4 border border-white/50"
                                    >
                                        <ShieldCheck className="w-8 h-8 text-tan" />
                                        <div>
                                            <p className="text-[10px] font-black text-earth uppercase tracking-widest">Certified Origin</p>
                                            <p className="text-[8px] font-bold text-earth/50 uppercase">Quality Guaranteed</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Brand Logo elements */}
                                <motion.div
                                    animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-12 -right-8 w-32 h-32 opacity-15 z-20 pointer-events-none"
                                >
                                    <Image
                                        src="/logo/bewingo SVG-04.svg"
                                        alt=""
                                        width={140}
                                        height={140}
                                        className="w-full h-full grayscale brightness-0"
                                        priority
                                    />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                    className="absolute -bottom-6 -left-12 w-28 h-28 opacity-15 z-20 pointer-events-none"
                                >
                                    <Image
                                        src="/logo/bewingo SVG-04.svg"
                                        alt=""
                                        width={120}
                                        height={120}
                                        className="w-full h-full grayscale brightness-0"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
                        <span className="text-[10px] font-black text-earth/20 uppercase tracking-[0.4em] rotate-90 mb-4 font-serif">Scroll</span>
                        <div className="w-[1px] h-16 bg-gradient-to-b from-tan to-transparent" />
                    </div>
                </section>

                {/* ── Certifications Marquee ────────────────────────── */}
                <section className="py-12 bg-cream/50 border-y border-earth/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                        <p className="text-[10px] font-black text-earth/30 uppercase tracking-[0.4em] mb-4">
                            {home.certifications?.title || "OUR GLOBAL CERTIFICATIONS"}
                        </p>
                    </div>

                    <div className="relative flex overflow-x-hidden">
                        <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-20">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center gap-20">
                                    {home.certifications?.logos.map((logo, idx) => (
                                        <div key={`${i}-${idx}`} className="h-12 md:h-16 w-32 md:w-40 relative opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="w-full h-full bg-earth/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-earth/40 uppercase tracking-tighter text-center px-4">
                                                {logo.split('/').pop()?.split('.')[0]?.toUpperCase() || "CERTIFIED"}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Quality Journey Section ─────────────────────── */}
                <section className="py-24 bg-dark text-cream relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <motion.p
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                className="text-tan text-[10px] font-black uppercase tracking-[0.4em] mb-4"
                            >
                                {home.journey?.title || "PLANTATION TO PORT"}
                            </motion.p>
                            <motion.h2
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                className="text-4xl md:text-5xl font-black italic uppercase leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {home.journey?.subtitle || "Our Transparent Export Supply Chain"}
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-cream/10 z-0" />

                            {(home.journey?.steps || []).map((step, idx) => {
                                const Icon = step.icon === "Leaf" ? Leaf : step.icon === "ShieldCheck" ? ShieldCheck : step.icon === "Globe" ? Globe : Users;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 40 }}
                                        transition={{ delay: idx * 0.15 }}
                                        className="relative z-10 flex flex-col items-center text-center group"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-forest border border-cream/10 flex items-center justify-center mb-8 bg-[#1e2a1e] transition-transform duration-500 group-hover:scale-110 group-hover:bg-tan group-hover:border-tan">
                                            <Icon className="w-10 h-10 text-tan group-hover:text-cream transition-colors" strokeWidth={1} />
                                        </div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-tan group-hover:text-cream transition-colors">{step.title}</h3>
                                        <p className="text-cream/50 text-[10px] font-medium leading-relaxed uppercase tracking-wider max-w-[180px]">
                                            {step.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Product Grid (1+4 Design) ───────────────────── */}

                {/* ── Product Grid (1+4 Design) ───────────────────── */}
                <ProductGrid />

                {/* ── About Section (Spice Tray Layout) ─────────────── */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left: Spice Tray Image */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200"
                                alt="Spice Tray Visual"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className="text-4xl md:text-5xl font-black text-earth mb-8 leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {home.about.title.split(' ').slice(0, -1).join(' ')} <br /> <span className="text-tan">{home.about.title.split(' ').slice(-1)}</span>
                            </h2>
                            <div className="space-y-6 text-earth/70 text-sm leading-relaxed font-medium">
                                <p>
                                    {home.about.description1}
                                </p>
                                <p>
                                    {home.about.description2}
                                </p>
                            </div>
                            <Link
                                href="/our-story"
                                className="inline-flex mt-10 items-center justify-center bg-earth text-cream text-[10px] font-black uppercase tracking-[0.3em] px-12 py-4 rounded-full hover:bg-tan transition-all shadow-xl"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Features Utility Bar (Below About) */}
                    <div className="bg-tan mt-24 py-16">
                        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "SECURED PAYMENT", icon: ShieldCheck },
                                { title: "FREE SHIPPING", icon: Globe },
                                { title: "CUSTOMER SUPPORT", icon: Users },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col items-center text-center gap-4"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center text-cream border border-cream/20 rounded-full">
                                        <feature.icon className="w-6 h-6" strokeWidth={1} />
                                    </div>
                                    <span className="text-[10px] font-black tracking-[0.2em] text-cream uppercase">{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main >

            <Footer />
        </>
    );
}

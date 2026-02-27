"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { initialSiteContent } from "@/lib/admin-data";

export default function Footer() {
    const [desc, setDesc] = useState(initialSiteContent.global.footer.companyDesc);

    useEffect(() => {
        const saved = localStorage.getItem("bewingo_site_content");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.global?.footer?.companyDesc) setDesc(parsed.global.footer.companyDesc);
            } catch (e) {
                console.error("Failed to parse saved site content", e);
            }
        }
    }, []);
    return (
        <footer className="bg-earth text-cream">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    {/* Col 1: Products */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-tan">Catalog</h4>
                        <ul className="flex flex-col gap-4">
                            {["Black Pepper", "Cinnamon", "Mace", "White Pepper", "Green Cardamom"].map((item) => (
                                <li key={item}>
                                    <Link href="/shop" className="text-xs font-medium text-cream/50 hover:text-tan transition-colors uppercase tracking-widest">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Info/Contacts */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-tan">Information</h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-tan shrink-0" />
                                <span className="text-xs font-medium text-cream/50 uppercase tracking-widest leading-relaxed">
                                    6/345 Export Road, Kochi Port,<br />Kerala, India
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-tan shrink-0" />
                                <span className="text-xs font-medium text-cream/50 uppercase tracking-widest">
                                    +91 7012 228 978
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-tan shrink-0" />
                                <span className="text-xs font-medium text-cream/50 uppercase tracking-widest">
                                    trade@bewingo.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Social */}
                    <div className="flex flex-col items-start md:items-end">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-tan">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Instagram, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 text-tan hover:bg-tan hover:text-earth transition-all border border-cream/10"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            <div className="opacity-80">
                                <Image
                                    src="/logo/bewingo SVG-04.svg"
                                    alt="BEWINGO Logo"
                                    width={240}
                                    height={60}
                                    className="h-16 w-auto filter grayscale brightness-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center h-12 overflow-hidden opacity-50">
                        <Image
                            src="/logo/bewingo SVG-04.svg"
                            alt="BEWINGO Logo"
                            width={320}
                            height={90}
                            className="h-48 w-auto brightness-200 grayscale"
                        />
                    </div>
                    <p className="text-[10px] font-bold text-cream/20 uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} BEWINGO SPICES. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}




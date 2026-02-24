import Link from "next/link";
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-forest text-cream">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="text-gold w-5 h-5" />
                            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                BEWINGO
                            </span>
                        </div>
                        <p className="text-cream/60 text-sm leading-relaxed max-w-xs mb-6">
                            Artisanal spices sourced directly from the highlands of Kerala. From farm to table, with love and transparency.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/10 text-cream/40 hover:border-gold hover:text-gold transition-colors duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gold">Shop</h4>
                        <ul className="flex flex-col gap-3">
                            {["Signature Spices", "Wild Honey", "Dry Fruits", "Gift Boxes", "New Arrivals"].map((item) => (
                                <li key={item}>
                                    <Link href="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gold">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-sm text-cream/60">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                Kerala, India
                            </li>
                            <li className="flex items-center gap-3 text-sm text-cream/60">
                                <Phone className="w-4 h-4 text-gold shrink-0" />
                                +91 7012 228 978
                            </li>
                            <li className="flex items-center gap-3 text-sm text-cream/60">
                                <Mail className="w-4 h-4 text-gold shrink-0" />
                                hello@bewingo.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-cream/30">
                        (c) {new Date().getFullYear()} BEWINGO. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Shipping Policy"].map((item) => (
                            <a key={item} href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}




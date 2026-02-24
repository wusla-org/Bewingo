import { Leaf, Handshake, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Sourcing | BEWINGO",
    description: "Learn how BEWINGO sources spices directly from trusted farmers with quality-first processes.",
};

export default function SourcingPage() {
    return (
        <>
            <main className="pt-20 bg-cream min-h-screen">
                <section className="bg-forest text-cream py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Farm To Market</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-5">Sourcing</h1>
                        <p className="text-cream/75 text-lg max-w-2xl">
                            We source spices from trusted regions and farmer communities, then process and pack with strict quality control.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { Icon: Leaf, title: "Direct Sourcing", text: "We work directly with farmers and avoid unnecessary middle layers." },
                            { Icon: Handshake, title: "Fair Partnerships", text: "Long-term relationships with fair pricing and consistent demand." },
                            { Icon: ShieldCheck, title: "Quality Standards", text: "Lot checks, moisture control, and clean packaging before dispatch." },
                        ].map((item) => (
                            <article key={item.title} className="rounded-xl border border-forest/10 bg-white p-5">
                                <item.Icon className="w-6 h-6 text-gold mb-3" />
                                <h2 className="text-lg font-bold text-forest mb-2">{item.title}</h2>
                                <p className="text-sm text-muted">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="py-10">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="rounded-2xl border border-forest/10 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-forest mb-2">Need bulk sourcing support?</h3>
                                <p className="text-muted text-sm">Share your requirement and our team will send the best matching lots and quote.</p>
                            </div>
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-forest text-cream px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-emerald transition-colors">
                                Contact Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

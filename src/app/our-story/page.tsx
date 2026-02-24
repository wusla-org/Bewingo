import Link from "next/link";
import { ArrowRight, Leaf, Users, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Our Story | BEWINGO",
    description: "Learn how BEWINGO works directly with farmers to deliver authentic spices with quality and care.",
};

export default function OurStoryPage() {
    return (
        <>
            <main className="pt-20 bg-cream min-h-screen">
                <section className="bg-forest text-cream py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">About BEWINGO</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Story</h1>
                        <p className="text-cream/75 text-lg max-w-2xl">
                            From local sourcing in Kerala to trusted delivery across markets, BEWINGO is built on quality,
                            transparency, and long-term farmer partnerships.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">How We Started</p>
                            <h2 className="text-4xl font-bold text-forest mb-5">A simple mission: better spices, fair trade</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                BEWINGO started with one goal: connect customers to authentic spice quality while giving farmers
                                a fair and stable market.
                            </p>
                            <p className="text-muted leading-relaxed mb-7">
                                Every batch is carefully selected, cleaned, and packed to preserve aroma, freshness, and purity.
                                We grow with every order, while keeping quality standards consistent.
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-forest text-cream text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded-lg hover:bg-emerald transition-colors"
                            >
                                Explore Products <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-forest/10 bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1200"
                                alt="BEWINGO journey"
                                className="w-full h-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 border-y border-forest/10 bg-white">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { Icon: Leaf, title: "Natural Quality", text: "No artificial preservatives. Clean and traceable sourcing." },
                            { Icon: Users, title: "Farmer Partnerships", text: "Direct relationships with grower communities." },
                            { Icon: ShieldCheck, title: "Quality Checks", text: "Each lot is verified before dispatch." },
                        ].map((item) => (
                            <article key={item.title} className="rounded-xl border border-forest/10 p-5">
                                <item.Icon className="w-6 h-6 text-gold mb-3" />
                                <h3 className="text-lg font-bold text-forest mb-1">{item.title}</h3>
                                <p className="text-sm text-muted">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

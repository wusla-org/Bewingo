import Link from "next/link";
import { ArrowRight, Award, Truck, Leaf, ShieldCheck, Users, Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

const products = [
    {
        id: 1,
        title: "Black Pepper Corn 100g",
        originalPrice: "Rs. 400.00",
        currentPrice: "Rs. 199.00",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500",
        badge: "Sale",
        description: "Bold & Aromatic",
    },
    {
        id: 2,
        title: "Premium Cardamom 8mm 100g",
        originalPrice: "Rs. 550.00",
        currentPrice: "Rs. 499.00",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=500",
        badge: "Sale",
        description: "Big Pods, Bold Aroma",
    },
    {
        id: 3,
        title: "Premium Cashew W180",
        originalPrice: "Rs. 399.00",
        currentPrice: "Rs. 367.00",
        image: "https://images.unsplash.com/photo-1599599810694-ec3ac9c34b11?auto=format&fit=crop&q=80&w=500",
        badge: "Sale",
        description: "Naturally Crunchy",
    },
    {
        id: 4,
        title: "Wild Forest Honey 500g",
        originalPrice: "Rs. 650.00",
        currentPrice: "Rs. 549.00",
        image: "https://images.unsplash.com/photo-1589182337358-2c63475155bb?auto=format&fit=crop&q=80&w=500",
        badge: "Best Seller",
        description: "Raw & Unfiltered",
    },
];

const categories = [
    {
        title: "Signature Spices",
        description: "Rare single-origin spices from the hills of Wayanad",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        href: "/shop",
    },
    {
        title: "Dry Fruits",
        description: "Handpicked, naturally dried fruits from trusted Kerala farms",
        image: "https://images.unsplash.com/photo-1585520191565-72d312ce0c90?auto=format&fit=crop&q=80&w=800",
        href: "/shop",
    },
    {
        title: "Wild Honey",
        description: "Unfiltered honey harvested from wild forest blooms",
        image: "https://images.unsplash.com/photo-1589182337358-2c63475155bb?auto=format&fit=crop&q=80&w=800",
        href: "/shop",
    },
];

const features = [
    { Icon: Award, title: "Quality Assured", description: "Every batch is hand-inspected and lab-tested before it reaches you." },
    { Icon: Truck, title: "Efficient Delivery", description: "Fresh to your door, packed with care and delivered on time." },
    { Icon: Leaf, title: "100% Natural", description: "No additives, no preservatives. Just pure, natural goodness." },
    { Icon: ShieldCheck, title: "Certified Quality", description: "FSSAI certified and internationally compliant for your peace of mind." },
    { Icon: Users, title: "Farmer First", description: "We buy directly from farming communities, ensuring fair and ethical trade." },
    { Icon: Package, title: "Easy Ordering", description: "A seamless, secure shopping experience from browse to delivery." },
];

export const metadata = {
    title: "BEWINGO | Premium Kerala Spices, Honey & Dry Fruits",
    description: "Experience the authentic taste of Kerala with BEWINGO's hand-picked spices, honey, and dry fruits - sourced directly from trusted farmers.",
};

export default function HomePage() {
    return (
        <>
            <main>
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000"
                            alt="Kerala spices background"
                            className="w-full h-full object-cover opacity-25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/40" />
                    </div>

                    <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
                        <div className="max-w-2xl">
                            <p className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-6">Est. Kerala, 1982</p>
                            <h1
                                className="text-5xl md:text-7xl font-bold leading-tight text-cream mb-8"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Artisanal Spices,{" "}
                                <em className="font-normal not-italic text-gold">Sourced from the Heart.</em>
                            </h1>
                            <p className="text-cream/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                                Experience the bold and aromatic legacy of Kerala. Every spice is hand-picked, sustainably sourced, and delivered with unmatched freshness.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center gap-2 bg-gold text-forest text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-200"
                                >
                                    Shop The Collection
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/our-story"
                                    className="inline-flex items-center gap-2 border border-cream/20 text-cream text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:border-cream/40 hover:bg-cream/5 transition-colors duration-200"
                                >
                                    Our Philosophy
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Scroll cue */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
                        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
                        <div className="w-px h-10 bg-cream/20" />
                    </div>
                </section>

                {/* ── Trust Bar ────────────────────────────────────── */}
                <section className="border-y border-forest/5 bg-white">
                    <div className="max-w-6xl mx-auto px-6 py-5">
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-muted text-xs font-semibold uppercase tracking-widest">
                            {["100% Organic", "Direct from Farmers", "FSSAI Certified", "Free Shipping Rs. 500+", "Lab Tested"].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Featured Products ─────────────────────────────── */}
                <section className="py-24 bg-cream" id="products">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                            <div>
                                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Handpicked for You</p>
                                <h2
                                    className="text-4xl md:text-5xl font-bold text-forest"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    Premium Products
                                </h2>
                            </div>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-forest border-b-2 border-gold pb-0.5 hover:text-gold transition-colors"
                            >
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((p) => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Categories ───────────────────────────────────── */}
                <section className="py-24 bg-white" id="categories">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Explore</p>
                            <h2
                                className="text-4xl md:text-5xl font-bold text-forest"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Our Collections
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.title}
                                    href={cat.href}
                                    className="group relative overflow-hidden rounded-xl aspect-[4/5] block"
                                >
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {cat.title}
                                        </h3>
                                        <p className="text-cream/70 text-sm mb-4">{cat.description}</p>
                                        <span className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-widest">
                                            Shop Now <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Why Choose Us ────────────────────────────────── */}
                <section className="py-24 bg-cream" id="why-us">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Our Promise</p>
                            <h2
                                className="text-4xl md:text-5xl font-bold text-forest mb-4"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Why BEWINGO
                            </h2>
                            <p className="text-muted max-w-xl mx-auto text-base">
                                We&apos;re committed to bringing you the finest quality spices with unmatched freshness and authenticity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((f) => (
                                <FeatureCard key={f.title} {...f} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Brand Story ──────────────────────────────────── */}
                <section className="py-24 bg-forest text-cream" id="story">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Text */}
                            <div>
                                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Our Journey</p>
                                <h2
                                    className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    From That First Bag <br />
                                    <em className="font-normal not-italic text-gold">to Your Kitchen</em>
                                </h2>
                                <p className="text-cream/70 text-base leading-relaxed mb-4">
                                    From that first bag of Black Peppercorn to today&apos;s growing collection, our journey has been fueled by your belief in us - every purchase supporting farmers, every shared post spreading our mission.
                                </p>
                                <p className="text-cream/70 text-base leading-relaxed mb-8">
                                    As we continue to grow, we&apos;re not just selling spices but building a movement where your kitchen becomes a force for change. The most flavorful chapters are yet to come.
                                </p>
                                <Link
                                    href="/our-story"
                                    className="inline-flex items-center gap-2 bg-gold text-forest text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-200"
                                >
                                    Learn Our Story <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800"
                                        alt="BEWINGO story"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Stat card */}
                                <div className="absolute -bottom-6 -left-6 bg-gold text-forest p-6 rounded-xl shadow-xl">
                                    <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>40+</p>
                                    <p className="text-xs font-bold uppercase tracking-wider mt-1">Farmer Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Newsletter ───────────────────────────────────── */}
                <section className="py-20 bg-white border-t border-forest/5">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Stay in the Loop</p>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-forest mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Join the BEWINGO Family
                        </h2>
                        <p className="text-muted mb-8 max-w-md mx-auto">Subscribe for exclusive deals, new arrivals, and Kerala spice stories delivered to your inbox.</p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 border border-forest/10 bg-cream text-forest text-sm px-5 py-3.5 outline-none focus:border-gold transition-colors rounded-lg"
                            />
                            <button
                                type="submit"
                                className="bg-forest text-cream text-xs font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-sage transition-colors rounded-lg whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}






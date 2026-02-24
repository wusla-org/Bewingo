import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact | BEWINGO",
    description: "Contact BEWINGO for product inquiries, sourcing support, and bulk orders.",
};

export default function ContactPage() {
    return (
        <>
            <main className="pt-20 bg-cream min-h-screen">
                <section className="bg-forest text-cream py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-5">Contact Us</h1>
                        <p className="text-cream/75 text-lg max-w-2xl">
                            Share your requirements and our team will get back with product details and pricing.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1 rounded-xl border border-forest/10 bg-white p-6 space-y-4">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted">Phone</p>
                                <p className="text-forest font-semibold">+91 7012 228 978</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                                <p className="text-forest font-semibold">hello@bewingo.com</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted">Address</p>
                                <p className="text-forest font-semibold">Kerala, India</p>
                            </div>
                        </div>

                        <form className="lg:col-span-2 rounded-xl border border-forest/10 bg-white p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Your name" />
                                <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Company name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Email address" />
                                <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Phone number" />
                            </div>
                            <textarea
                                rows={5}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold resize-none"
                                placeholder="Tell us your requirement (products, quantity, destination)."
                            />
                            <button type="submit" className="bg-forest text-cream text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-emerald transition-colors">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

"use client";

import { useEffect, useState } from "react";
import { AdminProduct, AdminInquiry } from "@/lib/admin-data";
import Link from "next/link";
import { ArrowUpRight, Package, MessageSquare, Clock } from "lucide-react";

export default function AdminDashboardPage() {
    const [products, setProducts] = useState<AdminProduct[]>([]);
    const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [prodRes, inqRes] = await Promise.all([
                    fetch('/api/admin/products'),
                    fetch('/api/admin/inquiries')
                ]);
                const prods = await prodRes.json();
                const inqs = await inqRes.json();
                setProducts(prods);
                setInquiries(inqs);
            } catch (error) {
                console.error("Dashboard fetch error:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div className="p-12 text-center text-muted animate-pulse">Gathering intelligence...</div>;

    const pendingInquiries = inquiries.filter((i) => i.status === "New");
    const publishedProducts = products.filter((p) => p.status === "Published");
    const draftProducts = products.filter((p) => p.status === "Draft");

    const metrics = [
        { label: "Total Products", value: products.length, Icon: Package, delta: "Live Catalog" },
        { label: "Published Items", value: publishedProducts.length, Icon: ArrowUpRight, delta: `${publishedProducts.length} Active` },
        { label: "New Enquiries", value: pendingInquiries.length, Icon: MessageSquare, delta: "Action Required" },
        { label: "Draft Products", value: draftProducts.length, Icon: Clock, delta: "In Development" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-4xl font-black text-forest tracking-tighter">Command Center</h2>
                    <p className="text-muted-foreground mt-2 font-medium">Real-time oversight of BEWINGO export operations.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/admin/products" className="bg-forest text-cream px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald transition-all shadow-md">Add Product</Link>
                </div>
            </header>

            {/* Metric Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                    <article key={metric.label} className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{metric.label}</p>
                                <p className="text-3xl font-black text-forest mt-2">{metric.value}</p>
                            </div>
                            <div className="p-3 bg-cream/50 rounded-xl group-hover:bg-gold/20 transition-colors">
                                <metric.Icon className="w-5 h-5 text-forest" />
                            </div>
                        </div>
                        <p className="text-xs text-sage font-bold mt-4 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse"></span>
                            {metric.delta}
                        </p>
                    </article>
                ))}
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Recent Enquiries Table */}
                <section className="xl:col-span-2 bg-white border border-forest/10 rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-forest/10 flex items-center justify-between bg-cream/20">
                        <h3 className="text-lg font-bold text-forest">Recent Business Enquiries</h3>
                        <Link href="/admin/inquiries" className="text-xs font-bold text-forest hover:text-gold transition-colors">View All →</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-cream/40 text-muted-foreground">
                                <tr>
                                    <th className="text-left font-bold px-6 py-4 uppercase tracking-tighter">Company</th>
                                    <th className="text-left font-bold px-6 py-4 uppercase tracking-tighter">Origin</th>
                                    <th className="text-left font-bold px-6 py-4 uppercase tracking-tighter">Status</th>
                                    <th className="text-right font-bold px-6 py-4 uppercase tracking-tighter">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-forest/5">
                                {inquiries.slice(0, 5).map((inq) => (
                                    <tr key={inq.id} className="hover:bg-cream/10 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-forest">{inq.company}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase">{inq.name}</div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-muted-foreground">{inq.country}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${inq.status === "New"
                                                ? "bg-gold/20 text-gold"
                                                : inq.status === "Replied"
                                                    ? "bg-sage/20 text-sage"
                                                    : "bg-forest/10 text-muted-foreground"
                                                }`}>
                                                {inq.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right text-muted-foreground font-mono tabular-nums">{inq.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="space-y-8">
                    {/* Top Products */}
                    <article className="bg-white border border-forest/10 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-forest mb-5 flex items-center gap-2">
                            Product Inventory
                        </h3>
                        <ul className="space-y-4">
                            {products
                                .slice(0, 5)
                                .map((product) => (
                                    <li key={product.id} className="group flex items-center justify-between p-3 rounded-xl hover:bg-cream/30 transition-colors border border-transparent hover:border-forest/5">
                                        <div>
                                            <p className="text-sm font-bold text-forest group-hover:text-gold transition-colors">{product.name}</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-medium">{product.category}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-black text-forest">{product.id}</p>
                                            <p className="text-[10px] text-muted-foreground uppercase">{product.status}</p>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                        <Link href="/admin/products" className="block text-center mt-6 text-xs font-black text-muted-foreground hover:text-forest transition-colors uppercase tracking-widest py-3 border-t border-forest/5">
                            Manage Inventory
                        </Link>
                    </article>

                    {/* Quick Access */}
                    <article className="bg-forest rounded-2xl p-6 shadow-xl text-cream">
                        <h3 className="text-lg font-bold mb-4">Quick Editor</h3>
                        <p className="text-xs text-cream/60 mb-6 font-medium">Instantly modify website copy without code deployments.</p>
                        <Link href="/admin/content" className="flex items-center justify-between bg-gold text-forest p-4 rounded-xl font-black text-sm hover:bg-white transition-colors">
                            Launch Content Editor
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </article>
                </div>
            </div>
        </div>
    );
}

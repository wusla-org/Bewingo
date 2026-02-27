import { adminActivities, adminInquiries, adminMetrics, adminProducts } from "@/lib/admin-data";

export const metadata = {
    title: "Admin Dashboard | BEWINGO",
};

export default function AdminDashboardPage() {
    const pendingInquiries = adminInquiries.filter((i) => i.status === "New");
    const publishedProducts = adminProducts.filter((p) => p.status === "Published");
    const draftProducts = adminProducts.filter((p) => p.status === "Draft");

    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-bold text-forest">Dashboard</h2>
                <p className="text-sm text-muted mt-1">Overview of export products, inbound enquiries, and recent activity.</p>
            </header>

            {/* Metric Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {adminMetrics.map((metric) => (
                    <article key={metric.label} className="bg-white border border-forest/10 rounded-xl p-5">
                        <p className="text-xs uppercase tracking-widest text-muted">{metric.label}</p>
                        <p className="text-2xl font-bold text-forest mt-2">{metric.value}</p>
                        <p className="text-xs text-sage font-semibold mt-1">{metric.delta}</p>
                    </article>
                ))}
            </section>

            {/* Recent Enquiries */}
            <section className="bg-white border border-forest/10 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-forest/10 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-forest">Recent Enquiries</h3>
                    <span className="text-xs bg-gold/15 text-gold font-bold px-2.5 py-1 rounded-full">{pendingInquiries.length} New</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-cream/60 text-muted">
                            <tr>
                                <th className="text-left font-semibold px-5 py-3">ID</th>
                                <th className="text-left font-semibold px-5 py-3">Contact</th>
                                <th className="text-left font-semibold px-5 py-3">Company</th>
                                <th className="text-left font-semibold px-5 py-3">Country</th>
                                <th className="text-left font-semibold px-5 py-3">Date</th>
                                <th className="text-left font-semibold px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminInquiries.map((inq) => (
                                <tr key={inq.id} className="border-t border-forest/10">
                                    <td className="px-5 py-3 font-medium text-forest">{inq.id}</td>
                                    <td className="px-5 py-3">{inq.name}</td>
                                    <td className="px-5 py-3">{inq.company}</td>
                                    <td className="px-5 py-3">{inq.country}</td>
                                    <td className="px-5 py-3">{inq.date}</td>
                                    <td className="px-5 py-3">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${inq.status === "New"
                                                ? "bg-gold/15 text-gold"
                                                : inq.status === "Replied"
                                                    ? "bg-sage/20 text-sage"
                                                    : "bg-forest/10 text-muted"
                                            }`}>
                                            {inq.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Action Center */}
                <article className="bg-white border border-forest/10 rounded-xl p-5">
                    <h3 className="text-base font-semibold text-forest mb-3">Action Center</h3>
                    <div className="space-y-2 text-sm">
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Pending Enquiry Replies</span>
                            <span className="font-bold text-forest">{pendingInquiries.length}</span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Products in Draft</span>
                            <span className="font-bold text-forest">{draftProducts.length}</span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Published Products</span>
                            <span className="font-bold text-forest">{publishedProducts.length}</span>
                        </p>
                    </div>
                </article>

                {/* Top Enquired Products */}
                <article className="bg-white border border-forest/10 rounded-xl p-5">
                    <h3 className="text-base font-semibold text-forest mb-3">Top Enquired Products</h3>
                    <ul className="space-y-2">
                        {adminProducts
                            .sort((a, b) => b.enquiryCount - a.enquiryCount)
                            .slice(0, 4)
                            .map((product) => (
                                <li key={product.id} className="text-sm flex items-center justify-between">
                                    <span className="text-forest">{product.name}</span>
                                    <span className="text-muted font-semibold">{product.enquiryCount} enquiries</span>
                                </li>
                            ))}
                    </ul>
                </article>

                {/* Recent Activity */}
                <article className="bg-white border border-forest/10 rounded-xl p-5">
                    <h3 className="text-base font-semibold text-forest mb-3">Recent Activity</h3>
                    <ul className="space-y-2">
                        {adminActivities.map((activity) => (
                            <li key={activity.id} className="text-sm">
                                <p className="text-forest">{activity.text}</p>
                                <p className="text-xs text-muted">{activity.date}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </div>
    );
}

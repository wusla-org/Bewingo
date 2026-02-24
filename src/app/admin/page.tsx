import { adminActivities, adminInquiries, adminMetrics, adminOrders, adminProducts } from "@/lib/admin-data";

export const metadata = {
    title: "Admin Dashboard | BEWINGO",
};

export default function AdminDashboardPage() {
    const lowStockProducts = adminProducts.filter((product) => product.stock <= 20);
    const pendingOrders = adminOrders.filter((order) => order.status === "Pending" || order.status === "Processing");

    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-bold text-forest">Dashboard</h2>
                <p className="text-sm text-muted mt-1">Overview of sales, orders, and incoming leads.</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {adminMetrics.map((metric) => (
                    <article key={metric.label} className="bg-white border border-forest/10 rounded-xl p-5">
                        <p className="text-xs uppercase tracking-widest text-muted">{metric.label}</p>
                        <p className="text-2xl font-bold text-forest mt-2">{metric.value}</p>
                        <p className="text-xs text-sage font-semibold mt-1">{metric.delta}</p>
                    </article>
                ))}
            </section>

            <section className="bg-white border border-forest/10 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-forest/10">
                    <h3 className="text-base font-semibold text-forest">Recent Orders</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-cream/60 text-muted">
                            <tr>
                                <th className="text-left font-semibold px-5 py-3">Order ID</th>
                                <th className="text-left font-semibold px-5 py-3">Customer</th>
                                <th className="text-left font-semibold px-5 py-3">Date</th>
                                <th className="text-left font-semibold px-5 py-3">Total</th>
                                <th className="text-left font-semibold px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminOrders.map((order) => (
                                <tr key={order.id} className="border-t border-forest/10">
                                    <td className="px-5 py-3 font-medium text-forest">{order.id}</td>
                                    <td className="px-5 py-3">{order.customer}</td>
                                    <td className="px-5 py-3">{order.date}</td>
                                    <td className="px-5 py-3">{order.total}</td>
                                    <td className="px-5 py-3">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <article className="bg-white border border-forest/10 rounded-xl p-5">
                    <h3 className="text-base font-semibold text-forest mb-3">Action Center</h3>
                    <div className="space-y-2 text-sm">
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Orders Needing Action</span>
                            <span className="font-bold text-forest">{pendingOrders.length}</span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Low Stock Alerts</span>
                            <span className="font-bold text-forest">{lowStockProducts.length}</span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-muted">Unread Inquiries</span>
                            <span className="font-bold text-forest">{adminInquiries.length}</span>
                        </p>
                    </div>
                </article>

                <article className="bg-white border border-forest/10 rounded-xl p-5">
                    <h3 className="text-base font-semibold text-forest mb-3">Low Stock Products</h3>
                    <ul className="space-y-2">
                        {lowStockProducts.map((product) => (
                            <li key={product.id} className="text-sm flex items-center justify-between">
                                <span className="text-forest">{product.name}</span>
                                <span className="text-muted font-semibold">{product.stock}</span>
                            </li>
                        ))}
                    </ul>
                </article>

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




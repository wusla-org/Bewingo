import { adminOrders } from "@/lib/admin-data";

export const metadata = {
    title: "Admin Orders | BEWINGO",
};

export default function AdminOrdersPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Orders</h2>
                <p className="text-sm text-muted mt-1">Track all incoming orders and update fulfillment status.</p>
            </header>

            <section className="bg-white border border-forest/10 rounded-xl overflow-hidden">
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
        </div>
    );
}




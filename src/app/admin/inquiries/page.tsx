import { adminInquiries } from "@/lib/admin-data";

export const metadata = {
    title: "Admin Enquiries | BEWINGO",
};

export default function AdminInquiriesPage() {
    const newCount = adminInquiries.filter((i) => i.status === "New").length;

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-forest">Enquiries</h2>
                    <p className="text-sm text-muted mt-1">Review and reply to export enquiries from global buyers.</p>
                </div>
                {newCount > 0 && (
                    <span className="text-xs bg-gold/15 text-gold font-bold px-3 py-1.5 rounded-full">
                        {newCount} New
                    </span>
                )}
            </header>

            <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {adminInquiries.map((inquiry) => (
                    <article key={inquiry.id} className="bg-white border border-forest/10 rounded-xl p-5 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs text-muted uppercase tracking-widest">{inquiry.id}</p>
                                <h3 className="text-base font-semibold text-forest">{inquiry.name}</h3>
                                <p className="text-sm text-muted">{inquiry.company}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-xs text-muted">{inquiry.date}</span>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${inquiry.status === "New"
                                        ? "bg-gold/15 text-gold"
                                        : inquiry.status === "Replied"
                                            ? "bg-sage/20 text-sage"
                                            : "bg-forest/10 text-muted"
                                    }`}>
                                    {inquiry.status}
                                </span>
                            </div>
                        </div>
                        <div className="text-sm text-forest/90 space-y-1">
                            <p><strong>Email:</strong> {inquiry.email}</p>
                            <p><strong>Country:</strong> {inquiry.country}</p>
                        </div>
                        <p className="text-sm text-forest/80 border-t border-forest/5 pt-3">{inquiry.message}</p>
                        <div className="flex gap-2 pt-1">
                            <button className="text-xs font-bold bg-forest text-cream px-3 py-1.5 rounded-lg hover:bg-sage transition-colors">
                                Reply
                            </button>
                            <button className="text-xs font-bold border border-forest/15 text-muted px-3 py-1.5 rounded-lg hover:border-gold hover:text-gold transition-colors">
                                Mark Closed
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}

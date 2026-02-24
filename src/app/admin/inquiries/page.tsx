import { adminInquiries } from "@/lib/admin-data";

export const metadata = {
    title: "Admin Inquiries | BEWINGO",
};

export default function AdminInquiriesPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Inquiries</h2>
                <p className="text-sm text-muted mt-1">Review contact and bulk order requests from buyers.</p>
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
                            <span className="text-xs text-muted">{inquiry.date}</span>
                        </div>
                        <div className="text-sm text-forest/90">
                            <p>
                                <strong>Email:</strong> {inquiry.email}
                            </p>
                            <p>
                                <strong>Country:</strong> {inquiry.country}
                            </p>
                        </div>
                        <p className="text-sm text-forest/80">{inquiry.message}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}




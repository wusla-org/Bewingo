"use client";

import { useEffect, useState } from "react";
import { AdminInquiry } from "@/lib/admin-data";

export default function InquiriesManager() {
    const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInquiries();
    }, []);

    async function fetchInquiries() {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/inquiries');
            const data = await res.json();
            setInquiries(data);
        } catch (error) {
            console.error("Failed to fetch inquiries:", error);
        } finally {
            setLoading(false);
        }
    }

    async function handleStatusChange(inquiry: AdminInquiry, newStatus: string) {
        try {
            const updated = { ...inquiry, status: newStatus as any };
            const res = await fetch('/api/admin/inquiries', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });
            if (res.ok) {
                fetchInquiries();
            }
        } catch (error) {
            console.error("Failed to update inquiry status:", error);
        }
    }

    if (loading) return <div className="p-8 text-center text-muted">Loading inquiries...</div>;

    return (
        <section className="bg-white border border-forest/10 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-forest/10 flex items-center justify-between">
                <h3 className="text-base font-semibold text-forest">Recent Enquiries</h3>
                <span className="text-xs bg-gold/15 text-gold font-bold px-2.5 py-1 rounded-full">{inquiries.filter(i => i.status === 'New').length} New</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-cream/60 text-muted border-b border-forest/10">
                        <tr>
                            <th className="text-left font-semibold px-5 py-3">ID</th>
                            <th className="text-left font-semibold px-5 py-3">Contact</th>
                            <th className="text-left font-semibold px-5 py-3">Details</th>
                            <th className="text-left font-semibold px-5 py-3">Country</th>
                            <th className="text-left font-semibold px-5 py-3">Date</th>
                            <th className="text-left font-semibold px-5 py-3">Status</th>
                            <th className="text-left font-semibold px-5 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inq) => (
                            <tr key={inq.id} className="border-t border-forest/10 hover:bg-cream/20 transition-colors">
                                <td className="px-5 py-3 font-medium text-forest">{inq.id}</td>
                                <td className="px-5 py-3">
                                    <div className="font-semibold text-forest">{inq.name}</div>
                                    <div className="text-xs text-muted">{inq.company}</div>
                                    <div className="text-xs text-muted truncate max-w-[150px]">{inq.email}</div>
                                </td>
                                <td className="px-5 py-3">
                                    <div className="text-xs italic text-muted-foreground line-clamp-1">"{inq.message}"</div>
                                </td>
                                <td className="px-5 py-3 font-medium">{inq.country}</td>
                                <td className="px-5 py-3 text-muted">{inq.date}</td>
                                <td className="px-5 py-3">
                                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${inq.status === 'New' ? 'bg-gold/10 text-gold' :
                                            inq.status === 'Replied' ? 'bg-sage/10 text-sage' :
                                                'bg-forest/5 text-muted-foreground'
                                        }`}>
                                        {inq.status}
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    <select
                                        value={inq.status}
                                        onChange={(e) => handleStatusChange(inq, e.target.value)}
                                        className="text-[10px] border border-forest/10 rounded px-1 py-1 bg-white outline-none focus:border-gold"
                                    >
                                        <option value="New">New</option>
                                        <option value="Replied">Replied</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                        {inquiries.length === 0 && (
                            <tr>
                                <td colSpan={7} className="px-5 py-8 text-center text-muted italic">No inquiries found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

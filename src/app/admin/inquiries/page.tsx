import InquiriesManager from "@/components/admin/InquiriesManager";

export const metadata = {
    title: "Inquiries | Admin",
};

export default function AdminInquiriesPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Customer Inquiries</h2>
                <p className="text-sm text-muted mt-1">Manage B2B inquiries and supply chain requests.</p>
            </header>
            <InquiriesManager />
        </div>
    );
}

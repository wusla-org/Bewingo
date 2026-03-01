import ContentEditor from "@/components/admin/ContentEditor";

export const metadata = {
    title: "Site Content | Admin",
};

export default function AdminContentPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Site Content</h2>
                <p className="text-sm text-muted mt-1">Manage static text and images across the website.</p>
            </header>
            <ContentEditor />
        </div>
    );
}

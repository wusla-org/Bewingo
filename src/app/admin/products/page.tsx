import ProductManager from "@/components/admin/ProductManager";

export const metadata = {
    title: "Product Management | Admin",
};

export default function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-forest">Product Management</h2>
                <p className="text-sm text-muted mt-1">Add, edit, or remove products from your catalog.</p>
            </header>
            <ProductManager />
        </div>
    );
}

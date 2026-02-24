import ProductManager from "@/components/admin/ProductManager";

export const metadata = {
    title: "Admin Products | BEWINGO",
};

export default function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <h2 className="text-3xl font-bold text-forest">Products</h2>
                    <p className="text-sm text-muted mt-1">Manage pricing, inventory, publish status, and product images.</p>
                </div>
            </header>
            <ProductManager />
        </div>
    );
}




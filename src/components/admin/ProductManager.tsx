"use client";

import { useEffect, useMemo, useState } from "react";
import { adminProducts } from "@/lib/admin-data";

export default function ProductManager() {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const lowStockCount = useMemo(() => adminProducts.filter((p) => p.stock <= 20).length, []);
    const activeCount = useMemo(() => adminProducts.filter((p) => p.status === "Active").length, []);

    function handleImageUpload(files: FileList | null) {
        if (!files) return;
        const previews = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages((prev) => [...prev, ...previews]);
    }

    useEffect(() => {
        return () => {
            uploadedImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [uploadedImages]);

    return (
        <div className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Total Products</p>
                    <p className="text-2xl font-bold text-forest mt-1">{adminProducts.length}</p>
                </article>
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Active Products</p>
                    <p className="text-2xl font-bold text-forest mt-1">{activeCount}</p>
                </article>
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Low Stock</p>
                    <p className="text-2xl font-bold text-forest mt-1">{lowStockCount}</p>
                </article>
            </section>

            <section className="bg-white border border-forest/10 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-forest/10">
                    <h3 className="text-base font-semibold text-forest">Product List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-cream/60 text-muted">
                            <tr>
                                <th className="text-left font-semibold px-5 py-3">SKU</th>
                                <th className="text-left font-semibold px-5 py-3">Name</th>
                                <th className="text-left font-semibold px-5 py-3">Category</th>
                                <th className="text-left font-semibold px-5 py-3">Price</th>
                                <th className="text-left font-semibold px-5 py-3">Stock</th>
                                <th className="text-left font-semibold px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminProducts.map((product) => (
                                <tr key={product.id} className="border-t border-forest/10">
                                    <td className="px-5 py-3 font-medium text-forest">{product.id}</td>
                                    <td className="px-5 py-3">{product.name}</td>
                                    <td className="px-5 py-3">{product.category}</td>
                                    <td className="px-5 py-3">{product.price}</td>
                                    <td className="px-5 py-3">{product.stock}</td>
                                    <td className="px-5 py-3">{product.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="bg-white border border-forest/10 rounded-xl p-5">
                <h3 className="text-base font-semibold text-forest mb-4">Add / Edit Product</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Product name" />
                        <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="SKU" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Category" />
                        <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Price (Rs.)" />
                        <input className="border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Stock quantity" />
                    </div>
                    <textarea
                        rows={4}
                        className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold resize-none"
                        placeholder="Product description"
                    />

                    <div className="rounded-lg border border-dashed border-forest/25 p-4">
                        <p className="text-sm font-semibold text-forest">Product Images</p>
                        <p className="text-xs text-muted mt-1 mb-3">Upload one or more images (JPG/PNG/WebP). This will be connected to cloud storage in backend phase.</p>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e.target.files)}
                            className="block w-full text-sm text-muted file:mr-3 file:rounded-md file:border-0 file:bg-forest file:text-cream file:px-3 file:py-2 file:cursor-pointer"
                        />
                        {uploadedImages.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                                {uploadedImages.map((img, idx) => (
                                    <div key={`${img}-${idx}`} className="rounded-lg border border-forest/10 overflow-hidden bg-cream">
                                        <img src={img} alt={`Uploaded preview ${idx + 1}`} className="w-full h-24 object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button type="button" className="bg-forest text-cream text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald transition-colors">
                            Save Product
                        </button>
                        <button type="button" className="border border-forest/20 text-forest text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-gold hover:text-gold transition-colors">
                            Save as Draft
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

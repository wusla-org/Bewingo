"use client";

import { useEffect, useMemo, useState } from "react";
import { adminProducts } from "@/lib/admin-data";

export default function ProductManager() {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const publishedCount = useMemo(() => adminProducts.filter((p) => p.status === "Published").length, []);
    const draftCount = useMemo(() => adminProducts.filter((p) => p.status === "Draft").length, []);

    function handleImageUpload(files: FileList | null) {
        if (!files) return;
        const previews = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages((prev) => [...prev, ...previews]);
    }

    function removeImage(idx: number) {
        setUploadedImages((prev) => {
            URL.revokeObjectURL(prev[idx]);
            return prev.filter((_, i) => i !== idx);
        });
    }

    useEffect(() => {
        return () => {
            uploadedImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [uploadedImages]);

    return (
        <div className="space-y-6">
            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Total Products</p>
                    <p className="text-2xl font-bold text-forest mt-1">{adminProducts.length}</p>
                </article>
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Published</p>
                    <p className="text-2xl font-bold text-forest mt-1">{publishedCount}</p>
                </article>
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Drafts</p>
                    <p className="text-2xl font-bold text-forest mt-1">{draftCount}</p>
                </article>
            </section>

            {/* Product List */}
            <section className="bg-white border border-forest/10 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-forest/10">
                    <h3 className="text-base font-semibold text-forest">Product List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-cream/60 text-muted">
                            <tr>
                                <th className="text-left font-semibold px-5 py-3">ID</th>
                                <th className="text-left font-semibold px-5 py-3">Name</th>
                                <th className="text-left font-semibold px-5 py-3">Category</th>
                                <th className="text-left font-semibold px-5 py-3">Origin</th>
                                <th className="text-left font-semibold px-5 py-3">Grade</th>
                                <th className="text-left font-semibold px-5 py-3">MOQ</th>
                                <th className="text-left font-semibold px-5 py-3">Enquiries</th>
                                <th className="text-left font-semibold px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminProducts.map((product) => (
                                <tr key={product.id} className="border-t border-forest/10">
                                    <td className="px-5 py-3 font-medium text-forest">{product.id}</td>
                                    <td className="px-5 py-3">{product.name}</td>
                                    <td className="px-5 py-3">{product.category}</td>
                                    <td className="px-5 py-3">{product.origin}</td>
                                    <td className="px-5 py-3">{product.grade}</td>
                                    <td className="px-5 py-3">{product.moq}</td>
                                    <td className="px-5 py-3">{product.enquiryCount}</td>
                                    <td className="px-5 py-3">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${product.status === "Published"
                                                ? "bg-sage/20 text-sage"
                                                : "bg-forest/10 text-muted"
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Add / Edit Product Form */}
            <section className="bg-white border border-forest/10 rounded-xl p-5">
                <h3 className="text-base font-semibold text-forest mb-4">Add / Edit Product</h3>
                <form className="space-y-4">
                    {/* Row 1: Name + Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Product Name</label>
                            <input className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. Black Pepper Corn" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Category</label>
                            <select className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold bg-white transition-colors text-forest/80">
                                <option value="">— Select Category —</option>
                                <option>Signature Spices</option>
                                <option>Artisanal Honey</option>
                                <option>Dry Fruits</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 2: Origin + Grade */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Origin</label>
                            <input className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. Wayanad, Kerala" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Grade / Quality</label>
                            <input className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. TGSEB / FAQ" />
                        </div>
                    </div>

                    {/* Row 3: MOQ + Packing Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Minimum Order Quantity (MOQ)</label>
                            <input className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. 500 kg" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Packing Options</label>
                            <input className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. 25 kg, 50 kg jute bags" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Product Description</label>
                        <textarea
                            rows={4}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold resize-none transition-colors"
                            placeholder="Describe the product — aroma, usage, certifications, export highlights..."
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="rounded-lg border border-dashed border-forest/25 p-5 bg-cream/30">
                        <p className="text-sm font-semibold text-forest mb-1">Product Images</p>
                        <p className="text-xs text-muted mb-4">Upload one or more images (JPG / PNG / WebP). Images will be shown on the product detail page.</p>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e.target.files)}
                            className="block w-full text-sm text-muted file:mr-3 file:rounded-md file:border-0 file:bg-forest file:text-cream file:px-4 file:py-2 file:text-xs file:font-bold file:cursor-pointer hover:file:bg-sage"
                        />
                        {uploadedImages.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                                {uploadedImages.map((img, idx) => (
                                    <div key={`${img}-${idx}`} className="relative group rounded-lg border border-forest/10 overflow-hidden bg-white">
                                        <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-28 object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(idx)}
                                            className="absolute top-1 right-1 bg-white/90 text-forest rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Status + Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                        <select className="border border-forest/15 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gold bg-white text-forest/80">
                            <option>Status: Published</option>
                            <option>Status: Draft</option>
                        </select>
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

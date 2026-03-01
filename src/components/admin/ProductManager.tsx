"use client";

import { useEffect, useState, useRef } from "react";
import { AdminProduct } from "@/lib/admin-data";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";

export default function ProductManager() {
    const [products, setProducts] = useState<AdminProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<AdminProduct>>({
        status: "Published"
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/products');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    }

    async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const form = new FormData();
        form.append('file', file);

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: form,
            });
            const data = await res.json();
            if (data.url) {
                setFormData(prev => ({ ...prev, image: data.url }));
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setUploading(false);
        }
    }

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        const method = formData.id ? 'PUT' : 'POST';
        try {
            // If new product, generate a simple ID if not present
            const payload = { ...formData };
            if (!payload.id) {
                payload.id = `prod_${Math.random().toString(36).substring(2, 9)}`;
            }

            const res = await fetch('/api/admin/products', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (res.ok) {
                setFormData({ status: "Published" });
                fetchProducts();
            }
        } catch (error) {
            console.error("Failed to save product:", error);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this product?")) return;
        try {
            const res = await fetch(`/api/admin/products?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchProducts();
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    }

    const publishedCount = products.filter((p) => p.status === "Published").length;
    const draftCount = products.filter((p) => p.status === "Draft").length;

    if (loading) return <div className="p-8 text-center text-muted">Loading products...</div>;

    return (
        <div className="space-y-6">
            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-white border border-forest/10 rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-muted">Total Products</p>
                    <p className="text-2xl font-bold text-forest mt-1">{products.length}</p>
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
                <div className="px-5 py-4 border-b border-forest/10 flex justify-between items-center">
                    <h3 className="text-base font-semibold text-forest">Product List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-cream/60 text-muted">
                            <tr>
                                <th className="text-left font-semibold px-5 py-3">Product</th>
                                <th className="text-left font-semibold px-5 py-3">Category</th>
                                <th className="text-left font-semibold px-5 py-3">Origin</th>
                                <th className="text-left font-semibold px-5 py-3">Quality</th>
                                <th className="text-left font-semibold px-5 py-3">Status</th>
                                <th className="text-left font-semibold px-5 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-t border-forest/10 hover:bg-cream/20 transition-colors">
                                    <td className="px-5 py-3">
                                        <div className="flex items-center gap-3">
                                            {product.image ? (
                                                <img src={product.image} className="w-10 h-10 rounded-lg object-cover border border-forest/5" alt={product.name} />
                                            ) : (
                                                <div className="w-10 h-10 rounded-lg bg-forest/5 flex items-center justify-center">
                                                    <ImageIcon className="w-5 h-5 text-muted" />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-bold text-forest">{product.name}</p>
                                                <p className="text-[10px] text-muted font-mono">{product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 text-muted">{product.category}</td>
                                    <td className="px-5 py-3 text-muted">{product.origin}</td>
                                    <td className="px-5 py-3 font-medium text-forest">{product.grade}</td>
                                    <td className="px-5 py-3">
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${product.status === "Published"
                                            ? "bg-emerald/10 text-emerald"
                                            : "bg-forest/5 text-muted"
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 flex gap-2">
                                        <button onClick={() => setFormData(product)} className="text-forest hover:text-gold font-bold transition-colors">Edit</button>
                                        <button onClick={() => handleDelete(product.id)} className="text-red-800 hover:text-red-900 font-bold transition-colors">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Add / Edit Product Form */}
            <section className="bg-white border border-forest/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-forest mb-6 border-b border-forest/5 pb-4">
                    {formData.id ? 'Edit Industrial Product' : 'Onboard New Product'}
                </h3>
                <form className="space-y-8" onSubmit={handleSave}>
                    {/* Image Upload Area */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted">Product Imagery</label>
                        <div className="flex items-start gap-6">
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="w-32 h-32 border-2 border-dashed border-forest/10 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gold hover:bg-gold/5 transition-all bg-cream/30 group"
                            >
                                {uploading ? (
                                    <Loader2 className="w-6 h-6 text-gold animate-spin" />
                                ) : formData.image ? (
                                    <img src={formData.image} className="w-full h-full object-cover rounded-2xl" alt="Preview" />
                                ) : (
                                    <>
                                        <Upload className="w-6 h-6 text-muted group-hover:text-gold" />
                                        <span className="text-[10px] font-bold text-muted group-hover:text-gold uppercase tracking-tighter">Upload</span>
                                    </>
                                )}
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Image URL (Optional)</label>
                                    <input
                                        value={formData.image || ''}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full border border-forest/10 rounded-lg px-4 py-2.5 text-xs outline-none focus:border-gold transition-colors"
                                        placeholder="Direct URL or upload above..."
                                    />
                                </div>
                                <p className="text-[10px] text-muted leading-relaxed">
                                    Recommended: High-resolution PNG or JPG with clean background. <br />
                                    Maximum file size: 5MB.
                                </p>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Product Title</label>
                            <input
                                required
                                value={formData.name || ''}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors font-bold text-forest"
                                placeholder="e.g. Tellicherry Black Pepper"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Category / Industry</label>
                            <input
                                required
                                value={formData.category || ''}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                                placeholder="e.g. Spices & Condiments"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Harvest Origin</label>
                            <input
                                value={formData.origin || ''}
                                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                                placeholder="e.g. Idukki, Kerala"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Technical Grade</label>
                            <input
                                value={formData.grade || ''}
                                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                                placeholder="e.g. TGSEB 4.75mm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Export MOQ</label>
                            <input
                                value={formData.moq || ''}
                                onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                                placeholder="e.g. 5 Metric Tons"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Standard Packing</label>
                            <input
                                value={formData.packing || ''}
                                onChange={(e) => setFormData({ ...formData, packing: e.target.value })}
                                className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                                placeholder="e.g. 25kg PP / Jute Bags"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-muted">Product Badge / Tagline</label>
                        <input
                            value={formData.badge || ''}
                            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
                            placeholder="e.g. High Piperine Content"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase tracking-widest text-muted">Specification Summary</label>
                        <textarea
                            rows={3}
                            value={formData.description || ''}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border border-forest/15 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors resize-none"
                            placeholder="Detailed technical specs for buyers..."
                        />
                    </div>

                    {/* Status + Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-forest/5">
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                            className="border border-forest/10 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest outline-none focus:border-gold bg-cream/30 text-forest/80 cursor-pointer"
                        >
                            <option value="Published">Status: Published</option>
                            <option value="Draft">Status: Draft</option>
                        </select>
                        <button type="submit" className="bg-forest text-cream text-[11px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl hover:bg-emerald transition-all shadow-lg active:scale-95">
                            {formData.id ? 'Save Changes' : 'Publish Product'}
                        </button>
                        {formData.id && (
                            <button
                                type="button"
                                onClick={() => setFormData({ status: "Published" })}
                                className="border border-forest/20 text-forest text-[11px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl hover:border-gold hover:text-gold transition-all"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </section>
        </div>
    );
}

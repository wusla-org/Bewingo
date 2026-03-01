"use client";

import { useState } from "react";
import { UserPlus, Mail, Shield, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function UserManagement() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("admin");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    async function handleInvite(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch('/api/admin/invite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, role }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to send invitation");

            setStatus({ type: 'success', message: `Invitation sent to ${email}!` });
            setEmail("");
        } catch (err: any) {
            setStatus({ type: 'error', message: err.message });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black text-forest tracking-tighter uppercase">Team Management</h2>
                <p className="text-sm text-muted mt-2 font-medium">Add and manage administrative access to the BEWINGO project.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Invite Form */}
                <section className="md:col-span-2 bg-white border border-forest/10 rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center">
                            <UserPlus className="w-5 h-5 text-forest" />
                        </div>
                        <h3 className="text-lg font-bold text-forest">Invite Team Member</h3>
                    </div>

                    <form onSubmit={handleInvite} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-cream/20 border border-forest/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:border-gold transition-all"
                                    placeholder="colleague@bewingo.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Access Level</label>
                            <div className="relative">
                                <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full bg-cream/20 border border-forest/10 rounded-2xl pl-12 pr-10 py-3.5 text-sm outline-none focus:border-gold transition-all appearance-none cursor-pointer"
                                >
                                    <option value="admin">Administrator (Full Access)</option>
                                    <option value="editor">Content Editor (Limited)</option>
                                </select>
                            </div>
                        </div>

                        {status && (
                            <div className={`p-4 rounded-2xl flex items-center gap-3 ${status.type === 'success' ? 'bg-emerald/10 text-emerald border border-emerald/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                }`}>
                                {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <span className="text-xs font-bold">{status.message}</span>
                            </div>
                        )}

                        <button
                            disabled={loading}
                            type="submit"
                            className="bg-forest text-cream font-black uppercase tracking-[0.2em] text-[11px] px-8 py-4 rounded-2xl hover:bg-gold hover:text-black transition-all shadow-lg active:scale-95 flex items-center gap-3 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Invitation"}
                        </button>
                    </form>
                </section>

                {/* Info Box */}
                <section className="space-y-4">
                    <div className="bg-forest/5 border border-forest/5 rounded-3xl p-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-forest mb-4">Security Policy</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-xs leading-relaxed text-muted font-medium">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                <span>Invitations expire after 24 hours.</span>
                            </li>
                            <li className="flex gap-3 text-xs leading-relaxed text-muted font-medium">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                <span>Invited users will receive a link to set their password.</span>
                            </li>
                            <li className="flex gap-3 text-xs leading-relaxed text-muted font-medium">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                <span>Administrators can revoke access at any time through the Supabase dashboard.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

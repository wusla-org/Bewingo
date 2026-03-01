"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            setError(err.message || "Failed to log in");
        } finally {
            setLoading(false);
        }
    }

    async function handleOAuthLogin(provider: 'google' | 'apple') {
        setLoading(true);
        setError(null);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/admin`,
                },
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message || `Failed to log in with ${provider}`);
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest/20 via-black to-black">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest/30 border border-forest/20 mb-6 group hover:border-gold/30 transition-all duration-500">
                        <Lock className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tighter mb-2">
                        BEWINGO <span className="text-gold">ADMIN</span>
                    </h1>
                    <p className="text-muted text-sm font-medium tracking-wide uppercase">
                        Industrial Portal Access
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-forest/10 backdrop-blur-xl border border-forest/15 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                    {/* Decorative Gradient */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-gold to-forest opacity-50" />

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">
                                Corporate Email
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-gold transition-colors" />
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black/40 border border-forest/20 rounded-xl pl-12 pr-4 py-4 text-sm text-white outline-none focus:border-gold/50 transition-all placeholder:text-muted/50"
                                    placeholder="admin@bewingo.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">
                                Access Key
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-gold transition-colors" />
                                <input
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/40 border border-forest/20 rounded-xl pl-12 pr-4 py-4 text-sm text-white outline-none focus:border-gold/50 transition-all placeholder:text-muted/50"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold p-4 rounded-xl animate-shake">
                                {error}
                            </div>
                        )}

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-forest text-cream font-black uppercase tracking-[0.25em] text-[11px] py-4 rounded-xl hover:bg-gold hover:text-black transition-all shadow-xl shadow-forest/10 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 group font-primary"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    Authorize Access
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Social Login Divider */}
                    <div className="relative my-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-forest/20"></div>
                        </div>
                        <span className="relative px-4 bg-transparent text-[10px] font-black uppercase tracking-[0.3em] text-muted/50">
                            Or Authenticate Via
                        </span>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => handleOAuthLogin('google')}
                            className="flex items-center justify-center gap-3 bg-white/5 border border-forest/15 hover:border-gold/30 hover:bg-white/10 py-3.5 rounded-xl transition-all group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-cream/70 group-hover:text-gold transition-colors">Google</span>
                        </button>
                        <button
                            onClick={() => handleOAuthLogin('apple')}
                            className="flex items-center justify-center gap-3 bg-white/5 border border-forest/15 hover:border-gold/30 hover:bg-white/10 py-3.5 rounded-xl transition-all group"
                        >
                            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05 1.61-3.21 1.61-1.14 0-1.52-.69-2.81-.69-1.29 0-1.74.67-2.81.67-1.07 0-2.05-.61-3.12-1.59-2.18-1.98-3.32-5.63-3.32-8.15 0-3.83 2.41-5.88 4.71-5.88 1.19 0 2.1.75 2.85.75.76 0 1.83-.81 3.1-.81 1.09 0 2.45.61 3.25 1.77-2.68 1.51-2.22 5.31.55 6.45-.66 1.74-1.53 3.45-2.2 4.09zM12.03 7.25c-.09-2.23 1.85-4.14 3.93-4.25.17 2.45-2.08 4.49-4 4.25z" />
                            </svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-cream/70 group-hover:text-gold transition-colors">Apple</span>
                        </button>
                    </div>
                </div>

                {/* Footer Info */}
                <p className="text-center mt-8 text-[10px] text-muted font-bold uppercase tracking-widest opacity-50">
                    Secure Industrial Backend • 2026 Bewingo
                </p>
            </div>
        </main>
    );
}

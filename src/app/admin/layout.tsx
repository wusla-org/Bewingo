import type { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen bg-cream lg:flex">
            <AdminSidebar />
            <section className="flex-1 p-6 lg:p-10">{children}</section>
        </main>
    );
}




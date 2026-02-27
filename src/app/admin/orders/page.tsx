import { redirect } from "next/navigation";

// Orders no longer exist in the export company model.
// Redirect any visit to this URL to the Enquiries page.
export default function AdminOrdersPage() {
    redirect("/admin/inquiries");
}

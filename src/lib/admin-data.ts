export type AdminMetric = {
    label: string;
    value: string;
    delta: string;
};

export type AdminProduct = {
    id: string;
    name: string;
    category: string;
    price: string;
    stock: number;
    status: "Active" | "Draft";
};

export type AdminOrder = {
    id: string;
    customer: string;
    date: string;
    total: string;
    status: "Pending" | "Processing" | "Shipped" | "Delivered";
};

export type AdminInquiry = {
    id: string;
    name: string;
    company: string;
    email: string;
    country: string;
    message: string;
    date: string;
};

export type AdminActivity = {
    id: string;
    text: string;
    date: string;
    type: "product" | "order" | "inquiry";
};

export const adminMetrics: AdminMetric[] = [
    { label: "Revenue (30d)", value: "Rs. 2,48,000", delta: "+12.4%" },
    { label: "Orders (30d)", value: "184", delta: "+7.8%" },
    { label: "New Inquiries", value: "29", delta: "+18.0%" },
    { label: "Low Stock SKUs", value: "6", delta: "-2.0%" },
];

export const adminProducts: AdminProduct[] = [
    { id: "SKU-101", name: "Black Pepper Corn 100g", category: "Spices", price: "Rs. 199", stock: 120, status: "Active" },
    { id: "SKU-102", name: "Cardamom Premium 8mm 100g", category: "Spices", price: "Rs. 499", stock: 34, status: "Active" },
    { id: "SKU-103", name: "Wild Forest Honey 500g", category: "Honey", price: "Rs. 549", stock: 18, status: "Active" },
    { id: "SKU-104", name: "Cashew W180 250g", category: "Dry Fruits", price: "Rs. 367", stock: 0, status: "Draft" },
];

export const adminOrders: AdminOrder[] = [
    { id: "ORD-2201", customer: "Aroma Foods LLC", date: "2026-02-17", total: "Rs. 24,500", status: "Processing" },
    { id: "ORD-2200", customer: "Global Spice Traders", date: "2026-02-16", total: "Rs. 11,200", status: "Shipped" },
    { id: "ORD-2199", customer: "KVR Supermart", date: "2026-02-16", total: "Rs. 8,960", status: "Pending" },
    { id: "ORD-2198", customer: "Heritage Foods", date: "2026-02-15", total: "Rs. 32,100", status: "Delivered" },
];

export const adminInquiries: AdminInquiry[] = [
    {
        id: "INQ-501",
        name: "Daniel George",
        company: "DG Imports",
        email: "daniel@dgimports.com",
        country: "United Arab Emirates",
        message: "Need MOQ and bulk quote for black pepper and cardamom.",
        date: "2026-02-19",
    },
    {
        id: "INQ-500",
        name: "Riya Sharma",
        company: "Riya Naturals",
        email: "riya@riyanaturals.in",
        country: "India",
        message: "Looking for private label options for spice gift boxes.",
        date: "2026-02-18",
    },
];

export const adminActivities: AdminActivity[] = [
    { id: "ACT-1", text: "Updated price for Cardamom Premium 8mm", date: "2026-02-20 10:30", type: "product" },
    { id: "ACT-2", text: "Order ORD-2201 moved to Processing", date: "2026-02-20 09:45", type: "order" },
    { id: "ACT-3", text: "New bulk inquiry from DG Imports", date: "2026-02-19 17:20", type: "inquiry" },
];




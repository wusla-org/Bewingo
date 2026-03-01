export type AdminMetric = {
    label: string;
    value: string;
    delta: string;
};

export type AdminProduct = {
    id: string;
    name: string;
    description?: string;
    category: string;
    origin: string;
    grade: string;
    moq: string;
    packing: string;
    enquiryCount: number;
    status: "Published" | "Draft";
    image?: string;
    badge?: string;
};

export type AdminInquiry = {
    id: string;
    name: string;
    company: string;
    email: string;
    country: string;
    phone?: string;
    volume?: string;
    port?: string;
    incoterms?: string;
    message: string;
    date: string;
    status: "New" | "Replied" | "Closed";
};

export type AdminActivity = {
    id: string;
    text: string;
    date: string;
    type: "product" | "inquiry";
};

export type HomeContent = {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        ctaText: string;
    };
    about: {
        title: string;
        description1: string;
        description2: string;
    };
    certifications: {
        title: string;
        logos: string[];
    };
    journey: {
        title: string;
        subtitle: string;
        steps: { title: string; text: string; icon: string }[];
    };
};

export type StoryContent = {
    hero: {
        badge: string;
        title: string;
        description: string;
    };
    mission: {
        title: string;
        text1: string;
        text2: string;
    };
    cards: { icon: string; title: string; text: string }[];
};

export type SourcingContent = {
    hero: {
        badge: string;
        title: string;
        description: string;
    };
    process: { icon: string; title: string; text: string }[];
    banner: {
        title: string;
        text: string;
    };
};

export type GlobalContent = {
    footer: {
        companyDesc: string;
    };
    contactInfo: {
        email: string;
        phone: string;
        whatsapp: string;
        address: string;
    };
    socialLinks: {
        instagram: string;
        facebook: string;
        twitter: string;
        linkedin: string;
    };
};

export type SiteContent = {
    home: HomeContent;
    story: StoryContent;
    sourcing: SourcingContent;
    global: GlobalContent;
};

export const adminMetrics: AdminMetric[] = [
    { label: "Total Products", value: "24", delta: "+3 this month" },
    { label: "Published Products", value: "18", delta: "+2 this month" },
    { label: "New Enquiries", value: "29", delta: "+18.0%" },
    { label: "Pending Replies", value: "11", delta: "-2 from last week" },
];

export const adminProducts: AdminProduct[] = [
    {
        id: "PRD-101",
        name: "Black Pepper Corn",
        category: "Spices",
        origin: "Wayanad, Kerala",
        grade: "TGSEB / FAQ",
        moq: "500 kg",
        packing: "25 kg, 50 kg bags",
        enquiryCount: 14,
        status: "Published",
    },
    {
        id: "PRD-102",
        name: "Cardamom Premium 8mm",
        category: "Spices",
        origin: "Idukki, Kerala",
        grade: "8mm Bold",
        moq: "100 kg",
        packing: "10 kg, 25 kg bags",
        enquiryCount: 9,
        status: "Published",
    },
    {
        id: "PRD-103",
        name: "Wild Forest Honey",
        category: "Honey",
        origin: "Silent Valley, Kerala",
        grade: "Raw / Unfiltered",
        moq: "200 kg",
        packing: "250 ml, 500 ml, 5 L drums",
        enquiryCount: 6,
        status: "Published",
    },
    {
        id: "PRD-104",
        name: "Cashew W180",
        category: "Dry Fruits",
        origin: "Kannur, Kerala",
        grade: "W180 (Jumbo)",
        moq: "1 MT",
        packing: "10 kg, 25 kg vacuum packs",
        enquiryCount: 3,
        status: "Draft",
    },
];

export const adminInquiries: AdminInquiry[] = [
    {
        id: "INQ-501",
        name: "Daniel George",
        company: "DG Imports",
        email: "daniel@dgimports.com",
        country: "United Arab Emirates",
        phone: "+971 50 123 4567",
        volume: "5 MT",
        port: "Jebel Ali",
        incoterms: "CIF",
        message: "Need bulk quote for black pepper and cardamom.",
        date: "2026-02-19",
        status: "New",
    },
    {
        id: "INQ-500",
        name: "Riya Sharma",
        company: "Riya Naturals",
        email: "riya@riyanaturals.in",
        country: "India",
        phone: "+91 98765 43210",
        message: "Looking for private label options for spice gift boxes.",
        date: "2026-02-18",
        status: "Replied",
    },
    {
        id: "INQ-499",
        name: "Ahmed Al Farsi",
        company: "Gulf Foods Trading",
        email: "ahmed@gulffoods.ae",
        country: "Oman",
        phone: "+968 9123 4567",
        volume: "10 MT",
        port: "Sohar",
        incoterms: "FOB",
        message: "Interested in cardamom and honey for bulk export.",
        date: "2026-02-17",
        status: "New",
    },
];

export const adminActivities: AdminActivity[] = [
    { id: "ACT-1", text: "Updated grade info for Cardamom Premium 8mm", date: "2026-02-20 10:30", type: "product" },
    { id: "ACT-2", text: "New bulk enquiry from DG Imports (UAE)", date: "2026-02-20 09:45", type: "inquiry" },
    { id: "ACT-3", text: "Product 'Cashew W180' moved to Draft", date: "2026-02-19 17:20", type: "product" },
    { id: "ACT-4", text: "Replied to Gulf Foods Trading enquiry", date: "2026-02-19 15:10", type: "inquiry" },
];

export const initialSiteContent: SiteContent = {
    home: {
        hero: {
            badge: "Global Export Partner",
            title: "PREMIUM KERALA SPICES",
            subtitle: "Direct from the lush plantations of Wayanad and Idukki to the global market.",
            ctaText: "ENQUIRE NOW",
        },
        about: {
            title: "About BEWINGO",
            description1: "BEWINGO spices are top grade, hand-picked by experts and processed under strict hygienic conditions and careful supervision which leads to unequalled savory goodness to your cooking.",
            description2: "Though it is one mission but not adopted like business, the product is entirely pure with its quality control and is under the strict supervision of family. This is the reason that no other products of the same type could take the place of this.",
        },
        certifications: {
            title: "OUR GLOBAL CERTIFICATIONS",
            logos: [
                "/certifications/fssai.png",
                "/certifications/iso.png",
                "/certifications/haccp.png",
                "/certifications/spices-board.png",
                "/certifications/gmp.png",
            ]
        },
        journey: {
            title: "PLANTATION TO PORT",
            subtitle: "Our Transparent Export Supply Chain",
            steps: [
                { title: "Sourcing", text: "Directly from the farm gates of Idukki and Wayanad.", icon: "Leaf" },
                { title: "Processing", text: "State-of-the-art cleaning, grading, and moisture control.", icon: "ShieldCheck" },
                { title: "Logistics", text: "Standardized packaging for sea and air freight.", icon: "Globe" },
                { title: "Delivery", text: "Trusted global distribution network serving 24+ countries.", icon: "Users" },
            ]
        },
    },
    story: {
        hero: {
            badge: "About BEWINGO",
            title: "Our Story",
            description: "From local sourcing in Kerala to trusted delivery across markets, BEWINGO is built on quality, transparency, and long-term farmer partnerships.",
        },
        mission: {
            title: "A simple mission: better spices, fair trade",
            text1: "BEWINGO started with one goal: connect customers to authentic spice quality while giving farmers a fair and stable market.",
            text2: "Every batch is carefully selected, cleaned, and packed to preserve aroma, freshness, and purity. We grow with every order, while keeping quality standards consistent.",
        },
        cards: [
            { icon: "Leaf", title: "Natural Quality", text: "No artificial preservatives. Clean and traceable sourcing." },
            { icon: "Users", title: "Farmer Partnerships", text: "Direct relationships with grower communities." },
            { icon: "ShieldCheck", title: "Quality Checks", text: "Each lot is verified before dispatch." },
        ],
    },
    sourcing: {
        hero: {
            badge: "Industrial Supply Chain",
            title: "Quality Sourcing",
            description: "Our sourcing strategy is built on direct farmer partnerships and rigorous industrial quality benchmarks. We ensure consistent supply for global export mandates.",
        },
        process: [
            { icon: "Leaf", title: "Direct Sourcing", text: "We work directly with farmers and avoid unnecessary middle layers." },
            { icon: "Handshake", title: "Fair Partnerships", text: "Long-term relationships with fair pricing and consistent demand." },
            { icon: "ShieldCheck", title: "Quality Standards", text: "Lot checks, moisture control, and clean packaging before dispatch." },
        ],
        banner: {
            title: "Bulk Sourcing & Supply Chain Support",
            text: "Share your annual requirements or spot-buy needs. Our trade team will provide lot-sampled quotes and logistics timelines.",
        },
    },
    global: {
        footer: {
            companyDesc: "Exporting premium Kerala agro-products to global markets. We specialize in bulk supply chains, industrial quality standards, and reliable international logistics.",
        },
        contactInfo: {
            email: "trade@bewingo.com",
            phone: "+91 7012 228 978",
            whatsapp: "+91 7012 228 978",
            address: "6/345 Export Road, Kochi Port, Kerala, India",
        },
        socialLinks: {
            instagram: "https://instagram.com/bewingo",
            facebook: "https://facebook.com/bewingo",
            twitter: "https://twitter.com/bewingo",
            linkedin: "https://linkedin.com/company/bewingo",
        },
    },
};

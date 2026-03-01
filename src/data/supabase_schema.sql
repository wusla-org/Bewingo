-- Create Products Table
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    origin TEXT,
    grade TEXT,
    moq TEXT,
    packing TEXT,
    status TEXT DEFAULT 'Draft',
    image TEXT,
    badge TEXT,
    enquiry_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Inquiries Table
CREATE TABLE inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    country TEXT,
    phone TEXT,
    volume TEXT,
    port TEXT,
    incoterms TEXT,
    message TEXT,
    status TEXT DEFAULT 'New',
    date TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Site Content Table
CREATE TABLE site_content (
    id TEXT PRIMARY KEY DEFAULT 'main',
    content JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS (Optional but recommended - currently setting to public for simplicity as requested)
-- Note: Replace with proper policies for production.
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON products FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON products FOR ALL USING (true);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON inquiries FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON inquiries FOR ALL USING (true);

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON site_content FOR ALL USING (true);

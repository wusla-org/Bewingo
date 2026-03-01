import { supabase } from './supabase';
import { SiteContent, AdminProduct, AdminInquiry } from './admin-data';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'site-content.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Helper to migrate local JSON to Supabase if needed
async function migrateIfNeeded() {
    // This is a simple flag check or just run once
}

export async function getSiteContent(): Promise<SiteContent> {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('id', 'main')
        .single();

    if (error || !data) {
        // Fallback to local file for initial migration
        try {
            const fileData = await fs.readFile(CONTENT_FILE, 'utf8');
            const content = JSON.parse(fileData);
            await saveSiteContent(content);
            return content;
        } catch {
            return {} as SiteContent;
        }
    }
    return data.content;
}

export async function saveSiteContent(content: SiteContent) {
    const { error } = await supabase
        .from('site_content')
        .upsert({ id: 'main', content, updated_at: new Date().toISOString() });

    if (error) console.error("Error saving site content:", error);
}

export async function getProducts(): Promise<AdminProduct[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
        // Fallback to local file for initial migration
        try {
            const fileData = await fs.readFile(PRODUCTS_FILE, 'utf8');
            const products = JSON.parse(fileData);
            if (products.length > 0) {
                await saveProducts(products);
                return products as AdminProduct[];
            }
        } catch {
            return [];
        }
    }
    return (data as AdminProduct[]) || [];
}

export async function saveProducts(products: AdminProduct[]) {
    // Note: This replaces all products in local JSON logic, 
    // but in Supabase we should usually do individual upserts.
    // For now, to keep compatibility with existing API:
    const { error } = await supabase
        .from('products')
        .upsert(products);

    if (error) console.error("Error saving products:", error);
}

export async function getInquiries(): Promise<AdminInquiry[]> {
    const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
        // Fallback to local file for initial migration
        try {
            const fileData = await fs.readFile(INQUIRIES_FILE, 'utf8');
            const inquiries = JSON.parse(fileData);
            if (inquiries.length > 0) {
                await saveInquiries(inquiries);
                return inquiries as AdminInquiry[];
            }
        } catch {
            return [];
        }
    }
    return (data as AdminInquiry[]) || [];
}

export async function saveInquiries(inquiries: AdminInquiry[]) {
    const { error } = await supabase
        .from('inquiries')
        .upsert(inquiries);

    if (error) console.error("Error saving inquiries:", error);
}

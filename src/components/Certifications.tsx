import React from 'react';

const certifications = [
    { name: "FSSAI", description: "Food Safety & Standards Authority of India", label: "Certified" },
    { name: "APEDA", description: "Agro Product Export Development Authority", label: "Registered" },
    { name: "SPICE BOARD", description: "Ministry of Commerce, Govt. of India", label: "License Holder" },
    { name: "ISO 22000", description: "Food Safety Management Standards", label: "Compliant" },
];

export default function Certifications() {
    return (
        <section className="bg-white py-12 border-b border-forest/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="md:max-w-xs">
                        <h2 className="text-xl font-bold text-forest mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Trade Compliance
                        </h2>
                        <p className="text-xs text-muted leading-relaxed uppercase tracking-widest font-semibold">
                            Global export standards & official certifications.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {certifications.map((item) => (
                            <div key={item.name} className="flex flex-col p-4 bg-cream/30 border border-forest/5 rounded-sm">
                                <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{item.label}</span>
                                <h3 className="text-base font-bold text-forest mb-1">{item.name}</h3>
                                <p className="text-[9px] text-muted font-semibold uppercase tracking-wider">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

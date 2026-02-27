import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
    return (
        <div className="h-full flex flex-col items-start text-left p-8 border-l border-forest/10 bg-white/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-forest/5 mb-6">
                <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-forest mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
            <p className="text-sm text-muted leading-relaxed font-medium">{description}</p>
        </div>
    );
}




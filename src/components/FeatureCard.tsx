import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
    return (
        <div className="h-full flex flex-col items-center text-center p-6 rounded-xl border border-forest/6 bg-white/40 hover:bg-white transition-colors duration-200">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5">
                <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold text-forest mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
    );
}




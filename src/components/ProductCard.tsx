import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    originalPrice: string;
    currentPrice: string;
    image: string;
    badge?: string;
}

export default function ProductCard({
    id,
    title,
    description,
    originalPrice,
    currentPrice,
    image,
    badge,
}: ProductCardProps) {
    return (
        <article className="group h-full flex flex-col bg-white rounded-xl overflow-hidden border border-forest/5 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(11,34,26,0.10)] transition-all duration-300">
            {/* Image */}
            <div className="relative overflow-hidden aspect-square bg-cream">
                {badge && (
                    <span className="absolute top-3 left-3 z-10 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        {badge}
                    </span>
                )}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">{description}</p>
                    <h3 className="text-base font-semibold text-forest leading-snug min-h-12 group-hover:text-sage transition-colors">
                        {title}
                    </h3>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted line-through">{originalPrice}</span>
                    <span className="text-lg font-bold text-forest">{currentPrice}</span>
                </div>

                <Link
                    href={`/product/${id}`}
                    className="mt-auto flex items-center justify-center gap-2 w-full bg-forest text-cream text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-sage transition-colors duration-200"
                >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                </Link>
            </div>
        </article>
    );
}




import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    image?: string;
    price?: string;
    category?: string;
    features?: string[];
    focus?: string;
    ctaLink?: string;
}

const ProductCard = ({ title, description, image, price, category, features, focus, ctaLink = "https://wa.me/923180527326" }: ProductCardProps) => {
    return (
        <Card className="flex flex-col h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 border-none bg-secondary/30 backdrop-blur-sm">
            <div className="relative aspect-video overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold">ZUNO</span>
                    </div>
                )}
                {category && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                )}
            </div>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {features && features.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent/80">Includes:</p>
                        <ul className="space-y-1.5">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {focus && (
                    <div className="pt-2">
                        <p className="text-sm font-semibold italic text-foreground">
                            <span className="text-accent">Focus:</span> {focus}
                        </p>
                    </div>
                )}

                {price && (
                    <p className="mt-4 text-xl font-black text-accent">
                        {price}
                    </p>
                )}
            </CardContent>
            <CardFooter>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="ghost" className="w-full group/btn hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 py-6">
                        Inquire Now
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;

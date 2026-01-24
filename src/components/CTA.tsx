import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const CTA = ({
  headline = "Grow with confidence.",
  description = "Ready to transform how you market, sell, and scale? Let's start with strategy.",
  buttonText = "Start with Strategy",
  variant = "light",
}: CTAProps) => {
  const isLight = variant === "light";

  return (
    <section
      className={`py-24 md:py-32 relative overflow-hidden ${
        isLight ? "bg-background" : "bg-foreground"
      }`}
    >
      {/* Background decoration */}
      <div className={`absolute inset-0 ${
        isLight 
          ? "bg-gradient-to-br from-secondary/50 via-background to-accent/5" 
          : "bg-gradient-to-br from-charcoal via-charcoal-light/10 to-charcoal"
      }`} />
      
      {/* Top border */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent ${
        isLight ? "via-border" : "via-background/20"
      } to-transparent`} />

      <div className="section-padding relative z-10">
        <div className="container-narrow text-center">
          <div className="space-y-8">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
                isLight ? "text-foreground" : "text-background"
              }`}
            >
              {headline}
            </h2>
            
            <p
              className={`text-lg max-w-xl mx-auto leading-relaxed ${
                isLight ? "text-muted-foreground" : "text-background/70"
              }`}
            >
              {description}
            </p>

            <Button
              variant={isLight ? "hero" : "heroOutline"}
              size="lg"
              className={`group text-base px-8 py-6 ${
                !isLight && "border-background text-background hover:bg-background hover:text-foreground"
              }`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

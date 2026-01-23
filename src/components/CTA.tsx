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
  const isDark = variant === "dark";

  return (
    <section
      className={`section-spacing ${
        isDark ? "bg-primary text-primary-foreground" : "bg-secondary/50"
      }`}
    >
      <div className="section-padding">
        <div className="container-narrow text-center">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {headline}
          </h2>
          <p
            className={`text-lg max-w-xl mx-auto mb-10 ${
              isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
          <Button
            variant={isDark ? "accent" : "hero"}
            className="group"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

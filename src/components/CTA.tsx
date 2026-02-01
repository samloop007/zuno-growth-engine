import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface CTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

const CTA = ({
  headline = "Ready to scale your growth?",
  description = "Book a strategy call with our team and discover how ZUNO can transform your marketing.",
  buttonText = "Book a Strategy Call",
  variant = "dark",
}: CTAProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-spacing relative overflow-hidden ${isDark ? "bg-primary text-primary-foreground" : "bg-accent/5"
        }`}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? "bg-accent/20" : "bg-accent/10"
        }`} />
      <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl ${isDark ? "bg-accent/10" : "bg-primary/5"
        }`} />

      <div className="section-padding relative z-10">
        <div className="container-narrow text-center">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center ${isDark ? "bg-accent/20" : "bg-accent/10"
            }`}>
            <Mail className="w-8 h-8 text-accent" />
          </div>

          {/* Content */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 ${isDark ? "text-primary-foreground" : "text-foreground"
            }`}>
            {headline}
          </h2>

          <p className={`text-lg max-w-xl mx-auto mb-10 ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}>
            {description}
          </p>

          {/* CTA Button */}
          <a
            href="mailto:connect@zunobyperch.com?subject=Booking a Strategy Call&body=Hello ZUNO Team,%0A%0AI would like to book a strategy call to discover how ZUNO can transform my marketing.%0A%0AMy Details:%0A- Name: %0A- Company: %0A- Interested in: %0A%0ABest regards,"
            className="inline-block"
          >
            <Button
              size="lg"
              className="group text-base px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          {/* Trust badge */}
          <p className={`mt-8 text-sm font-medium ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"
            }`}>
            No commitment required • Free 30-minute consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
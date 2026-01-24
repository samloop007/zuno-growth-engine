import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-image.jpg";

const Products = () => {
  return (
    <section className="section-spacing bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                {/* Decorative frame */}
                <div className="absolute -inset-3 border border-accent/20 rounded-xl" />
                <div className="absolute -inset-6 border border-accent/10 rounded-2xl hidden lg:block" />
                
                <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                  <img
                    src={productsImage}
                    alt="ZUNO Products - Marketing Automation"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                    Our Products
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Powerful marketing-automation solutions
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  At ZUNO by Perch, we build powerful marketing-automation solutions that help businesses scale efficiently. Our products are designed to simplify complex processes and deliver measurable results.
                </p>
              </div>

              <Link to="/services" className="inline-block">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group text-base px-8 py-6"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

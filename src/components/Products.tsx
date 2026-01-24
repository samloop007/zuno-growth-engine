import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-image.jpg";

const features = [
  "Automated lead nurturing workflows",
  "Multi-channel campaign management",
  "Real-time analytics dashboard",
  "Custom integration support",
];

const Products = () => {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 border-2 border-dashed border-accent/20 rounded-[2rem] rotate-2" />
                
                <div className="relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                  <img
                    src={productsImage}
                    alt="ZUNO Products - Marketing Automation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Automations Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Our Products
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Powerful marketing
                  <span className="text-accent"> automation</span> solutions
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build marketing-automation solutions that help businesses scale efficiently. Our products simplify complex processes and deliver measurable results.
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/services" className="inline-block">
                <Button 
                  size="lg" 
                  className="group text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/25"
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-image.jpg";

const Products = () => {
  return (
    <section className="section-spacing">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-accent/20" />
                <div className="absolute -inset-8 border border-accent/10" />
                <img
                  src={productsImage}
                  alt="Our Products"
                  className="relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Our Products
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Powerful marketing-automation solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At ZUNO by Perch, we build powerful marketing-automation 
                solutions that help businesses scale efficiently. Our products 
                are designed to simplify complex processes and deliver measurable results.
              </p>
              <Link to="/services">
                <Button variant="hero" className="group">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

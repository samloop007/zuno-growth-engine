import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCharacters from "@/assets/hero-characters.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />

      <div className="section-padding relative z-10 pt-32 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6 opacity-0 animate-fade-up stagger-1">
                ZUNO by Perch
              </p>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up stagger-2">
                Strategy. Story.
                <br />
                <span className="text-accent">Sale.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up stagger-3">
                A strategy-driven marketing and automation agency helping brands
                make smarter decisions, tell better stories, and grow with
                confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center opacity-0 animate-fade-up stagger-4">
                <Button variant="hero" className="group">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link to="/services">
                  <Button variant="heroOutline">Explore Our Approach</Button>
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative opacity-0 animate-fade-up stagger-3">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-2xl scale-110" />
                <img
                  src={heroCharacters}
                  alt="ZUNO by Perch - Strategy, Story, Sale"
                  className="relative z-10 w-full max-w-lg mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

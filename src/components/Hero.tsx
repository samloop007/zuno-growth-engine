import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import heroCharacters from "@/assets/hero-characters.png";
import zunoUncle from "@/assets/zuno-uncle.png";
import bajiZuno from "@/assets/baji-zuno.jpg";

const slides = [
  {
    badge: "ZUNO by Perch",
    headline: "Strategy that",
    highlightLine: "drives growth",
    subheading:
      "We help ambitious brands scale with precision — combining strategic clarity, authentic storytelling, and systems that convert.",
    image: heroCharacters,
  },
  {
    badge: "Growth Systems",
    headline: "Build systems",
    highlightLine: "that scale",
    subheading:
      "From startups to enterprises — we architect marketing engines that transform visitors into loyal customers.",
    image: zunoUncle,
  },
  {
    badge: "Marketing Automation",
    headline: "Automate",
    highlightLine: "& dominate",
    subheading:
      "Intelligent automation handles the heavy lifting while you focus on what matters most — growing your vision.",
    image: bajiZuno,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Accent Gradient Orb */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="section-padding relative z-10 w-full py-20 lg:py-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
            {/* Left - Text Content */}
            <div className="relative order-2 lg:order-1">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {index === currentSlide && (
                    <div className="space-y-6 lg:space-y-8">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent tracking-wide">
                          {slide.badge}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <div className="space-y-1">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                          {slide.headline}
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                          <span className="text-accent">{slide.highlightLine}</span>
                        </h1>
                      </div>

                      {/* Subheading */}
                      <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                        {slide.subheading}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button 
                          size="lg" 
                          className="group text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                        >
                          Book a Strategy Call
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Link to="/services">
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="text-base px-8 py-6 rounded-full border-2 hover:bg-secondary transition-all duration-300"
                          >
                            Explore Services
                          </Button>
                        </Link>
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-8 pt-6 border-t border-border/50 mt-8">
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-foreground">150+</div>
                          <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-foreground">98%</div>
                          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="w-px h-12 bg-border hidden sm:block" />
                        <div className="hidden sm:block">
                          <div className="text-2xl md:text-3xl font-bold text-foreground">5x</div>
                          <div className="text-sm text-muted-foreground">Average ROI</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right - Hero Image */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="relative">
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-accent/20 scale-110 rotate-3" />
                    
                    {/* Image container */}
                    <div className="relative bg-gradient-to-br from-secondary via-background to-accent/5 p-3 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
                      <img
                        src={slide.image}
                        alt={`ZUNO - ${slide.headline}`}
                        className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto rounded-2xl"
                      />
                    </div>
                    
                    {/* Floating accent */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-2xl rotate-12 opacity-80" />
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-xl -rotate-12 opacity-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 lg:mt-0 lg:absolute lg:bottom-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
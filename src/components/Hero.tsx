import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import heroCharacters from "@/assets/hero-characters.png";
import zunoUncle from "@/assets/zuno-uncle.png";
import bajiZuno from "@/assets/baji-zuno.jpg";

const slides = [
  {
    eyebrow: "ZUNO by Perch",
    headline: "Strategy. Story.",
    highlightWord: "Sale.",
    subheading:
      "Transform your business with data-driven strategies that deliver real, measurable growth.",
    image: heroCharacters,
  },
  {
    eyebrow: "Growth Systems",
    headline: "Build. Scale.",
    highlightWord: "Dominate.",
    subheading:
      "From startups to enterprises — we architect marketing systems that convert and scale effortlessly.",
    image: zunoUncle,
  },
  {
    eyebrow: "Marketing Automation",
    headline: "Automate. Optimize.",
    highlightWord: "Grow.",
    subheading:
      "Let intelligent automation handle the heavy lifting while you focus on what matters most.",
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
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/40">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="section-padding relative z-10 pt-28 pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
            {/* Left - Text Content with Slide Transition */}
            <div className="text-center lg:text-left">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute pointer-events-none"
                  }`}
                >
                  {index === currentSlide && (
                    <>
                      {/* Eyebrow with accent line */}
                      <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                        <div className="w-12 h-[2px] bg-accent" />
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                          {slide.eyebrow}
                        </p>
                      </div>

                      {/* Main Headline */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
                        {slide.headline}
                        <br />
                        <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                          {slide.highlightWord}
                        </span>
                      </h1>

                      {/* Subheading */}
                      <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                        {slide.subheading}
                      </p>
                    </>
                  )}
                </div>
              ))}

              {/* CTAs - Always visible */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button variant="hero" size="xl" className="group shadow-lg shadow-accent/20">
                  Book a Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link to="/services">
                  <Button variant="heroOutline" size="lg">
                    Explore Our Approach
                  </Button>
                </Link>
              </div>

              {/* Slide Controls */}
              <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                </button>
                
                <div className="flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
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
                  className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Right - Hero Image with Slide Transition */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/5 rounded-3xl blur-3xl scale-110" />
                  
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 border border-accent/20 rounded-3xl" />
                  <div className="absolute -inset-8 border border-accent/10 rounded-3xl" />
                  
                  <img
                    src={slide.image}
                    alt={`ZUNO by Perch - ${slide.headline}`}
                    className="relative z-10 w-full max-w-lg mx-auto lg:max-w-none rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

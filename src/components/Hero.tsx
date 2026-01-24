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
    headline: "Strategy.",
    headline2: "Story.",
    highlightWord: "Sale.",
    subheading:
      "We help ambitious brands grow with clarity — combining sharp strategy, compelling storytelling, and systems that sell.",
    image: heroCharacters,
  },
  {
    eyebrow: "Growth Systems",
    headline: "Build.",
    headline2: "Scale.",
    highlightWord: "Dominate.",
    subheading:
      "From startups to enterprises — we architect marketing systems that convert visitors into loyal customers.",
    image: zunoUncle,
  },
  {
    eyebrow: "Marketing Automation",
    headline: "Automate.",
    headline2: "Optimize.",
    highlightWord: "Grow.",
    subheading:
      "Let intelligent automation handle the heavy lifting while you focus on building what matters most.",
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
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-gold/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-gold/10 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="section-padding relative z-10 w-full py-24 lg:py-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left - Text Content */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {index === currentSlide && (
                    <div className="space-y-8">
                      {/* Eyebrow */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-px bg-accent" />
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                          {slide.eyebrow}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <div className="space-y-0">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.05]">
                          {slide.headline}
                        </h1>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.05]">
                          {slide.headline2}
                        </h1>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
                          <span className="text-accent">{slide.highlightWord}</span>
                        </h1>
                      </div>

                      {/* Subheading */}
                      <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                        {slide.subheading}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                          variant="hero" 
                          size="lg" 
                          className="group text-base px-8 py-6 shadow-lg shadow-primary/10"
                        >
                          Book a Strategy Call
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Link to="/services">
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="text-base px-8 py-6 border-2 hover:bg-secondary"
                          >
                            Explore Our Approach
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Slide Controls */}
              <div className="flex items-center gap-6 mt-14">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4 text-foreground" />
                </button>
                
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "w-10 bg-accent"
                          : "w-3 bg-border hover:bg-muted-foreground/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-3xl blur-2xl scale-110" />
                    
                    {/* Image container */}
                    <div className="relative bg-gradient-to-br from-secondary to-background p-2 rounded-2xl">
                      <img
                        src={slide.image}
                        alt={`ZUNO - ${slide.headline}`}
                        className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

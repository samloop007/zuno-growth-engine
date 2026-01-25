import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPoster from "@/assets/hero-poster.png";
import heroVideo from "@/assets/hero-section-video.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="object-cover w-full h-full opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-start px-4 md:px-8">
        <div className="space-y-8 max-w-4xl pt-20">
          {/* Main Headline - Vertical Stack */}
          <div className="flex flex-col space-y-1">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] uppercase animate-in fade-in slide-in-from-left-10 duration-700">
              Strategy.
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 animate-in fade-in slide-in-from-left-10 duration-700 delay-150">
              Story.
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-accent animate-in fade-in slide-in-from-left-10 duration-700 delay-300">
              Sale.
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
            Investments, strategy and Automation
          </p>

          {/* Call To Action */}
          <div className="pt-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-700">
            <Button
              size="lg"
              className="group bg-white text-black hover:bg-gray-200 text-lg px-10 py-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
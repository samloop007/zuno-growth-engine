import { ArrowUpRight } from "lucide-react";
import zunoUncle from "@/assets/zuno-uncle.png";
import bajiZuno from "@/assets/baji-zuno.jpg";
import bhaiZuno from "@/assets/bhai-zuno.png";

const pillars = [
  {
    image: zunoUncle,
    title: "Investments",
    subtitle: "Zuno Uncle",
    description:
      "Data-driven decisions and investment intelligence that provides clarity for sustainable, measurable growth.",
    number: "01",
  },
  {
    image: bajiZuno,
    title: "Strategy",
    subtitle: "Baji Zuno",
    description:
      "Brand positioning and messaging that resonates deeply with your audience and builds lasting trust.",
    number: "02",
  },
  {
    image: bhaiZuno,
    title: "Automation",
    subtitle: "Bhai Zuno",
    description:
      "Smart automation systems that convert and scale, transforming operations into growth engines.",
    number: "03",
  },
];

const Pillars = () => {
  return (
    <section className="section-spacing bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-lg">
                Three pillars of
                <span className="text-accent"> sustainable growth</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg">
              Our unique approach combines expertise across investments, strategy, and automation for holistic growth.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-accent">
                    {pillar.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <span className="text-sm text-accent font-medium">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 mb-3 text-foreground group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
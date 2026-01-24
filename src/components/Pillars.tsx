import zunoUncle from "@/assets/zuno-uncle.png";
import bajiZuno from "@/assets/baji-zuno.jpg";
import bhaiZuno from "@/assets/bhai-zuno.png";

const pillars = [
  {
    image: zunoUncle,
    title: "Investments",
    subtitle: "by Zuno Uncle",
    description:
      "Data-backed decisions, investment intelligence, and growth planning that gives you clarity and direction for sustainable growth.",
    accent: "01",
  },
  {
    image: bajiZuno,
    title: "Strategy",
    subtitle: "by Baji Zuno",
    description:
      "Brand positioning, messaging, and narrative clarity that resonates with your audience and builds lasting trust.",
    accent: "02",
  },
  {
    image: bhaiZuno,
    title: "Automation",
    subtitle: "by Bhai Zuno",
    description:
      "Automation systems that convert and scale, turning your operations into a high-performing growth engine.",
    accent: "03",
  },
];

const Pillars = () => {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                What We Do
              </span>
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-xl mx-auto">
              Three pillars of sustainable growth
            </h2>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 relative">
                  {/* Number accent */}
                  <span className="absolute top-6 right-6 text-5xl font-bold text-muted/20 select-none">
                    {pillar.accent}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;

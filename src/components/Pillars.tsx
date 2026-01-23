import { Target, BookOpen, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategy",
    description:
      "Data-backed decisions, investment intelligence, and growth planning that gives you clarity and direction.",
    accent: "01",
  },
  {
    icon: BookOpen,
    title: "Story",
    description:
      "Brand positioning, messaging, and narrative clarity that resonates with your audience and builds trust.",
    accent: "02",
  },
  {
    icon: TrendingUp,
    title: "Sale",
    description:
      "Automation systems that convert and scale, turning your operations into a growth engine.",
    accent: "03",
  },
];

const Pillars = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
              Three pillars of sustainable growth
            </h2>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative bg-background p-8 lg:p-10 border border-border hover:border-accent/30 transition-all duration-500 hover-lift"
              >
                {/* Number accent */}
                <span className="absolute top-6 right-6 text-6xl font-semibold text-muted/50 select-none">
                  {pillar.accent}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent mb-6 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <pillar.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;

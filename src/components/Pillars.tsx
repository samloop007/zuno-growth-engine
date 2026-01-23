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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative bg-background border border-border hover:border-accent/30 transition-all duration-500 hover-lift overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-secondary/50">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Number accent */}
                  <span className="absolute top-4 right-4 text-5xl font-semibold text-muted/30 select-none">
                    {pillar.accent}
                  </span>

                  <h3 className="text-2xl font-semibold mb-1 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
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

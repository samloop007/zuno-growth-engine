import { Zap, Target, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description: "Every strategy backed by real insights and measurable outcomes.",
  },
  {
    icon: Zap,
    title: "Systems Over Shortcuts",
    description: "Building sustainable frameworks that scale with your business.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Long-term success through strategic, measured expansion.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We invest in your success as deeply as you do.",
  },
];

const ValueStatement = () => {
  return (
    <section className="section-spacing bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Why ZUNO
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  We build growth systems,
                  <span className="text-accent"> not campaigns</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most agencies focus on quick wins. We focus on building the infrastructure that makes those wins repeatable and scalable. Our approach combines strategic thinking with technical execution.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">8+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
                  <div className="text-sm text-muted-foreground mt-1">Brands Scaled</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">$50M+</div>
                  <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
                </div>
              </div>
            </div>

            {/* Right - Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
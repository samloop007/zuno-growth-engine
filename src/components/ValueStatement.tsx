import { Check } from "lucide-react";

const values = [
  "Clear strategy and direction",
  "Powerful automation systems",
  "Data-driven decision making",
  "Scalable growth frameworks",
];

const ValueStatement = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light/20 to-charcoal" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
      
      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Statement */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                We simplify how brands operate and scale in a fast-moving world.
              </h2>
              <p className="text-lg text-background/70 leading-relaxed max-w-lg">
                We combine clear strategy, powerful automation, and data-driven insights to help you focus on what matters — growing your business with confidence.
              </p>
            </div>

            {/* Right - Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-4 p-5 rounded-lg bg-background/5 border border-background/10 hover:bg-background/10 hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-base lg:text-lg font-medium text-background">
                    {value}
                  </span>
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

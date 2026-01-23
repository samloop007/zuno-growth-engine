import { CheckCircle } from "lucide-react";

const values = [
  "Clear strategy and direction",
  "Powerful automation systems",
  "Data-driven decision making",
  "Scalable growth frameworks",
];

const ValueStatement = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Statement */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
                We simplify how brands operate and scale in a fast-moving world.
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                We combine clear strategy, powerful automation, and data-driven
                insights to help you focus on what matters — growing your
                business with confidence.
              </p>
            </div>

            {/* Right - Values List */}
            <div className="space-y-6">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-4 p-5 bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{value}</span>
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

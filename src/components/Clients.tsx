import { Star } from "lucide-react";

const clients = [
  { name: "TechFlow", industry: "SaaS" },
  { name: "GreenLeaf", industry: "E-Commerce" },
  { name: "CloudBase", industry: "Tech" },
  { name: "FinanceHub", industry: "Fintech" },
  { name: "MediaPro", industry: "Media" },
  { name: "DataSync", industry: "Analytics" },
];

const Clients = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Trusted Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Brands we've helped
              <span className="text-accent"> grow</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              From ambitious startups to established enterprises, we partner with brands ready to scale.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-lg font-bold text-primary-foreground group-hover:text-accent transition-colors">
                  {client.name}
                </div>
                <div className="text-sm text-primary-foreground/50 mt-1">
                  {client.industry}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-primary-foreground/90 leading-relaxed mb-6">
              "ZUNO transformed our marketing approach completely. Their strategic insight and automation expertise helped us achieve 3x growth in just 6 months."
            </blockquote>
            <div>
              <div className="font-semibold text-primary-foreground">Sarah Chen</div>
              <div className="text-sm text-primary-foreground/60">CEO, TechFlow Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
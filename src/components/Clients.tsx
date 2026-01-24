const clientTypes = [
  { number: "01", label: "Startups" },
  { number: "02", label: "SMEs" },
  { number: "03", label: "Hospitality Brands" },
  { number: "04", label: "Tourism Companies" },
  { number: "05", label: "Real Estate Firms" },
  { number: "06", label: "E-commerce Businesses" },
];

const Clients = () => {
  return (
    <section className="section-spacing bg-background relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                    Who We Work With
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Partners in growth across industries
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  We partner with ambitious businesses ready to scale with intention. From early-stage startups to established enterprises, we build growth systems tailored to your unique challenges.
                </p>
              </div>
            </div>

            {/* Right - Client Types Grid */}
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((client, index) => (
                <div
                  key={client.label}
                  className="group p-6 border border-border rounded-lg bg-card hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-xs font-medium text-accent/60 mb-2 block">
                    {client.number}
                  </span>
                  <span className="text-sm lg:text-base font-medium text-foreground">
                    {client.label}
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

export default Clients;

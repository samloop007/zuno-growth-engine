const clientTypes = [
  "Startups",
  "SMEs",
  "Hospitality Brands",
  "Tourism Companies",
  "Real Estate Firms",
  "E-commerce Businesses",
];

const Clients = () => {
  return (
    <section className="section-spacing">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Who We Work With
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Partners in growth across industries
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We partner with ambitious businesses ready to scale with
                intention. From early-stage startups to established enterprises,
                we build growth systems tailored to your unique challenges.
              </p>
            </div>

            {/* Right - Client Types */}
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((type, index) => (
                <div
                  key={type}
                  className="group p-6 border border-border bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-xs font-medium tracking-wider text-muted-foreground/60 mb-2 block">
                    0{index + 1}
                  </span>
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {type}
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

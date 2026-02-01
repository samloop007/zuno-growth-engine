import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getSiteData } from "@/lib/store";

const Clients = () => {
  const [clients, setClients] = useState(getSiteData().brands);

  useEffect(() => {
    const handleUpdate = () => {
      setClients(getSiteData().brands);
    };
    window.addEventListener("siteDataUpdated", handleUpdate);
    return () => window.removeEventListener("siteDataUpdated", handleUpdate);
  }, []);

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[120px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <>
                    <div className="text-lg font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {client.name}
                    </div>
                    <div className="text-sm text-primary-foreground/50 mt-1">
                      {client.industry}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Testimonial */}
          {/* Testimonial Replacement - CTA */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <a
              href="mailto:connect@zunobyperch.com"
              className="inline-block"
            >
              <Button size="lg" className="bg-accent text-primary font-bold hover:bg-white transition-all duration-300 rounded-full px-8 py-6 text-lg group">
                Become a Partner
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

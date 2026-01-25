import { Star } from "lucide-react";
import brandOne from "@/assets/brand -one.png";
import brandTwo from "@/assets/bran-two.png";
import brandThree from "@/assets/brand-three.png";
import brandFour from "@/assets/brand-four.png";
import brandFive from "@/assets/brand-five.png";
import brandSix from "@/assets/brand-six.png";
import brandSeven from "@/assets/brand-seven.png";
import brandEight from "@/assets/brand-eight.png";

const clients = [
  { name: "Brand One", industry: "Partner", logo: brandOne },
  { name: "Brand Two", industry: "Partner", logo: brandTwo },
  { name: "Brand Three", industry: "Partner", logo: brandThree },
  { name: "Brand Four", industry: "Partner", logo: brandFour },
  { name: "Brand Five", industry: "Partner", logo: brandFive },
  { name: "Brand Six", industry: "Partner", logo: brandSix },
  { name: "Brand Seven", industry: "Partner", logo: brandSeven },
  { name: "Brand Eight", industry: "Partner", logo: brandEight },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={client.name}
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
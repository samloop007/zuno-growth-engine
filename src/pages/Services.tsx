import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import { ArrowRight, Compass, MessageSquare, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Growth & Brand Direction",
    description:
      "We analyze your market, competitors, and opportunities to create a clear roadmap for sustainable growth. Our data-backed strategies ensure every decision moves you closer to your goals.",
    features: [
      "Market & competitive analysis",
      "Growth strategy development",
      "Investment intelligence",
      "Strategic planning workshops",
    ],
  },
  {
    icon: MessageSquare,
    title: "Brand Story & Messaging",
    description:
      "We craft compelling narratives that resonate with your audience and differentiate you from competitors. Your story becomes your most powerful sales tool.",
    features: [
      "Brand positioning & identity",
      "Messaging frameworks",
      "Content strategy",
      "Voice & tone guidelines",
    ],
  },
  {
    icon: Zap,
    title: "Marketing & Customer-Journey Automation",
    description:
      "We build intelligent automation systems that nurture leads, convert customers, and scale your operations without adding complexity.",
    features: [
      "Marketing automation setup",
      "Customer journey mapping",
      "Email & CRM workflows",
      "Lead nurturing sequences",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & Conversion Optimization",
    description:
      "We continuously analyze and optimize your marketing performance to maximize ROI and ensure sustainable, measurable growth.",
    features: [
      "Conversion rate optimization",
      "Analytics & reporting",
      "A/B testing frameworks",
      "Performance dashboards",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6 opacity-0 animate-fade-up">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 opacity-0 animate-fade-up stagger-1">
              We don't just offer services —
              <br />
              <span className="text-accent">we build growth systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
              Every engagement is designed for clarity, efficiency, and
              measurable impact. No fluff, no guesswork — just results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-secondary/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group bg-background p-8 md:p-12 border border-border hover:border-accent/30 transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left - Icon & Title */}
                    <div className="lg:col-span-5">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 flex items-center justify-center bg-accent/10 text-accent flex-shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="text-xs font-medium tracking-wider text-muted-foreground/60 block mb-2">
                            0{index + 1}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Right - Description & Features */}
                    <div className="lg:col-span-7">
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Build My Growth System"
        description="Ready to transform your marketing and operations into a scalable growth engine?"
        buttonText="Get Started"
        variant="dark"
      />
    </Layout>
  );
};

export default Services;

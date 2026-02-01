import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import aboutVideo from "@/assets/UNCLE VIDEO.mp4";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import { Database, Layers, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Database,
    title: "Data over assumptions",
    description:
      "We believe in making decisions based on evidence, not guesswork. Every strategy is rooted in research, analytics, and proven frameworks.",
  },
  {
    icon: Layers,
    title: "Systems over shortcuts",
    description:
      "Quick fixes don't build lasting businesses. We create scalable systems and processes that compound over time.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable, measurable growth",
    description:
      "Growth without direction is chaos. We focus on sustainable expansion with clear metrics and achievable milestones.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="ZUNO by Perch - Our mission, story, and principles for building scalable businesses."
      />
      <VideoHero
        titles={["Who We Are.", "Built for", "Long-term Growth."]}
        subtitle="ZUNO by Perch helps businesses remove guesswork and scale intelligently. We design systems that elevate brands, optimize customer journeys, and turn operations into high-performing, scalable engines."
        videoSrc={aboutVideo}
      />

      {/* Mission Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left - Label */}
              <div className="lg:col-span-4">
                <p className="text-sm font-medium tracking-widest uppercase text-accent">
                  Our Mission
                </p>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  We exist to help ambitious businesses grow with clarity and
                  confidence.
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    In a world of noise, complexity, and endless options, most
                    businesses struggle to know what actually moves the needle.
                    They chase tactics without strategy, launch campaigns
                    without clarity, and scale operations without systems.
                  </p>
                  <p>
                    We're here to change that. ZUNO by Perch combines strategic
                    thinking with practical execution to help you build a
                    business that grows sustainably, operates efficiently, and
                    stands out in a crowded market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="container-wide">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Our Principles
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
                What we believe in
              </h2>
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="group text-center p-8 lg:p-10"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-accent/10 text-accent mb-8 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <principle.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent block mb-2">
                  50+
                </span>
                <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Clients Served
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent block mb-2">
                  5+
                </span>
                <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent block mb-2">
                  95%
                </span>
                <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Client Retention
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-accent block mb-2">
                  3x
                </span>
                <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                  Avg. ROI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Let's Build Something That Scales"
        description="Ready to turn your business into a high-performing, scalable engine?"
        buttonText="Start the Conversation"
        variant="light"
      />
    </Layout>
  );
};

export default About;

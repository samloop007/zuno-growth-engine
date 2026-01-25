import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import { ArrowRight, Bot, Calendar, MessageCircle, BarChart2, Video, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Bot,
    title: "Zuno Content Architect",
    subtitle: "Auto-Content Generator in a Box",
    description: "AI that creates daily content, captions & ideas across platforms.",
    features: [
      "Creates posts (carousels, captions, hashtags)",
      "Writes for each platform (LinkedIn, Instagram, Twitter, TikTok)",
      "Follows your brand voice",
      "Suggests trending topics",
    ],
    benefit: "You stay active daily — without being online.",
    price: "Pkr 19000",
  },
  {
    icon: Calendar,
    title: "Zuno OmniScheduler",
    subtitle: "Auto-Scheduler / Cross-Platform Posting in a Box",
    description: "Smart automated conversations, replies, and lead conversion. Schedules and publishes posts across 5 platforms at once (Instagram, Facebook, TikTok, LinkedIn, YouTube Shorts).",
    features: [
      "Optimizes posting times",
      "Reposts & recycles high-performing content automatically",
      "Schedules across 5 platforms",
      "Automated publishing",
    ],
    benefit: "You stay active daily — without being online.",
    price: "Pkr 19000",
  },
  {
    icon: MessageCircle,
    title: "Zuno EngageFlow",
    subtitle: "Auto-DM & Lead Capture Agent in a Box",
    description: "A universal cross-platform posting automation system.",
    features: [
      "Replies to comments",
      "Sends DM replies",
      "Converts visitors into leads",
      "Sends offers, booking links, and calls-to-action automatically",
    ],
    benefit: "Engagement + clients on autopilot",
    price: "Pkr 19000",
  },
  {
    icon: Zap,
    title: "Zuno EngageEngine",
    subtitle: "Auto-Engagement Bot (Safe Boost System in a Box)",
    description: "AI-driven engagement booster that reacts, responds & interacts.",
    features: [
      "Likes comments from people in your niche",
      "Watches competitor hashtags",
      "Engages with new followers & potential customers",
      "Leaves meaningful replies using AI",
    ],
    benefit: "Faster organic reach + more profile visits.",
    price: "Pkr 19000",
  },
  {
    icon: BarChart2,
    title: "Zuno InsightSphere",
    subtitle: "Auto-Analytics Dashboard (Your Own Social AI Insights Tool) in a Box",
    description: "Advanced analytics hub delivering deep insights & growth signals.",
    features: [
      "Tracks growth on all platforms",
      "Measures best times to post",
      "Detects viral-trending content in your niche",
      "Gives daily or weekly strategy suggestions",
    ],
    benefit: "You grow smart, not blindly.",
    price: "Pkr 19000",
  },
  {
    icon: Video,
    title: "Zuno Repurpose Studio",
    subtitle: "Auto-Repurposing Engine (1 Video → 20 Pieces of Content) in a Box",
    description: "Powerful system that transforms one content piece into many.",
    features: [
      "Takes any long video (podcast, travel vlog, talking video)",
      "Cuts it into shorts automatically",
      "Generates captions",
      "Creates tweets, LinkedIn posts, Instagram reels",
    ],
    benefit: "Endless content from minimal effort.",
    price: "Pkr 19000",
  },
  {
    icon: Search,
    title: "Zuno TrendScanner",
    subtitle: "Social Listening & Trend-Spotting Agent in a Box",
    description: "Real-time AI system that detects trends, signals, and viral opportunities.",
    features: [
      "Tracks trending hashtags",
      "Monitors competitors",
      "Detects viral post styles in your niche",
      "Suggests what to post today",
    ],
    benefit: "You always stay relevant.",
    price: "Pkr 19000",
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
              Our Products
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 opacity-0 animate-fade-up stagger-1">
              AI-Powered Tools to
              <br />
              <span className="text-accent">Explode Your Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
              Automate your content, engagement, and analytics with our suite of intelligent tools.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-secondary/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="space-y-8">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="group bg-background p-8 md:p-12 border border-border hover:border-accent/30 transition-all duration-500 rounded-3xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left - Icon & Title */}
                    <div className="lg:col-span-5">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 flex items-center justify-center bg-accent/10 text-accent flex-shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground rounded-2xl">
                          <product.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                            {product.title}
                          </h3>
                          <p className="text-accent font-medium mb-4">{product.subtitle}</p>
                          <div className="text-2xl font-bold">{product.price}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right - Description & Features */}
                    <div className="lg:col-span-7">
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">What it gives you:</h4>
                        <p className="text-foreground text-lg font-medium">{product.benefit}</p>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-muted-foreground"
                          >
                            <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                        Order Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
        headline="Ready to Automate Your Growth?"
        description="Select a tool above or get the full suite to transform your business."
        buttonText="Get Started"
        variant="dark"
      />
    </Layout>
  );
};

export default Services;

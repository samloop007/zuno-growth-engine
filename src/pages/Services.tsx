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
      <section className="pt-32 pb-12 md:pt-48 md:pb-20">
        <div className="section-padding px-4">
          <div className="container-narrow text-center">
            <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-4 md:mb-6 opacity-0 animate-fade-up">
              Our Products
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-8 opacity-0 animate-fade-up stagger-1 leading-tight">
              AI-Powered Tools to
              <br />
              <span className="text-accent">Explode Your Growth</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2 leading-relaxed">
              Automate your content, engagement, and analytics with our suite of intelligent tools.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="group bg-background p-5 sm:p-6 md:p-8 border border-border hover:border-accent/50 active:border-accent/70 hover:shadow-xl transition-all duration-500 rounded-xl md:rounded-2xl flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-accent/10 text-accent flex-shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 active:scale-105 rounded-xl md:rounded-2xl mb-4 sm:mb-6">
                    <product.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent font-medium mb-3 sm:mb-4 line-clamp-2">{product.subtitle}</p>

                  {/* Price */}
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{product.price}</div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Benefit */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-accent/5 rounded-lg md:rounded-xl border border-accent/20">
                    <p className="text-foreground text-xs sm:text-sm font-medium leading-snug">{product.benefit}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[11px] sm:text-xs text-muted-foreground leading-snug"
                      >
                        <ArrowRight className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full min-h-[44px] text-sm sm:text-base bg-accent hover:bg-accent/90 active:bg-accent/80 text-accent-foreground group-hover:shadow-lg transition-all duration-300">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

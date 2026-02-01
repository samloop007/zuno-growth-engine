import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import strategyVideo from "@/assets/zuno bhi.mp4";

import funnelsImg from "@/assets/baji-funnels.jpg";
import identityImg from "@/assets/baji-identity.jpg";
import gtmImg from "@/assets/baji-gtm.jpg";
import innovationImg from "@/assets/baji-innovation.jpg";
import consultancyImg from "@/assets/baji-consultancy.jpg";
import seoiImg from "@/assets/baji-seoi.jpg";
import brandingImg from "@/assets/baji-branding.jpg";
import contentImg from "@/assets/baji-zuno.jpg";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import SEO from "@/components/SEO";

const Strategy = () => {
    return (
        <Layout>
            <SEO
                title="Strategy"
                description="Zuno Baji - Strategic growth architecture, branding, and market entry systems."
            />
            <VideoHero
                titles={["Strategy First.", "Growth That", "Actually Converts."]}
                subtitle="Zuno Baji works with founders, startups, and growing businesses to turn ideas into systems, and systems into revenue. She doesn’t chase trends. She builds clarity, structure, and momentum — so marketing, sales, and technology work together instead of in silos."
                videoSrc={strategyVideo}
            />

            {/* Strategic Solutions Section */}
            <div className="py-24 bg-background">
                <div className="container-wide">
                    <div className="text-center mb-16 space-y-6">
                        <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Strategic Solutions</h1>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Driving Real Growth</h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-foreground font-medium">
                                Zuno Baji helps you design the architecture of your business growth. We don't just provide services; we build systems that scale.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard
                            title="Sales Funnel Building"
                            description="Zuno Baji helps you design end-to-end sales funnels that don’t just attract attention, but convert consistently."
                            category="Conversion"
                            image={funnelsImg}
                            features={[
                                "Lead generation funnel design",
                                "Customer journey mapping",
                                "Conversion optimization",
                                "Funnel alignment with sales teams"
                            ]}
                            focus="predictable growth, not random leads."
                        />
                        <ProductCard
                            title="Business Identity Building"
                            description="Before marketing, a business needs an identity. Zuno Baji helps you define your core."
                            category="Identity"
                            image={identityImg}
                            features={[
                                "Brand purpose & positioning",
                                "Voice, tone, and narrative",
                                "Market differentiation",
                                "Customer perception strategy"
                            ]}
                            focus="making your business recognizable, relatable, and credible."
                        />
                        <ProductCard
                            title="Go-To-Market (GTM) Strategies"
                            description="Launching without a GTM strategy is expensive guesswork. We build intent-driven entries."
                            category="Market Entry"
                            image={gtmImg}
                            features={[
                                "Target market & ICP definition",
                                "Channel selection & sequencing",
                                "Pricing & packaging logic",
                                "Launch roadmaps"
                            ]}
                            focus="entering markets with intent, not hope."
                        />
                        <ProductCard
                            title="AI Implementation Strategies"
                            description="AI is not a tool — it’s an operating advantage when used correctly. Execute smarter."
                            category="Innovation"
                            image={innovationImg}
                            features={[
                                "Identify where AI actually adds value",
                                "Implement AI in operations, marketing, and sales",
                                "Automate workflows & decision-making",
                                "Avoid hype-driven AI adoption"
                            ]}
                            focus="efficiency, scalability, and smarter execution."
                        />
                        <ProductCard
                            title="Content Strategies"
                            description="Content without strategy is noise. Design systems that compound overtime."
                            category="Content"
                            image={contentImg}
                            features={[
                                "Thought leadership & authority building",
                                "Demand generation",
                                "Founder-led & brand-led content",
                                "Long-term audience trust"
                            ]}
                            focus="content that compounds, not content that burns out."
                        />
                        <ProductCard
                            title="GEO, AEO & SEOi Strategies"
                            description="Search has evolved — strategy must evolve with it. Win visibility where decisions are made."
                            category="Search Evolution"
                            image={seoiImg}
                            features={[
                                "SEOi — intent-based search optimization",
                                "GEO — generative engine optimization",
                                "AEO — answer engine optimization"
                            ]}
                            focus="being found where decisions are made — not just ranked."
                        />
                        <ProductCard
                            title="Branding Strategies"
                            description="Branding is not design alone — it’s business alignment. Systems for scaling identity."
                            category="Branding"
                            image={brandingImg}
                            features={[
                                "Visual & verbal brand systems",
                                "Brand consistency frameworks",
                                "Market perception control",
                                "Long-term brand equity planning"
                            ]}
                            focus="brands that scale without losing identity."
                        />
                        <ProductCard
                            title="Marketing & Sales Consultancy"
                            description="When marketing and sales don’t talk, growth stalls. Align systems for revenue."
                            category="Consultancy"
                            image={consultancyImg}
                            features={[
                                "Align marketing with revenue goals",
                                "Improve sales enablement",
                                "Optimize customer acquisition cost (CAC)",
                                "Build sustainable growth models"
                            ]}
                            focus="strategy that leadership can actually execute."
                        />
                    </div>
                </div>
            </div>

            {/* How Zuno Baji Works & Philosophy */}
            <div className="py-24 bg-secondary/20">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase tracking-tight">How Zuno Baji Works</h2>
                            <div className="space-y-6">
                                <p className="text-lg text-muted-foreground">Zuno Baji doesn’t sell templates. She doesn’t chase vanity metrics.</p>
                                <div className="mt-8 space-y-4">
                                    <p className="text-xl font-bold text-accent">Instead, she helps you:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>See the full picture</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Build systems instead of hacks</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Make confident strategic decisions</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Grow with clarity and control</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-12 rounded-[3rem] bg-accent text-accent-foreground overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Check className="w-64 h-64 rotate-12" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl font-bold uppercase tracking-widest opacity-80">Simple Philosophy</h3>
                                <p className="text-4xl md:text-5xl font-black leading-tight italic">
                                    "Growth is not about doing more — it’s about doing the right things in the right order."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-32 bg-black relative overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full opacity-30" />
                <div className="container-wide relative z-10 space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                            Ready to Build With Strategy?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Let’s design growth that lasts.
                        </p>
                    </div>
                    <div className="flex justify-center pt-4">
                        <a href="mailto:connect@zunobyperch.com?subject=Strategic Growth Consultation&body=Hello Zuno Baji,%0A%0AI am interested in building a growth strategy for my business.%0A%0AMy Details:%0A- Name:%0A- Business Type:%0A- Challenges:%0A%0ABest regards," className="inline-block">
                            <Button
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-12 py-8 text-xl font-bold group shadow-2xl shadow-accent/40 hover:scale-105 transition-all duration-500"
                            >
                                Start Your Strategy Call
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <CTA />
        </Layout>
    );
};

export default Strategy;

import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import CTA from "@/components/CTA";
import investmentVideo from "@/assets/investmnt video.mp4";
import ProductCard from "@/components/ProductCard";

import commercialImg from "@/assets/commercial-invest.jpg";
import residentialImg from "@/assets/residential-invest.jpg";
import strategicImg from "@/assets/strategic-invest-v2.png";
import hospitalityImg from "@/assets/hospitality-invest.png";
import businessDistrictImg from "@/assets/business-district-invest.png";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Investment = () => {
    return (
        <Layout>
            <VideoHero
                titles={["Invest Smart.", "Build Value.", "Think Long Term."]}
                subtitle="We identify and nurture high-potential opportunities across global markets, driving sustainable growth and value creation."
                videoSrc={investmentVideo}
            />

            {/* Portfolio Section */}
            <div className="py-24 bg-background">
                <div className="container-wide">
                    <div className="text-center mb-16 space-y-6">
                        <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Investment Portfolio</h1>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Strategic Opportunities</h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <p className="text-xl text-foreground font-medium">
                                Zuno Uncle helps founders, developers, and investors make strategic real estate investments that don’t just look good on paper — they perform in the real world.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                This isn’t about random land buying or speculative flips. It’s about placing capital where demand, business logic, and long‑term value intersect.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard
                            title="Commercial Real Estate Investment"
                            description="Zuno Uncle guides you in investing in commercial real estate assets that generate steady income and scalable growth."
                            category="Commercial"
                            image={commercialImg}
                            features={[
                                "Retail plazas & mixed‑use spaces",
                                "Office buildings & co‑working assets",
                                "Warehouses & light industrial properties",
                                "Revenue‑driven commercial units"
                            ]}
                            focus="location intelligence, footfall potential, tenant demand, and long‑term yield."
                        />
                        <ProductCard
                            title="Residential Real Estate Investment"
                            description="Residential real estate remains one of the strongest long‑term asset classes — when done right."
                            category="Residential"
                            image={residentialImg}
                            features={[
                                "Apartments & gated communities",
                                "Rental‑focused residential assets",
                                "Lifestyle‑driven housing concepts",
                                "High‑demand urban & suburban zones"
                            ]}
                            focus="end‑user demand, rental yield, resale value, and sustainable appreciation."
                        />
                        <ProductCard
                            title="Strategic Real Estate for Business"
                            description="Real estate isn’t just property — it’s a business decision."
                            category="Growth"
                            image={strategicImg}
                            features={[
                                "Locations that accelerate growth",
                                "Structuring around business models",
                                "Aligning property with revenue goals",
                                "Turning space into advantage"
                            ]}
                            focus="strategy first, construction later."
                        />
                        <ProductCard
                            title="Leisure & Hospitality Investment"
                            description="Leisure real estate is where experience meets profitability."
                            category="Hospitality"
                            image={hospitalityImg}
                            features={[
                                "Resorts & boutique hotels",
                                "Destination properties",
                                "Tourism‑led land developments",
                                "Experience‑driven assets"
                            ]}
                            focus="tourism demand, operational feasibility, branding, and seasonal cash flow."
                        />
                        <ProductCard
                            title="Business District Investment"
                            description="Business districts are built on momentum, not luck."
                            category="Business Hubs"
                            image={businessDistrictImg}
                            features={[
                                "Central business districts (CBDs)",
                                "Emerging commercial hubs",
                                "Corporate‑friendly zones",
                                "High‑density corridors"
                            ]}
                            focus="economic activity, infrastructure growth, corporate demand, and scalability."
                        />
                    </div>
                </div>
            </div>

            {/* How it Works & Philosophy */}
            <div className="py-24 bg-secondary/20">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase tracking-tight">How Zuno Uncle Works</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-red-500" />
                                    </div>
                                    <p className="text-lg">Zuno Uncle does <span className="font-bold">NOT</span> sell property.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-red-500" />
                                    </div>
                                    <p className="text-lg">Zuno Uncle does <span className="font-bold">NOT</span> push commissions.</p>
                                </div>
                                <div className="mt-8 space-y-4">
                                    <p className="text-xl font-bold text-accent">Instead, he helps you:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Decide what to invest in</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Understand why it makes sense</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Structure how the investment should work</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><Check className="w-4 h-4 text-accent" /></div>
                                            <span>Avoid emotional or hype‑driven decisions</span>
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
                                    "Good real estate is not found — it is positioned."
                                </p>
                                <p className="text-xl opacity-90 leading-relaxed">
                                    Zuno Uncle helps you place capital where strategy, demand, and long‑term value align.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-32 bg-black relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full opacity-30" />

                <div className="container-wide relative z-10 text-center space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                            Ready to Invest Smarter?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Let’s talk <span className="text-accent font-bold italic">strategy</span> before you buy square footage.
                        </p>
                    </div>

                    <div className="flex justify-center pt-4">
                        <a href="https://wa.me/923180527326" target="_blank" rel="noopener noreferrer">
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

export default Investment;

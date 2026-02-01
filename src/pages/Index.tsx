import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import Pillars from "@/components/Pillars";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Revenue from "@/components/Revenue";
import ValueStatement from "@/components/ValueStatement";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="ZUNO Growth Engine - Investments, Strategy, and Automation for sustainable business growth."
      />
      <VideoHero
        titles={["Strategy.", "Story.", "Sale."]}
        subtitle="Investments, strategy and Automation"
      />
      <Revenue />
      <Pillars />
      <Products />
      <Clients />
      <ValueStatement />
      <CTA />
    </Layout>
  );
};

export default Index;

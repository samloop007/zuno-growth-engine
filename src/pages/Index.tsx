import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Clients from "@/components/Clients";
import ValueStatement from "@/components/ValueStatement";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Pillars />
      <Clients />
      <ValueStatement />
      <CTA />
    </Layout>
  );
};

export default Index;

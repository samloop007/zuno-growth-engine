import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSiteData, Project } from "@/lib/store";

const Products = () => {
  const [projects, setProjects] = useState<Project[]>(getSiteData().projects);

  useEffect(() => {
    const handleUpdate = () => {
      setProjects(getSiteData().projects);
    };
    window.addEventListener("siteDataUpdated", handleUpdate);
    return () => window.removeEventListener("siteDataUpdated", handleUpdate);
  }, []);

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Left/Right - Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden group">
                    <div className="absolute -inset-4 border-2 border-dashed border-accent/20 rounded-[2rem] rotate-2" />
                    <div className="relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-accent/10">
                          <span className="text-accent font-bold">ZUNO Project</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Right/Left - Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      Project {index + 1}
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="inline-block">
                    <Button
                      size="lg"
                      className="group text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/25"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

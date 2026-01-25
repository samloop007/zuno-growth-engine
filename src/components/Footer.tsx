import { Link } from "react-router-dom";
import zunoLogo from "@/assets/zuno-logo.png";
import { ArrowUpRight, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding section-spacing">
        <div className="container-wide">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={zunoLogo} alt="ZUNO Logo" className="h-16 w-auto object-contain bg-white/10 rounded-lg p-2 backdrop-blur-sm" />
              </div>
              <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-8 text-lg">
                A strategy-driven marketing and automation agency helping brands
                make smarter decisions, tell better stories, and grow with
                confidence.
              </p>
              <a
                href="mailto:hello@zunobyperch.com"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">hello@zunobyperch.com</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
                Connect
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} ZUNO by Perch. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50 font-medium">
              Strategy. Story. Sale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
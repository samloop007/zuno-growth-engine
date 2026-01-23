import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
                <span className="text-2xl font-semibold tracking-tight">
                  ZUNO
                </span>
                <span className="text-sm opacity-60 font-light">by Perch</span>
              </div>
              <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-8">
                A strategy-driven marketing and automation agency helping brands
                make smarter decisions, tell better stories, and grow with
                confidence.
              </p>
              <a
                href="mailto:hello@zunobyperch.com"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
              >
                hello@zunobyperch.com
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 opacity-60">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 opacity-60">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                  >
                    Twitter
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} ZUNO by Perch. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Strategy. Story. Sale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import zunoLogo from "@/assets/zuno-logo.png";
import { ArrowUpRight, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

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
                href="mailto:connect@zunobyperch.com"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">connect@zunobyperch.com</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/923180527326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 hover:text-accent transition-all duration-300 group mt-4 w-max"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.025.267 2.016.776 2.89L6.172 17.828l3.149-.826c.828.452 1.761.692 2.71.692 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.766-5.767-5.766zM12 16.406c-.846 0-1.636-.246-2.326-.711l-.167-.11-2.071.543.553-2.019-.11-.173C7.456 13.268 7.234 12.659 7.234 12c0-2.628 2.138-4.766 4.766-4.766 2.628 0 4.766 2.138 4.766 4.766S14.628 16.406 12 16.406z" />
                  </svg>
                </div>
                <span className="font-medium">+92 318 0527326</span>
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
                    to="/investment"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Investment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/strategy"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Products
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
                  href="https://www.linkedin.com/company/zuno-by-perch/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/zunobyperch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/zunobyperch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com/@zunobyperch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
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
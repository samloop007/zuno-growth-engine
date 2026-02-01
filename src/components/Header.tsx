import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import zunoLogo from "@/assets/zuno-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Investment", path: "/investment" },
    { name: "Strategy", path: "/strategy" },
    { name: "Products", path: "/services" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="section-padding">
        <nav className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={zunoLogo} alt="ZUNO Logo" className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative ${isActive(link.path)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <a href="https://wa.me/923180527326" target="_blank" rel="noopener noreferrer">
              <Button
                className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
            <div className="section-padding py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${isActive(link.path)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:bg-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://wa.me/923180527326" target="_blank" rel="noopener noreferrer" className="mt-4 w-full">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div className="mt-4 flex justify-center">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Leaf className={`w-6 h-6 ${scrolled ? "text-primary" : "text-accent"}`} />
            <span className={`font-display text-2xl sm:text-3xl font-bold tracking-wide ${scrolled ? "text-foreground" : "text-white"}`}>
              MANN
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`font-body text-sm tracking-wide transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left font-body text-foreground text-base py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="w-full px-5 py-3 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

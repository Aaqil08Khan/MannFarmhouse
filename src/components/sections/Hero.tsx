import { ChevronDown } from "lucide-react";
import { HERO, WHATSAPP_NUMBER } from "@/constants/data";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO.backgroundImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-in-up">
          {HERO.headline}
        </h1>
        <p className="font-accent italic text-white/80 text-lg sm:text-xl md:text-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {HERO.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#packages"
            className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Explore Packages
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/50 text-white font-body font-medium text-sm hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}

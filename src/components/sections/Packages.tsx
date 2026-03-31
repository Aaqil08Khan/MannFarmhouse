import { Check, Star } from "lucide-react";
import { PACKAGES } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Packages() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="packages" className="section-padding noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="Choose Your Stay" subtitle="Curated experiences for every occasion" />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl bg-card border ${
                pkg.popular ? "border-accent shadow-xl scale-[1.02]" : "border-border"
              } p-6 sm:p-8 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground rounded-full text-xs font-body font-medium">
                  <Star className="w-3 h-3" fill="currentColor" /> Most Popular
                </div>
              )}

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2">
                {pkg.name}
              </h3>
              <div className="mb-1">
                <span className="font-display text-3xl sm:text-4xl font-bold text-primary">
                  {pkg.price}
                </span>
              </div>
              <p className="font-body text-xs text-muted mb-6">{pkg.priceNote}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-body text-sm font-medium transition-colors ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-muted mt-8">
          All packages customizable. Contact us for group discounts.
        </p>
      </div>
    </section>
  );
}

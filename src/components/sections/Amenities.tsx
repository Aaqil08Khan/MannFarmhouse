import { AMENITIES } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Amenities() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="amenities" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Everything You Need" subtitle="Premium amenities for an unforgettable stay" />

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {AMENITIES.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.label}
                className={`group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 50}ms` : "0ms" }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent group-hover:text-primary transition-colors" />
                <span className="font-body text-xs sm:text-sm text-foreground text-center">
                  {amenity.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

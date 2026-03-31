import { ABOUT } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading title={ABOUT.headline} />

        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={ABOUT.image}
              alt="Mann Farmhouse"
              className="w-full h-72 sm:h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-foreground/80 leading-relaxed mb-4 text-sm sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-12 sm:mt-16 grid grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {ABOUT.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

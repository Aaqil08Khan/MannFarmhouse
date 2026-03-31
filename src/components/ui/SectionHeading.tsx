import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-accent italic text-muted text-base sm:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-accent" />
    </div>
  );
}

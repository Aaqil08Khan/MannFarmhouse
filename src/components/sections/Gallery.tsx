import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY_IMAGES } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Moments at Mann" subtitle="A glimpse into the experience" />

        <div
          ref={ref}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`break-inside-avoid overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={GALLERY_IMAGES.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}

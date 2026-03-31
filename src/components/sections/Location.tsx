import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { MAPS_EMBED_URL, MAPS_DIRECTIONS_URL, ADDRESS, PHONE_NUMBER, EMAIL } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="location" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Find Us" subtitle="Conveniently located near Hyderabad" />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-72 sm:h-80 lg:h-96">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mann Farmhouse Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">Address</h4>
                <p className="font-body text-sm text-foreground/70">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h4>
                <p className="font-body text-sm text-foreground/70">{PHONE_NUMBER}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">Email</h4>
                <p className="font-body text-sm text-foreground/70">{EMAIL}</p>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-colors w-fit"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

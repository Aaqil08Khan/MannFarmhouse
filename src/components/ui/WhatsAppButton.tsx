import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative">
        <div className="whatsapp-pulse w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
  {/* Replace MessageCircle with this */}
  <img 
    src="../public/assets/icons/whatsapp.svg" 
    alt="WhatsApp" 
    className="w-8 h-8" 
  />
</div>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 rounded-lg bg-foreground text-primary-foreground text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us
        </span>
      </div>
    </a>
  );
}

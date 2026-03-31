import {
  Waves, Flame, Baby, UtensilsCrossed, Beef, Volleyball,
  Gamepad2, AirVent, Car, Sprout, PartyPopper, Wifi
} from "lucide-react";

export const WHATSAPP_NUMBER = "919966639631";
export const PHONE_NUMBER = " +91 99666 39631";
export const EMAIL = "info@mannfarmhouse.com";
export const ADDRESS = "Mann Farmhouse, PX8Q+HJ, Dupalle, Telangana 503186";
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123!2d77.9890727!3d18.7163755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcddf0030a88ed7%3A0x574939dbfb36aab1!2sMann%20horizon%20farm%20house!5e0!3m2!1sen!2sin!4v1234567890";
export const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=18.7163755,77.9890727";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headline: "Escape to Mann",
  subheadline: "A farmhouse retreat crafted for stillness, celebration & connection.",
  backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
};

export const ABOUT = {
  headline: "Where Nature Meets Comfort",
  paragraphs: [
    "Nestled amidst lush green acres on the outskirts of Hyderabad, Mann Farmhouse is your sanctuary away from the city's bustle. Every corner has been thoughtfully designed to bring you closer to nature while wrapping you in modern comfort.",
    "Whether you're planning a serene family getaway, a vibrant celebration, or a focused corporate retreat — Mann offers the perfect canvas. Wake up to birdsong, dine under the stars, and create memories that last a lifetime.",
    "With sprawling lawns, curated experiences, and warm hospitality, Mann Farmhouse redefines what it means to truly unwind.",
  ],
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  stats: [
    { value: "5", label: "Acres of Greenery" },
    { value: "12+", label: "Luxury Rooms" },
    { value: "500+", label: "Happy Guests" },
  ],
};

export const AMENITIES = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Flame, label: "Bonfire Area" },
  { icon: Baby, label: "Kids Play Zone" },
  { icon: UtensilsCrossed, label: "Outdoor Dining" },
  { icon: Beef, label: "BBQ Grill" },
  { icon: Volleyball, label: "Badminton Court" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: AirVent, label: "AC Rooms" },
  { icon: Car, label: "Ample Parking" },
  { icon: Sprout, label: "Organic Garden" },
  { icon: PartyPopper, label: "Event Lawn" },
  { icon: Wifi, label: "High-Speed WiFi" },
];

export const PACKAGES = [
  {
    name: "Day Outing",
    price: "₹1,500",
    priceNote: "per person",
    popular: false,
    inclusions: [
      "Pool access (10 AM – 6 PM)",
      "Welcome drinks",
      "Lunch buffet",
      "Indoor & outdoor games",
      "Bonfire (seasonal)",
      "Parking included",
    ],
  },
  {
    name: "Overnight Stay",
    price: "₹4,500",
    priceNote: "per night / room",
    popular: true,
    inclusions: [
      "AC room with king bed",
      "Breakfast & dinner included",
      "Pool & all amenities access",
      "Bonfire with music",
      "Evening snacks & tea",
      "Late checkout available",
    ],
  },
  {
    name: "Private Event",
    price: "Custom",
    priceNote: "get a quote",
    popular: false,
    inclusions: [
      "Exclusive farmhouse booking",
      "Custom catering menu",
      "Decoration & setup support",
      "DJ / music arrangements",
      "Accommodation for guests",
      "Dedicated event coordinator",
    ],
  },
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", alt: "Farmhouse exterior" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", alt: "Luxury pool area" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80", alt: "Outdoor dining setup" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", alt: "Resort view" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", alt: "Elegant interiors" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", alt: "Comfortable bedroom" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80", alt: "Bonfire evening" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", alt: "Nature surroundings" },
  { src: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=800&q=80", alt: "Garden area" },
];

export const OCCASION_OPTIONS = [
  "Family Outing",
  "Corporate Event",
  "Birthday",
  "Wedding",
  "Other",
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/mannfarmhouse",
  facebook: "https://facebook.com/mannfarmhouse",
  youtube: "https://youtube.com/@mannfarmhouse",
};

export const FOOTER_TAGLINE = "Your escape into nature's embrace.";

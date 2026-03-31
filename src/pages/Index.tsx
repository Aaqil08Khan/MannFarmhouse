import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Amenities from "@/components/sections/Amenities";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBookBar from "@/components/ui/MobileBookBar";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Amenities />
    <Packages />
    <Gallery />
    <Contact />
    <Location />
    <Footer />
    <WhatsAppButton />
    <MobileBookBar />
  </>
);

export default Index;

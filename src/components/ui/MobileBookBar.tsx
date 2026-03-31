export default function MobileBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
      <a
        href="#contact"
        className="block w-full text-center py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm"
      >
        Book Now
      </a>
    </div>
  );
}

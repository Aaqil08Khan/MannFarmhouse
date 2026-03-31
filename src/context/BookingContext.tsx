import { createContext, useContext, useState, ReactNode } from "react";

interface BookingState {
  selectedPackage: string | null;
  setSelectedPackage: (pkg: string | null) => void;
}

const BookingContext = createContext<BookingState | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  return (
    <BookingContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

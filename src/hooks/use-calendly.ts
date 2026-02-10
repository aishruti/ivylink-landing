import { useState, useCallback } from "react";
import { trackCalendlyOpen } from "@/lib/analytics";

export const CALENDLY_URL = "https://calendly.com/nalin-ahuja/30min";

export const useCalendly = (source: string = "unknown") => {
  const [isOpen, setIsOpen] = useState(false);
  const openCalendly = useCallback(() => {
    trackCalendlyOpen(source);
    setIsOpen(true);
  }, [source]);
  const closeCalendly = useCallback(() => setIsOpen(false), []);
  return { isOpen, openCalendly, closeCalendly };
};

import { useState, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

export const useWaitlist = (source: string = "unknown") => {
  const [isOpen, setIsOpen] = useState(false);
  const openWaitlist = useCallback(() => {
    trackEvent("waitlist_open", { source });
    setIsOpen(true);
  }, [source]);
  const closeWaitlist = useCallback(() => setIsOpen(false), []);
  return { isOpen, openWaitlist, closeWaitlist };
};

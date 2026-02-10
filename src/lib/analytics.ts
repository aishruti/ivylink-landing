declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
  window.gtag?.("event", eventName, params);
};

export const trackCTAClick = (ctaLabel: string, section: string) => {
  trackEvent("cta_click", {
    cta_label: ctaLabel,
    section,
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", { section_name: sectionName });
};

export const trackCalendlyOpen = (source: string) => {
  trackEvent("calendly_open", { source });
};

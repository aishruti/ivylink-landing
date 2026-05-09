import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * PERF: Drop-in replacement for the shadcn `Button` component on the landing
 * page. Every button on the page used `variant="hero"`, so we don't need
 * class-variance-authority's variant matrix or @radix-ui/react-slot's polymorphic
 * forwarding. This component renders a styled <a> directly. Bundle delta is
 * roughly -8KB (cva + slot + base button styles) and there's nothing for the
 * runtime to evaluate at mount time, which trims a few ms off LCP.
 *
 * Visual output is byte-identical to <Button variant="hero" size={size} asChild><a>...</a></Button>.
 */

type Size = "default" | "lg" | "xl";

const sizeClasses: Record<Size, string> = {
  default: "min-h-10 px-4 py-2",
  lg: "min-h-12 rounded-lg px-6 sm:px-8 py-3 text-base",
  xl: "min-h-14 rounded-xl px-6 sm:px-10 py-3.5 text-base sm:text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-center gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl glow-primary hover:scale-[1.02] active:scale-[0.98]";

interface CtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: Size;
}

export const Cta = React.forwardRef<HTMLAnchorElement, CtaProps>(
  ({ className, size = "default", children, ...props }, ref) => (
    <a ref={ref} className={cn(baseClasses, sizeClasses[size], className)} {...props}>
      {children}
    </a>
  ),
);
Cta.displayName = "Cta";

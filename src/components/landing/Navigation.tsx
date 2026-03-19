import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";
import { useWaitlist } from "@/hooks/use-waitlist";
import ivylinkLogo from "@/assets/ivylink-logo.jpg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, openWaitlist, closeWaitlist } = useWaitlist("navigation");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={ivylinkLogo} alt="IvyLink logo" className="h-9 w-9 rounded-xl object-cover" />
            <span className="text-xl font-display font-bold text-foreground">IvyLink</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" onClick={openWaitlist}>
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" onClick={openWaitlist}>
                Join the Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
      <WaitlistDialog open={isOpen} onOpenChange={(open) => !open && closeWaitlist()} />
    </nav>
  );
};

export default Navigation;

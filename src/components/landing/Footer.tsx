import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ivylinkLogo from "@/assets/ivylink-logo.svg";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/ivylink.ai/", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src={ivylinkLogo} alt="IvyLink logo" className="h-10 w-10 rounded-xl object-cover" />
              <span className="text-2xl font-display font-bold">IvyLink</span>
            </a>
            <p className="text-background/60 mb-6 leading-relaxed">
              The local marketing platform for wellness businesses. Partner with nearby gyms, salons, and med spas to share customers and fill your calendar without ad spend.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@ivylink.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(650) 863-4556</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New Jersey, NJ</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid gap-8 sm:grid-cols-3">
            <div>
              {/* A11Y: h3 (was h4). The previous heading on the page is the
                  ClosingCTA h2, so we can't skip a level. Visual size unchanged. */}
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} IvyLink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
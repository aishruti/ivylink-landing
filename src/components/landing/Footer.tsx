import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
  { icon: Instagram, href: "#", label: "Instagram" },
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
              Automate local collaborations and fill your med spa calendar without the manual hustle.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@ivylink.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
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
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
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
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
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
import ivylinkLogo from "@/assets/ivylink-logo.svg";

/*
 * Footer - dark background with performance guarantee.
 */

const FooterDark = () => {
  return (
    <footer
      className="w-full py-12 border-t"
      style={{
        backgroundColor: '#1A1A2E',
        borderTopColor: 'rgba(255, 255, 255, 0.07)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Logo + guarantee */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 w-fit">
              <img
                src={ivylinkLogo}
                alt="IvyLink"
                className="h-6 w-6 rounded"
              />
              <span className="text-white font-bold text-lg">IvyLink</span>
            </a>
            <p
              className="text-sm"
              style={{
                color: '#64748B',
                lineHeight: '1.6',
                maxWidth: '280px',
              }}
            >
              IvyLink is performance-only. If we don't recover revenue, you pay nothing.
            </p>
          </div>

          {/* Right: Contact info */}
          <div className="text-right md:text-right">
            <p
              className="text-sm mb-1"
              style={{ color: '#64748B' }}
            >
              <a
                href="mailto:nalin@ivylink.co"
                className="hover:text-[#E85D4A] transition-colors"
              >
                nalin@ivylink.co
              </a>
            </p>
            <p
              className="text-xs"
              style={{ color: '#475569' }}
            >
              Nalin Ahuja & Shruti Ahuja, Founders
            </p>
            <p
              className="text-xs mt-3"
              style={{ color: '#475569' }}
            >
              © 2026 IvyLink
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;

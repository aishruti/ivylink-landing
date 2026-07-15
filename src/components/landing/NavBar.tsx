import ivylinkLogo from "@/assets/ivylink-logo.svg";

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-[#1A1A2E]"
      style={{ height: '60px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={ivylinkLogo}
            alt="IvyLink"
            className="h-6 w-6 rounded"
          />
          <span className="text-white font-bold text-lg">IvyLink</span>
        </a>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-white text-sm font-medium hover:text-[#E85D4A] transition-colors"
          >
            How it works
          </a>
          <a
            href="#results"
            className="text-white text-sm font-medium hover:text-[#E85D4A] transition-colors"
          >
            Results
          </a>
          <a
            href="#"
            className="text-white text-sm font-medium hover:text-[#E85D4A] transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* Right: Email + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:nalin@ivylink.co"
            className="hidden sm:block text-[#8B8BA7] text-xs hover:text-[#E85D4A] transition-colors"
          >
            nalin@ivylink.co
          </a>
          <button
            className="text-white bg-[#E85D4A] hover:bg-[#C94535] px-5 py-2 rounded-full text-xs font-semibold transition-colors"
          >
            Book a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

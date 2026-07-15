/*
 * Closing CTA section - full coral background (#E85D4A).
 * White headline, white button.
 */

const ClosingCtaCoraal = () => {
  return (
    <section
      className="w-full py-28"
      style={{ backgroundColor: '#E85D4A' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2
          className="text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          style={{
            color: '#FFFFFF',
            letterSpacing: '-1px',
            lineHeight: '1.2',
          }}
        >
          Your lapsed clients haven't forgotten you.
          They just need a nudge.
        </h2>

        {/* Subtext */}
        <p
          className="text-lg mb-10"
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
          }}
        >
          IvyLink's AI agent runs your entire revenue recovery — 24/7,
          on your booking system, for wellness businesses only.
        </p>

        {/* Button */}
        <button
          className="bg-white text-[#E85D4A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F8F8F8] transition-colors inline-block mb-3"
        >
          See what IvyLink would recover for you →
        </button>

        {/* Micro-copy */}
        <p
          className="text-xs"
          style={{ color: 'rgba(255, 255, 255, 0.65)' }}
        >
          No setup fee · 30-day results guarantee · Pay 20% only on results
        </p>
      </div>
    </section>
  );
};

export default ClosingCtaCoraal;

/*
 * Closing CTA section - full coral background (#E85D4A).
 * White headline, white button.
 */

const ClosingCtaCoraal = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#E85D4A',
        paddingTop: '64px',
        paddingBottom: '64px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Headline */}
        <h2
          className="text-5xl lg:text-6xl font-bold tracking-tight"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            letterSpacing: '-1px',
            lineHeight: '1.2',
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto',
            marginBottom: '24px',
          }}
        >
          Your past clients are your lowest-cost bookings.<br />We go get them back for you.
        </h2>

        {/* Subtext */}
        <p
          className="text-lg"
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            fontSize: '17px',
            textAlign: 'center',
            maxWidth: '480px',
            margin: '0 auto',
            marginBottom: '32px',
          }}
        >
          No software to learn. No campaigns to manage. Pay only when we recover revenue.
        </p>

        {/* Button */}
        <button
          className="bg-white text-[#E85D4A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F8F8F8] transition-colors"
          style={{
            display: 'block',
            width: 'fit-content',
            margin: '0 auto',
            marginBottom: '16px',
          }}
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

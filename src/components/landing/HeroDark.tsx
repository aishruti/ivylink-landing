/*
 * Dark hero section. Background: #1A1A2E.
 * Centered single column. No image, no animations.
 * Copy-focused: headline drives the value prop.
 */

const HeroDark = () => {
  return (
    <section
      className="w-full pt-32 pb-20 lg:pb-24"
      style={{ backgroundColor: '#1A1A2E' }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold tracking-widest mb-4"
          style={{ color: '#8B8BA7', letterSpacing: '0.05em' }}
        >
          Used by wellness studios across New Jersey · Results guaranteed in 30 days
        </p>

        {/* Headline */}
        <h1
          className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          style={{
            color: '#FFFFFF',
            letterSpacing: '-1.5px',
            lineHeight: '1.1',
          }}
        >
          Your med spa is leaving $40,000 on the table every year.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg lg:text-xl mb-8 mx-auto"
          style={{
            color: '#94A3B8',
            lineHeight: '1.6',
            maxWidth: '600px',
          }}
        >
          IvyLink's AI agent texts lapsed clients, answers every DM, and books the
          appointment — while you're in a treatment room.
        </p>

        {/* CTA Button */}
        <button
          className="bg-[#E85D4A] text-white px-8 py-3.5 rounded-lg font-semibold text-base mb-3 hover:bg-[#C94535] transition-colors inline-block"
        >
          See what IvyLink would recover for you →
        </button>

        {/* Micro-copy */}
        <p
          className="text-xs"
          style={{ color: '#64748B' }}
        >
          No setup fee · 30-day results guarantee · Pay only on performance
        </p>
      </div>
    </section>
  );
};

export default HeroDark;

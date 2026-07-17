/*
 * Dark hero section. Background: #1A1A2E.
 * Centered single column. No image, no animations.
 * Copy-focused: headline drives the value prop.
 */

const HeroDark = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A1A2E',
        paddingTop: '64px',
        paddingBottom: '64px',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'max(24px, 5vw)',
          paddingRight: 'max(24px, 5vw)',
          boxSizing: 'border-box',
        }}
      >
        {/* Headline */}
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: '1.05',
            letterSpacing: '-1.5px',
            maxWidth: '100%',
            width: '100%',
            margin: '0',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
            textAlign: 'left',
            alignSelf: 'flex-start',
            marginLeft: '0',
            marginRight: 'auto',
          }}
        >
          Your past clients didn't leave because they were unhappy.<br />They just got busy. We bring them back.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '17px',
            color: '#94A3B8',
            fontWeight: 400,
            lineHeight: '1.6',
            maxWidth: '580px',
            margin: '0',
            marginTop: '16px',
            marginBottom: '24px',
            textAlign: 'left',
            alignSelf: 'flex-start',
            marginLeft: '0',
            marginRight: 'auto',
          }}
        >
          IvyLink runs lapsed client reactivation for med spas, gyms, salons, and yoga studios. You see bookings appear. You pay only on results.
        </p>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: '#E85D4A',
            color: '#FFFFFF',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingTop: '14px',
            paddingBottom: '14px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            marginBottom: '8px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C94535'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E85D4A'}
        >
          See what IvyLink would recover for you →
        </button>

        {/* Micro-copy */}
        <p
          style={{
            fontSize: '12px',
            color: '#64748B',
            margin: '0',
          }}
        >
          No setup fee · 30-day results guarantee · Pay only on performance
        </p>
      </div>
    </section>
  );
};

export default HeroDark;

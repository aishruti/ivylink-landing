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
        paddingTop: '60px',
        paddingBottom: '40px',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '100%' }}>
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
            margin: '0 auto',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
          }}
        >
          Lapsed clients, missed calls, ignored DMs.<br />That's revenue you've already lost. We get it back.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(17px, 2.5vw, 20px)',
            color: '#6B7280',
            fontWeight: 400,
            lineHeight: '1.6',
            maxWidth: '540px',
            margin: '0 auto',
            marginTop: '16px',
            marginBottom: '24px',
          }}
        >
          IvyLink finds lapsed clients, answers missed calls and DMs, and books the appointment. You find out when it's done.
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

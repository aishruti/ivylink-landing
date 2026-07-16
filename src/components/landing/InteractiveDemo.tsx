/*
 * Interactive Demo section.
 * White background. Contains embedded booking demo.
 * For now: placeholder with section structure.
 */

const InteractiveDemo = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div
          style={{
            marginBottom: '48px',
            textAlign: 'left',
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            marginLeft: '0',
            marginRight: 'auto',
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest mb-4"
            style={{
              color: '#E85D4A',
              letterSpacing: '0.1em',
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            LIVE DEMO
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: '#1A1A2E',
              letterSpacing: '-0.5px',
              maxWidth: '600px',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(16px, 2vw, 28px)',
              textAlign: 'left',
              margin: '0',
              padding: '0',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            Step through a real client conversation. Then book the appointment yourself.
          </h2>
        </div>

        {/* Demo placeholder */}
        <div
          id="booking-demo-container"
          className="rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundColor: '#F8F9FA',
            border: '1px solid #E8EAF0',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="text-center">
            <p
              style={{ color: '#8B8BA7' }}
            >
              Interactive booking demo will be embedded here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;

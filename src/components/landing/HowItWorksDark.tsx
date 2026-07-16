/*
 * How It Works - 3 step cards.
 * Dark background (#0F0F1A). No icons, just numbered cards.
 */

const HowItWorksDark = () => {
  const steps = [
    {
      number: '01',
      title: 'We pull your lapsed client list.',
      body: 'You give us access to your booking platform once. We export every client who hasn\'t booked in 90+ days and put a real dollar figure on what they\'re worth.',
    },
    {
      number: '02',
      title: 'We run the win-back campaign.',
      body: 'Personal messages go out to every lapsed client. We offer a complimentary add-on, not a discount, to bring them back. You never write a single message.',
    },
    {
      number: '03',
      title: 'Bookings appear in your calendar.',
      body: 'You get a push notification for every recovery. IvyLink takes 20% of what we recover. Nothing if we don\'t.',
    },
  ];

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#0F0F1A',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
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
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-5xl font-bold tracking-tight"
            style={{
              color: '#FFFFFF',
              letterSpacing: '-0.8px',
              lineHeight: '1.2',
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
            3 minutes to set up. First bookings within 24 hours.
          </h2>
        </div>

        {/* Three cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl p-8"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <p
                className="text-xs font-bold tracking-widest mb-4"
                style={{
                  color: '#E85D4A',
                  letterSpacing: '0.1em',
                  fontSize: '11px',
                  fontWeight: '700',
                }}
              >
                {step.number}
              </p>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: '#4A4A6A',
                  lineHeight: '1.7',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksDark;

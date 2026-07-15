/*
 * How It Works - 3 step cards.
 * Dark background (#0F0F1A). No icons, just numbered cards.
 */

const HowItWorksDark = () => {
  const steps = [
    {
      number: '01',
      title: 'We audit your gaps.',
      body: 'We map your lapsed client database, inbound volume, and missed calls. You see the recoverable number before spending a dollar.',
    },
    {
      number: '02',
      title: 'Your AI agent goes to work.',
      body: "It texts lapsed clients, answers every DM, handles objections, and books appointments — while you're in the treatment room.",
    },
    {
      number: '03',
      title: 'Appointments appear. You pay on results.',
      body: "You get a push notification. The client gets a calendar invite. IvyLink takes 20% of what it recovers. If we don't recover revenue, you pay nothing.",
    },
  ];

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: '#0F0F1A' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-xs font-semibold tracking-widest mb-4"
            style={{ color: '#E85D4A' }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-5xl font-bold tracking-tight"
            style={{
              color: '#FFFFFF',
              letterSpacing: '-0.8px',
              lineHeight: '1.2',
            }}
          >
            3 minutes to set up.
            <br />
            First bookings within 24 hours.
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
                style={{ color: '#E85D4A', letterSpacing: '0.1em' }}
              >
                {step.number}
              </p>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#FFFFFF' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: '#94A3B8',
                  lineHeight: '1.7',
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

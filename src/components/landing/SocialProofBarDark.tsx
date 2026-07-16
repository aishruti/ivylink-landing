/*
 * Social proof bar. Directly below hero.
 * Dark background (#151525), three stats in coral.
 * On mobile: stacked vertically with horizontal rules.
 */

const SocialProofBarDark = () => {
  const stats = [
    {
      number: '11%',
      label: 'average win-back rate on lapsed client campaigns',
    },
    {
      number: '200–800',
      label: 'lapsed clients sitting in the avg wellness database',
    },
    {
      number: '30 days',
      label: 'to your first recovered bookings',
    },
  ];

  return (
    <section
      className="w-full border-t"
      style={{
        backgroundColor: '#151525',
        borderTopColor: 'rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center py-6 ${
                idx !== stats.length - 1
                  ? 'md:border-r'
                  : ''
              }`}
              style={{
                borderRightColor:
                  idx !== stats.length - 1
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
              }}
            >
              <p
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: '#E85D4A' }}
              >
                {stat.number}
              </p>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#64748B' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBarDark;

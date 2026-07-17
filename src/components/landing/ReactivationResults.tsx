/*
 * Reactivation Results section.
 * Timeline, statement, and results preview.
 */

const ReactivationResults = () => {
  const timelineRows = [
    {
      day: 'Day 5',
      event: 'Lapsed client reactivated',
      badge: 'First booking recovered',
    },
    {
      day: 'Day 12',
      event: 'Dormant database win-back booked',
      badge: 'Avg value $192',
    },
    {
      day: 'Day 18',
      event: 'Missed call recovery converted',
      badge: 'Booked in 12 minutes',
    },
    {
      day: 'Day 24',
      event: 'Unanswered DM answered and booked',
      badge: '4 second response',
    },
    {
      day: 'Day 30',
      event: 'First-visit follow-up booked second appointment',
      badge: 'Repeat client secured',
    },
  ];

  const checklistItems = [
    'You have 200+ past clients who haven\'t booked in over 3 months.',
    'You know those clients liked you. They just stopped coming in.',
    'You don\'t have time to personally follow up with hundreds of people.',
    'You\'ve tried email blasts. Most went ignored.',
    'You want those clients back without running ads or hiring staff.',
  ];

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1000px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'max(24px, 5vw)',
          paddingRight: 'max(24px, 5vw)',
          boxSizing: 'border-box',
          textAlign: 'left',
        }}
      >
        {/* HEADER */}
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
            style={{
              fontSize: '11px',
              color: '#E85D4A',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textAlign: 'left',
              margin: '0',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            YOUR FIRST 30 DAYS
          </p>
          <h2
            style={{
              fontSize: 'clamp(20px, 2.5vw, 36px)',
              fontWeight: 700,
              color: '#1A1A2E',
              letterSpacing: '-0.5px',
              textAlign: 'left',
              margin: '0',
              marginTop: '12px',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            We recover revenue already sitting in your database.
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4A4A6A',
              lineHeight: '1.7',
              maxWidth: '620px',
              textAlign: 'left',
              marginTop: '12px',
              margin: '12px 0 0 0',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            We pull your lapsed client list, size the gap, and run the recovery. You just see results appear.
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ marginTop: '48px', marginBottom: '48px' }}>
          {timelineRows.map((row, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: idx < timelineRows.length - 1 ? '32px' : '0',
                position: 'relative',
              }}
            >
              {/* Timeline stem and dot */}
              <div style={{ position: 'relative', width: '60px', flexShrink: 0 }}>
                {/* Stem */}
                {idx < timelineRows.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '24px',
                      top: '32px',
                      width: '2px',
                      height: '32px',
                      backgroundColor: '#E8EAF0',
                    }}
                  />
                )}
                {/* Dot */}
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#E85D4A',
                    marginTop: '8px',
                    marginLeft: '20px',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ paddingTop: '4px' }}>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#E85D4A',
                    fontWeight: 700,
                    margin: '0',
                    marginBottom: '4px',
                  }}
                >
                  {row.day}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#1A1A2E',
                    fontWeight: 500,
                    margin: '0',
                    marginBottom: '8px',
                  }}
                >
                  {row.event}
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#FFF5F4',
                    color: '#E85D4A',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  ✓ {row.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATEMENT */}
        <div
          style={{
            marginTop: '48px',
            marginBottom: '48px',
            backgroundColor: '#1A1A2E',
            borderRadius: '10px',
            padding: '24px 32px',
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontSize: '22px',
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.3px',
              margin: '0',
            }}
          >
            You never log in. You never approve a message. You just see results.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#94A3B8',
              margin: '0',
              marginTop: '10px',
            }}
          >
            Zero risk. Results in 30 days or you pay nothing.
          </p>
        </div>

        {/* IS THIS YOU? */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'left',
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            marginLeft: '0',
            marginRight: 'auto',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: '#E85D4A',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textAlign: 'left',
              margin: '0',
              marginBottom: '20px',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            IS THIS YOU?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {checklistItems.map((item, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '15px',
                  color: '#94A3B8',
                  lineHeight: '1.8',
                  margin: '0',
                }}
              >
                <span style={{ color: '#E85D4A' }}>✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactivationResults;

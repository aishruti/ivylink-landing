/*
 * Comparison table: Hire staff vs Agency vs IvyLink
 * Light background (#F4F6F8). Coral highlighting for IvyLink column.
 */

const ComparisonTable = () => {
  const rows = [
    {
      feature: 'Works while you sleep',
      staff: false,
      agency: false,
      ivylink: true,
    },
    {
      feature: 'Pays for itself in 30 days',
      staff: false,
      agency: false,
      ivylink: true,
    },
    {
      feature: 'Performance pricing',
      staff: false,
      agency: false,
      ivylink: true,
    },
    {
      feature: 'Wellness-only focus',
      staff: false,
      agency: false,
      ivylink: true,
    },
    {
      feature: 'Zero risk to start',
      staff: false,
      agency: false,
      ivylink: true,
    },
    {
      feature: 'Knows your booking system',
      staff: false,
      agency: false,
      ivylink: true,
    },
  ];

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F4F6F8',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: '1000px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'left',
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
          boxSizing: 'border-box',
        }}
      >
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
              letterSpacing: '0.1em',
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
            }}
          >
            WHY IVYLINK
          </p>
          <h2
            className="text-5xl font-bold tracking-tight"
            style={{
              color: '#1A1A2E',
              letterSpacing: '-0.5px',
              maxWidth: '100%',
              margin: '0',
              whiteSpace: 'normal',
              fontSize: 'clamp(24px, 3.5vw, 48px)',
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            One agent. Replaces your entire revenue recovery stack.
          </h2>
        </div>

        {/* Table */}
        <div className="rounded-lg overflow-hidden shadow-sm" style={{ border: '1px solid #E8EAF0', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          <table className="w-full" style={{ tableLayout: 'fixed', width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#1A1A2E' }}>
                <th
                  className="text-left px-6 py-4 text-sm font-semibold text-white"
                  style={{ borderBottomColor: '#1A1A2E' }}
                >
                  Feature
                </th>
                <th
                  className="px-6 py-4 text-sm font-semibold text-white"
                  style={{ borderBottomColor: '#1A1A2E' }}
                >
                  Hire staff
                </th>
                <th
                  className="px-6 py-4 text-sm font-semibold text-white"
                  style={{ borderBottomColor: '#1A1A2E' }}
                >
                  Marketing agency
                </th>
                <th
                  className="px-6 py-4 text-sm font-semibold text-white"
                  style={{
                    backgroundColor: '#E85D4A',
                    borderBottomColor: '#E85D4A',
                  }}
                >
                  IvyLink
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
                    borderBottomColor: '#E8EAF0',
                  }}
                  className="border-b"
                >
                  <td
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#1A1A2E' }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center"
                    style={{ color: '#8B8BA7' }}
                  >
                    {row.staff ? '✓' : '✗'}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center"
                    style={{ color: '#8B8BA7' }}
                  >
                    {row.agency ? '✓' : '✗'}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-center font-bold"
                    style={{
                      backgroundColor:
                        idx % 2 === 0 ? '#FFF5F4' : '#FFF0ED',
                      color: '#E85D4A',
                    }}
                  >
                    {row.ivylink ? '✓' : '✗'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Banner below table */}
        <div
          className="rounded-lg p-6 mt-8 text-center"
          style={{ backgroundColor: '#1A1A2E', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
        >
          <p
            className="text-base italic font-medium"
            style={{ color: '#FFFFFF' }}
          >
            "We recover revenue you've already earned without you touching any software. Results in 30 days or you pay nothing."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

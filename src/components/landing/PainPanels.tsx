/*
 * Three pain panels with HTML/CSS widgets (no images).
 * Alternating text/visual layout. Light background.
 */

const PainPanels = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F4F6F8',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
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
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: '#1A1A2E',
              letterSpacing: '-0.5px',
              maxWidth: '720px',
              whiteSpace: 'normal',
              fontSize: 'clamp(20px, 2.5vw, 36px)',
              textAlign: 'left',
              margin: '0',
              padding: '0',
              alignSelf: 'flex-start',
              marginLeft: '0',
              marginRight: 'auto',
              fontWeight: '700',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            Your past clients didn't leave because they were unhappy. They just got busy.
          </h2>
        </div>

        {/* Panel 1: Lapsed Client Reactivation (PRIMARY) */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div style={{ textAlign: 'left', alignItems: 'flex-start', alignSelf: 'flex-start', marginLeft: '0', marginRight: 'auto' }}>
            <p
              className="text-xs font-semibold tracking-widest mb-3"
              style={{
                color: '#E85D4A',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              01. LAPSED CLIENT REACTIVATION
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{
                color: '#1A1A2E',
                letterSpacing: '-0.3px',
                lineHeight: '1.3',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              Sarah had her last HydraFacial 8 months ago.
              She hasn't forgotten you. She just needs a nudge.
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: '#4A4A6A', lineHeight: '1.7' }}
            >
              Your database has hundreds of clients who loved you and then got busy.
              IvyLink finds every lapsed client, sends a personal win-back message,
              and offers a complimentary add-on to bring them back.
              No discounts. No ad spend. No manual work on your end.
            </p>
            <div
              className="inline-block px-4 py-2 rounded-full border"
              style={{
                backgroundColor: '#FFF5F4',
                borderColor: '#E85D4A',
              }}
            >
              <p
                className="text-xs font-semibold"
                style={{ color: '#E85D4A' }}
              >
                11% average win-back rate · $192 avg appointment value
              </p>
            </div>
          </div>

          {/* SMS Thread Widget */}
          <div
            className="rounded-xl p-5 shadow-md"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8EAF0',
            }}
          >
            <div className="space-y-3">
              <div
                className="p-3 rounded-lg text-sm"
                style={{
                  backgroundColor: '#F4F6F8',
                  borderRadius: '14px 14px 14px 4px',
                }}
              >
                <p style={{ color: '#1A1A2E' }}>
                  Hi Sarah! It's Alivio Wellness. We've missed you! Your last HydraFacial
                  was 8 months ago. We're including a complimentary LED add-on for returning
                  clients this month. Want me to check availability?
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: '#8B8BA7' }}
                >
                  IvyLink AI · Day 1
                </p>
              </div>
              <div
                className="p-3 rounded-lg text-sm text-white ml-auto max-w-xs"
                style={{
                  backgroundColor: '#E85D4A',
                  borderRadius: '14px 14px 4px 14px',
                }}
              >
                <p>Hi! I've been meaning to come back. What do you have available?</p>
              </div>
              <div
                className="p-3 rounded-lg text-sm"
                style={{
                  backgroundColor: '#F4F6F8',
                  borderRadius: '14px 14px 14px 4px',
                }}
              >
                <p style={{ color: '#1A1A2E' }}>
                  So glad! We have Tuesday afternoon and Thursday morning next week.
                  Maya is also available. She did your last treatment. Here's your booking link.
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: '#8B8BA7' }}
                >
                  IvyLink AI · 4s response
                </p>
              </div>
              <div
                className="p-3 rounded-lg text-sm text-white ml-auto max-w-xs"
                style={{
                  backgroundColor: '#E85D4A',
                  borderRadius: '14px 14px 4px 14px',
                }}
              >
                <p>Perfect, booked for Thursday at 10am! Thank you 😊</p>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs mt-2"
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#16a34a',
                }}
              >
                <span>✓</span>
                Booked · $192 appointment
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Missed Calls (SECONDARY) */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Timeline Widget - Left on mobile, right on desktop */}
          <div
            className="rounded-xl p-5 shadow-md order-2 lg:order-1"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8EAF0',
            }}
          >
            <div className="space-y-4">
              {/* Row 1: Missed call */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: '#DC2626' }}
                  >
                    📵
                  </div>
                  {/* Connector line */}
                  <div
                    className="w-0.5 h-12"
                    style={{ backgroundColor: '#E8EAF0' }}
                  ></div>
                </div>
                <div className="flex-1 pt-1">
                  <p
                    className="text-sm font-bold"
                    style={{ color: '#1A1A2E' }}
                  >
                    Missed call. Jennifer L.
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#8B8BA7' }}
                  >
                    (201) 555-0183
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: '#8B8BA7' }}
                  >
                    11:02:14am
                  </p>
                </div>
              </div>

              {/* Row 2: SMS sent */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: '#E85D4A' }}
                  >
                    📨
                  </div>
                  <div
                    className="w-0.5 h-12"
                    style={{ backgroundColor: '#E8EAF0' }}
                  ></div>
                </div>
                <div className="flex-1 pt-1">
                  <p
                    className="text-sm font-bold"
                    style={{ color: '#1A1A2E' }}
                  >
                    Recovery SMS sent
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#8B8BA7' }}
                  >
                    AI text fired automatically
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <p
                      className="text-xs"
                      style={{ color: '#8B8BA7' }}
                    >
                      11:02:25am
                    </p>
                    <span
                      className="text-xs font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: '#FFF5F4',
                        color: '#E85D4A',
                      }}
                    >
                      11s later
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Booked */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: '#16a34a' }}
                  >
                    ✓
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <p
                    className="text-sm font-bold"
                    style={{ color: '#1A1A2E' }}
                  >
                    Appointment booked
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#8B8BA7' }}
                  >
                    Bridal facial package · $195
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: '#8B8BA7' }}
                  >
                    11:14am
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2" style={{ textAlign: 'left', alignItems: 'flex-start', alignSelf: 'flex-start', marginLeft: '0', marginRight: 'auto' }}>
            <p
              className="text-xs font-semibold tracking-widest mb-3"
              style={{
                color: '#E85D4A',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              02. MISSED CALLS
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{
                color: '#1A1A2E',
                letterSpacing: '-0.3px',
                lineHeight: '1.3',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              A call rings at 11:02am. You're mid-treatment.
              IvyLink answers in 11 seconds.
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: '#4A4A6A', lineHeight: '1.7' }}
            >
              Every missed call is a lead that will call somewhere else if they
              don't hear back fast. IvyLink sends a text within seconds,
              qualifies the lead, and books the appointment.
              You find out when it's done.
            </p>
            <div
              className="inline-block px-4 py-2 rounded-full border"
              style={{
                backgroundColor: '#FFF5F4',
                borderColor: '#E85D4A',
              }}
            >
              <p
                className="text-xs font-semibold"
                style={{ color: '#E85D4A' }}
              >
                Missed call to booked in 12 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3: Unanswered DMs (TERTIARY) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div style={{ textAlign: 'left', alignItems: 'flex-start', alignSelf: 'flex-start', marginLeft: '0', marginRight: 'auto' }}>
            <p
              className="text-xs font-semibold tracking-widest mb-3"
              style={{
                color: '#E85D4A',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              03. UNANSWERED DMS
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{
                color: '#1A1A2E',
                letterSpacing: '-0.3px',
                lineHeight: '1.3',
                textAlign: 'left',
                alignSelf: 'flex-start',
                marginLeft: '0',
                marginRight: 'auto',
              }}
            >
              A client DMs about Botox at 2pm.
              You're with someone until 5. IvyLink replies in 4 seconds.
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: '#4A4A6A', lineHeight: '1.7' }}
            >
              Unanswered DMs don't wait. IvyLink monitors every inbound message,
              responds instantly, and moves the conversation toward a booking.
              You never miss a lead because you were busy with another client.
            </p>
            <div
              className="inline-block px-4 py-2 rounded-full border"
              style={{
                backgroundColor: '#FFF5F4',
                borderColor: '#E85D4A',
              }}
            >
              <p
                className="text-xs font-semibold"
                style={{ color: '#E85D4A' }}
              >
                Avg response time: 4 seconds
              </p>
            </div>
          </div>

          {/* SMS Widget */}
          <div
            className="rounded-xl p-5 shadow-md"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8EAF0',
            }}
          >
            <div
              className="flex items-center justify-between pb-4 border-b"
              style={{ borderBottomColor: '#E8EAF0' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: '#E85D4A' }}
                >
                  MR
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: '#1A1A2E' }}
                  >
                    @maya_skin_nj
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#8B8BA7' }}
                  >
                    Instagram DM
                  </p>
                </div>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#16a34a',
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#16a34a]"></span>
                AI handling
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <div
                className="p-3 rounded-lg text-sm"
                style={{
                  backgroundColor: '#F4F6F8',
                  borderRadius: '14px 14px 14px 4px',
                }}
              >
                <p style={{ color: '#1A1A2E' }}>
                  Hi! I'm really interested in Botox but I'm nervous it'll hurt. Is it bad?
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: '#8B8BA7' }}
                >
                  2:14pm
                </p>
              </div>
              <div
                className="p-3 rounded-lg text-sm text-white ml-auto max-w-xs"
                style={{
                  backgroundColor: '#E85D4A',
                  borderRadius: '14px 14px 4px 14px',
                }}
              >
                <p>
                  Totally understandable! Most clients describe it as a tiny pinch. Many come on their lunch break. Want to book a free consult to meet our team first?
                </p>
                <p
                  className="text-xs mt-2 opacity-80"
                >
                  IvyLink AI · 4s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPanels;

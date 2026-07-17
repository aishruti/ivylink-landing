import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    function updateCalc() {
      const lapsed = +(document.getElementById('calc-lapsed') as HTMLInputElement)?.value || 312;
      const ltv = +(document.getElementById('calc-ltv') as HTMLInputElement)?.value || 480;
      const wb = +(document.getElementById('calc-wb') as HTMLInputElement)?.value || 11;

      const lapEl = document.getElementById('v-lapsed');
      const ltvEl = document.getElementById('v-ltv');
      const wbEl = document.getElementById('v-wb');

      if (lapEl) lapEl.textContent = lapsed + ' clients';
      if (ltvEl) ltvEl.textContent = '$' + ltv;
      if (wbEl) wbEl.textContent = wb + '%';

      const rec = Math.round(lapsed * (wb / 100) * ltv);
      const fee = Math.round(rec * 0.2);
      const net = Math.round(rec * 0.8);

      const recEl = document.getElementById('calc-result');
      const feeEl = document.getElementById('calc-fee');
      const netEl = document.getElementById('calc-net');

      if (recEl) recEl.textContent = '$' + rec.toLocaleString();
      if (feeEl) feeEl.textContent = '$' + fee.toLocaleString();
      if (netEl) netEl.textContent = '$' + net.toLocaleString();
    }

    document.querySelectorAll('.calc-slider').forEach(s =>
      s.addEventListener('input', updateCalc)
    );
    updateCalc();
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
      {/* SECTION 1: NAV */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'var(--dark)',
          height: '60px',
          borderBottom: 'none',
          boxShadow: 'none',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Left: Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--coral)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
              aria-label="IvyLink logo"
            >
              🔗
            </div>
            <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)' }}>IvyLink</span>
          </div>

          {/* Center: Nav links */}
          <div style={{ display: 'flex', gap: '32px' }}>
            {['How it works', 'Results', 'Pricing'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '13px',
                  color: 'var(--text-dark)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Button */}
          <div>
            <button
              style={{
                backgroundColor: 'var(--coral)',
                color: 'var(--white)',
                borderRadius: '20px',
                padding: '7px 16px',
                fontSize: '13px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--coral-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--coral)')}
              aria-label="Book a demo"
            >
              Book a demo
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 2: HERO */}
      <section style={{ backgroundColor: 'var(--dark)', paddingTop: '48px', paddingBottom: '48px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '16px', color: '#B8C5D6', fontWeight: 600, letterSpacing: '0.03em', marginBottom: '20px' }}>
            For med spas, gyms, salons, and yoga studios
          </p>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              color: 'var(--white)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: '24px',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Lapsed clients are revenue.</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>We recover them for you.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-dark)', fontWeight: 400, lineHeight: 1.65, maxWidth: '560px' }}>
            IvyLink finds lapsed clients, answers missed calls and DMs, and books the appointment. You find out when it's done.
          </p>
        </div>
      </section>

      {/* SECTION 3: SOCIAL PROOF BAR */}
      <section
        style={{
          backgroundColor: 'var(--dark-mid)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '32px',
          paddingBottom: '48px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0',
          }}
        >
          {[
            { number: '11%', label: 'average win-back rate on lapsed client campaigns' },
            { number: '200-800', label: 'lapsed clients in the avg wellness database' },
            { number: '30 days', label: 'to your first recovered bookings' },
          ].map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
              {idx > 0 && (
                <div
                  style={{
                    width: '1px',
                    height: '56px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    margin: '0 24px',
                  }}
                />
              )}
              <div style={{ padding: '8px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <p style={{ fontSize: '38px', fontWeight: 700, color: 'var(--coral)', lineHeight: 1, margin: '0' }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4, maxWidth: '180px', textAlign: 'center', marginTop: '12px', margin: '12px 0 0 0' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PAIN PANELS */}
      <section style={{ backgroundColor: 'var(--surface)', paddingTop: '48px', paddingBottom: '48px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '0', alignItems: 'center', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '11px',
                color: 'var(--coral)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
                margin: '0 auto 16px auto',
                textAlign: 'center',
              }}
            >
              THE PROBLEM
            </p>
            <h2
              style={{
                fontSize: 'clamp(18px, 2.2vw, 28px)',
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                maxWidth: '900px',
                textAlign: 'center',
                marginBottom: '64px',
                margin: '0 auto 64px auto',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Your past clients didn't leave because they were unhappy.</span>
              <span style={{ display: 'block' }}>They just got busy.</span>
            </h2>
          </div>

          {/* Panel 1: Lapsed clients */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginTop: '0', paddingBottom: '56px', borderBottom: '1px solid var(--border)' }}>
            {/* Text */}
            <div>
              <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '16px', margin: '0 0 16px 0' }}>
                01. LAPSED CLIENT REACTIVATION
              </p>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.3px', lineHeight: 1.3, marginBottom: '16px', margin: '0 0 16px 0' }}>
                Sarah had her last HydraFacial 8 months ago. She hasn't forgotten you. She just needs a nudge.
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px', margin: '0 0 20px 0' }}>
                Your database has hundreds of clients who loved you and then got busy. IvyLink finds every lapsed client, sends a personal win-back message, and offers a complimentary add-on to bring them back. No discounts. No ad spend. No manual work on your end.
              </p>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--coral-bg)', color: 'var(--coral)', border: '1px solid var(--coral)', borderRadius: '20px', fontSize: '12px', padding: '4px 14px' }}>
                11% average win-back rate, $192 avg appointment value
              </div>
            </div>
            {/* Visual: SMS Thread */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                padding: '18px',
                maxWidth: '340px',
                marginLeft: 'auto',
              }}
            >
              {[
                { from: 'ai', label: 'IvyLink, Day 1', text: 'Hi Sarah! Its Alivio Wellness. Weve missed you! Your last HydraFacial was 8 months ago. Want me to check availability this week?' },
                { from: 'client', text: 'Hi! Ive been meaning to come back. What do you have?' },
                { from: 'ai', label: 'IvyLink, 4s response', text: 'We have Thursday morning available. Maya who did your last treatment is free. Heres your booking link.' },
                { from: 'client', text: 'Perfect, booked for Thursday at 10am! Thank you' },
              ].map((msg, idx) => (
                <div key={idx} style={{ marginBottom: idx < 3 ? '10px' : '0' }}>
                  {msg.label && (
                    <p style={{ fontSize: '10px', color: 'var(--text-light)', marginBottom: '4px', margin: '0 0 4px 0' }}>
                      {msg.label}
                    </p>
                  )}
                  <div
                    style={{
                      backgroundColor: msg.from === 'ai' ? 'var(--coral)' : 'var(--surface)',
                      color: msg.from === 'ai' ? 'var(--white)' : 'var(--text)',
                      border: msg.from === 'client' ? '1px solid var(--border)' : 'none',
                      borderRadius: msg.from === 'ai' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      padding: '10px 14px',
                      fontSize: '13px',
                      lineHeight: 1.5,
                      maxWidth: '85%',
                      marginLeft: msg.from === 'ai' ? 'auto' : '0',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div style={{ backgroundColor: 'var(--green-bg)', borderRadius: '8px', padding: '8px 12px', fontSize: '12px', color: 'var(--green)', fontWeight: 500, marginTop: '10px' }}>
                Booked, $192 appointment
              </div>
            </div>
          </div>

          {/* Panel 2: Missed calls */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid var(--border)' }}>
            {/* Visual: Timeline (LEFT) */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                padding: '18px',
                maxWidth: '320px',
                marginRight: 'auto',
                position: 'relative',
                paddingLeft: '32px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '12px',
                  bottom: '12px',
                  width: '2px',
                  backgroundColor: 'var(--border)',
                }}
              />
              {[
                { dot: '#ef4444', title: 'Missed call - Jennifer L.', sub: '11:02:14am' },
                { dot: 'var(--coral)', title: 'Recovery text sent', sub: '11:02:25am', badge: '11s later' },
                { dot: 'var(--green)', title: 'Appointment booked', sub: 'Bridal facial, $195', time: '11:14am' },
              ].map((row, idx) => (
                <div key={idx} style={{ paddingBottom: idx < 2 ? '24px' : '0', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '4px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: row.dot,
                    }}
                  />
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', margin: '0 0 4px 0' }}>
                    {row.title}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: '0' }}>
                    {row.sub}
                  </p>
                  {row.badge && (
                    <span style={{ fontSize: '10px', backgroundColor: 'var(--coral-bg)', color: 'var(--coral)', padding: '2px 8px', borderRadius: '10px', marginLeft: '8px' }}>
                      {row.badge}
                    </span>
                  )}
                  {row.time && (
                    <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: '0' }}>
                      {row.time}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {/* Text (RIGHT) */}
            <div>
              <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '16px', margin: '0 0 16px 0' }}>
                02. MISSED CALLS
              </p>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.3px', lineHeight: 1.3, marginBottom: '16px', margin: '0 0 16px 0' }}>
                A call rings at 11:02am. You're mid-treatment. IvyLink answers in 11 seconds.
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px', margin: '0 0 20px 0' }}>
                Every missed call is a lead that will call somewhere else if they don't hear back fast. IvyLink sends a text within seconds, qualifies the lead, and books the appointment. You find out when it's done.
              </p>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--coral-bg)', color: 'var(--coral)', border: '1px solid var(--coral)', borderRadius: '20px', fontSize: '12px', padding: '4px 14px' }}>
                Missed call to booked in 12 minutes
              </div>
            </div>
          </div>

          {/* Panel 3: Unanswered DMs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', paddingTop: '56px' }}>
            {/* Text */}
            <div>
              <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '16px', margin: '0 0 16px 0' }}>
                03. UNANSWERED DMS
              </p>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.3px', lineHeight: 1.3, marginBottom: '16px', margin: '0 0 16px 0' }}>
                A client DMs about Botox at 2pm. You're with someone until 5. IvyLink replies in 4 seconds.
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px', margin: '0 0 20px 0' }}>
                Unanswered DMs don't wait. IvyLink monitors every inbound message, responds instantly, and moves the conversation toward a booking. You never miss a lead because you were busy with another client.
              </p>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--coral-bg)', color: 'var(--coral)', border: '1px solid var(--coral)', borderRadius: '20px', fontSize: '12px', padding: '4px 14px' }}>
                Avg response time: 4 seconds
              </div>
            </div>
            {/* Visual: DM Chat */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                padding: '18px',
                maxWidth: '320px',
                marginLeft: 'auto',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--coral-bg)',
                    color: 'var(--coral)',
                    fontSize: '12px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  MR
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', margin: '0' }}>
                    @maya_skin_nj
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: '0' }}>
                    Instagram DM
                  </p>
                </div>
                <div style={{ marginLeft: 'auto', backgroundColor: 'var(--green-bg)', color: 'var(--green)', fontSize: '10px', padding: '3px 8px', borderRadius: '10px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green)', marginRight: '4px' }} />
                  Handling
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px 14px 14px 4px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    maxWidth: '85%',
                  }}
                >
                  <p style={{ margin: '0 0 4px 0' }}>
                    Hi! I'm really interested in Botox but I'm nervous it'll hurt. Is it bad?
                  </p>
                  <p style={{ fontSize: '10px', color: 'var(--text-light)', margin: '0' }}>
                    2:14pm
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--coral)',
                    color: 'var(--white)',
                    borderRadius: '14px 14px 4px 14px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    maxWidth: '85%',
                    marginLeft: 'auto',
                  }}
                >
                  <p style={{ margin: '0 0 4px 0' }}>
                    Most clients describe it as a tiny pinch. Many come on their lunch break. Want to book a free consult first?
                  </p>
                  <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', margin: '0' }}>
                    IvyLink, 4s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REACTIVATION TIMELINE */}
      <section style={{ backgroundColor: 'var(--white)', paddingTop: '48px', paddingBottom: '48px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '48px', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', margin: '0 auto 10px auto', textAlign: 'center' }}>
              YOUR FIRST 30 DAYS
            </p>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '12px', margin: '0 auto 12px auto', maxWidth: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              We recover revenue already sitting in your database.
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.7, margin: '0 auto', maxWidth: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              We pull your lapsed client list, size the gap, and run the recovery. You just see results appear.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '60px', alignItems: 'flex-start' }}>
            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  backgroundColor: 'var(--border)',
                }}
              />
              {[
                { day: 'Day 5', event: 'Lapsed client reactivated', badge: 'First booking recovered' },
                { day: 'Day 12', event: 'Dormant database win-back booked', badge: 'Avg value $192' },
                { day: 'Day 18', event: 'Missed call recovery converted', badge: 'Booked in 12 minutes' },
                { day: 'Day 24', event: 'Unanswered DM answered and booked', badge: '4 second response' },
                { day: 'Day 30', event: 'First-visit follow-up booked second appointment', badge: 'Repeat client secured' },
              ].map((row, idx) => (
                <div key={idx} style={{ marginBottom: idx < 4 ? '28px' : '0', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '4px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--coral)',
                    }}
                  />
                  <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 700, marginBottom: '2px', margin: '0 0 2px 0' }}>
                    {row.day}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, marginBottom: '6px', margin: '0 0 6px 0' }}>
                    {row.event}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 500, margin: '0' }}>
                    {row.badge}
                  </p>
                </div>
              ))}
            </div>

            {/* IS THIS YOU */}
            <div>
              <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', margin: '0 0 20px 0' }}>
                IS THIS YOU?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'You have 200+ past clients who haven\'t booked in over 3 months.',
                  'You know those clients liked you. They just stopped coming in.',
                  'You don\'t have time to personally follow up with hundreds of people.',
                  'You\'ve tried email blasts. Most went ignored.',
                  'You want those clients back without running ads or hiring staff.',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: 'var(--coral)', fontSize: '14px', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.6, margin: '0' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dark banner - spans full width */}
          <div
            style={{
              marginTop: '40px',
              backgroundColor: 'var(--dark)',
              borderRadius: '10px',
              padding: '24px 28px',
              width: '100%',
              maxWidth: '100%',
              marginLeft: '0',
              marginRight: '0',
            }}
          >
            <p style={{ fontSize: 'clamp(15px, 1.6vw, 20px)', fontWeight: 700, color: 'var(--white)', textAlign: 'center', marginBottom: '8px', margin: '0 0 8px 0', whiteSpace: 'nowrap' }}>
              You never log in. You never approve a message. You just see results.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-dark)', textAlign: 'center', margin: '0' }}>
              Zero risk. Results in 30 days or you pay nothing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LIVE DEMO */}
      <section style={{ backgroundColor: 'var(--surface)', paddingTop: '48px', paddingBottom: '48px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '0', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', margin: '0 auto 10px auto', textAlign: 'center' }}>
              LIVE DEMO
            </p>
          </div>

          <div
            style={{
              marginTop: '32px',
              width: '100%',
              maxWidth: '1120px',
              margin: '32px auto 0',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <video
              src="/demo.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', background: 'black' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: REVENUE CALCULATOR */}
      <section style={{ backgroundColor: 'var(--dark)', paddingTop: '48px', paddingBottom: '48px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '40px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', margin: '0 auto 10px auto', textAlign: 'center' }}>
              FREE REVENUE AUDIT
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.5px', lineHeight: 1.2, margin: '0 auto 8px auto', whiteSpace: 'nowrap', textAlign: 'center' }}>
              See exactly what IvyLink would recover.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-dark)', margin: '0 auto', textAlign: 'center' }}>
              Takes 30 seconds. Drag the sliders to your real numbers.
            </p>
          </div>

          {/* Sliders */}
          <div
            style={{
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              padding: '28px',
              width: '100%',
              boxSizing: 'border-box',
              marginBottom: '16px',
            }}
          >
            {[
              { id: 'calc-lapsed', min: 50, max: 800, value: 312, step: 10, label: 'Lapsed clients in your database', displayId: 'v-lapsed', defaultDisplay: '312 clients', minLabel: '50', maxLabel: '800' },
              { id: 'calc-ltv', min: 200, max: 1200, value: 480, step: 50, label: 'Average annual client value', displayId: 'v-ltv', defaultDisplay: '$480', minLabel: '$200', maxLabel: '$1,200' },
              { id: 'calc-wb', min: 5, max: 25, value: 11, step: 1, label: 'Win-back rate (conservative)', displayId: 'v-wb', defaultDisplay: '11%', minLabel: '5%', maxLabel: '25%' },
            ].map((slider, idx) => (
              <div key={slider.id} style={{ marginBottom: idx < 2 ? '24px' : '0', paddingBottom: idx < 2 ? '24px' : '0', borderBottom: idx < 2 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '14px', color: 'var(--text-mid)' }}>{slider.label}</label>
                  <span id={slider.displayId} style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)' }}>
                    {slider.defaultDisplay}
                  </span>
                </div>
                <input
                  id={slider.id}
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  defaultValue={slider.value}
                  className="calc-slider"
                  style={{
                    width: '100%',
                    accentColor: 'var(--coral)',
                    height: '4px',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '11px', color: 'var(--text-light)' }}>
                  <span>{slider.minLabel}</span>
                  <span>{slider.maxLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div
            style={{
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              padding: '28px',
              width: '100%',
              boxSizing: 'border-box',
              marginBottom: '20px',
            }}
          >
            {[
              { label: 'Recoverable revenue', id: 'calc-result', default: '$16,474', fontSize: '32px', fontWeight: 700, color: 'var(--coral)' },
              { label: 'IvyLink fee (20%)', id: 'calc-fee', default: '$3,295', fontSize: '18px', fontWeight: 600, color: 'var(--text-mid)' },
              { label: 'You keep (80%)', id: 'calc-net', default: '$13,179', fontSize: '22px', fontWeight: 700, color: 'var(--green)' },
            ].map((row, idx) => (
              <div
                key={row.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: idx < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span style={{ fontSize: idx === 2 ? '14px' : '13px', color: idx === 2 ? 'var(--text)' : 'var(--text-mid)', fontWeight: idx === 2 ? 600 : 400 }}>
                  {row.label}
                </span>
                <span id={row.id} style={{ fontSize: row.fontSize, fontWeight: row.fontWeight, color: row.color }}>
                  {row.default}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS */}
      <section style={{ backgroundColor: 'var(--dark-deep)', width: '100%', paddingTop: '48px', paddingBottom: '48px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '56px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
            <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', margin: '0 auto 10px auto', textAlign: 'center' }}>
              HOW IT WORKS
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.5px', lineHeight: 1.2, margin: '0 auto', textAlign: 'center' }}>
              3 minutes to set up. First bookings within 24 hours.
            </h2>
          </div>

          <div style={{ width: '100%', maxWidth: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'We pull your lapsed client list.', body: 'You give us access to your booking platform once. We export every client who hasn\'t booked in 90+ days and put a real dollar figure on what they\'re worth.' },
              { num: '02', title: 'We run the win-back campaign.', body: 'Personal messages go out to every lapsed client. We offer a complimentary add-on, not a discount, to bring them back. You never write a single message.' },
              { num: '03', title: 'Bookings appear in your calendar.', body: 'You get a push notification. The client gets a calendar invite. IvyLink takes 20% of what we recover. Nothing if we don\'t.' },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  width: '100%',
                  minWidth: 0,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '28px',
                  boxSizing: 'border-box',
                }}
              >
                <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '14px', margin: '0 0 14px 0' }}>
                  {card.num}
                </p>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--white)', lineHeight: 1.3, marginBottom: '12px', margin: '0 0 12px 0' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: 1.7, margin: '0' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: COMPARISON TABLE */}
      <section style={{ backgroundColor: 'var(--surface)', width: '100%', paddingTop: '48px', paddingBottom: '48px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '48px', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: 'var(--coral)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', margin: '0 auto 10px auto', textAlign: 'center' }}>
              WHY IVYLINK
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.5px', maxWidth: 'none', whiteSpace: 'nowrap', margin: '0 auto', textAlign: 'center' }}>
              One service. Replaces your entire revenue recovery stack.
            </h2>
          </div>

          <table
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              tableLayout: 'fixed',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: 'var(--dark)' }}>
                <th style={{ padding: '13px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 500, color: 'var(--white)', borderRadius: '8px 0 0 0', borderBottom: 'none' }}>
                  Feature
                </th>
                <th style={{ padding: '13px 16px', textAlign: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--white)', borderBottom: 'none' }}>
                  Hire staff
                </th>
                <th style={{ padding: '13px 16px', textAlign: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--white)', borderBottom: 'none' }}>
                  Marketing agency
                </th>
                <th style={{ padding: '13px 16px', textAlign: 'center', fontSize: '13px', fontWeight: 600, color: 'var(--white)', backgroundColor: 'var(--coral)', borderRadius: '0 8px 0 0', borderBottom: 'none' }}>
                  IvyLink
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Works while you sleep', staff: 'No', agency: 'No', ivylink: 'Yes' },
                { feature: 'Pays for itself in 30 days', staff: 'Unlikely', agency: 'Unlikely', ivylink: 'Yes' },
                { feature: 'Performance pricing', staff: 'No', agency: 'No', ivylink: 'Yes' },
                { feature: 'Wellness-only focus', staff: 'No', agency: 'Generic', ivylink: 'Yes' },
                { feature: 'Zero risk to start', staff: 'No', agency: 'Setup fee required', ivylink: 'Yes' },
                { feature: 'Knows your booking system', staff: 'No', agency: 'No', ivylink: 'Yes' },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? 'var(--white)' : 'var(--off)',
                    borderBottom: idx < 5 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <td style={{ padding: '13px 16px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: '13px', color: 'var(--text-light)', textAlign: 'center' }}>
                    {row.staff}
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: '13px', color: 'var(--text-light)', textAlign: 'center' }}>
                    {row.agency}
                  </td>
                  <td
                    style={{
                      padding: '13px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--coral)',
                      backgroundColor: idx % 2 === 0 ? 'var(--coral-bg)' : '#FFF0ED',
                      textAlign: 'center',
                    }}
                  >
                    {row.ivylink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              backgroundColor: 'var(--dark)',
              borderRadius: '10px',
              padding: '20px 28px',
              fontSize: '15px',
              color: 'var(--white)',
              fontStyle: 'italic',
              textAlign: 'center',
              width: '100%',
              maxWidth: '900px',
              margin: '24px auto 0',
              marginBottom: '20px',
            }}
          >
            We recover revenue you've already earned, without you touching any software. Results in 30 days or you pay nothing.
          </div>
        </div>
      </section>

      {/* SECTION 10: MERGED FOOTER + CTA */}
      <footer
        style={{
          backgroundColor: 'var(--dark)',
          paddingTop: '48px',
          paddingBottom: '32px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* CTA Headline */}
          <p style={{ fontSize: 'clamp(16px, 2vw, 24px)', fontWeight: 700, color: 'white', lineHeight: 1.3, letterSpacing: '-0.5px', whiteSpace: 'nowrap', textAlign: 'center', margin: '0 0 24px 0' }}>
            Your past clients are your lowest-cost bookings. We go get them back for you.
          </p>

          {/* CTA Subtext */}
          <p style={{ fontSize: 'clamp(13px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 'none', textAlign: 'center', whiteSpace: 'nowrap', margin: '0 0 32px 0' }}>
            No software to learn. No campaigns to manage. Pay only when we recover revenue.
          </p>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginTop: '0', marginBottom: '20px' }}></div>

          {/* Footer Row */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--coral)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontSize: '18px',
                }}
              >
                🔗
              </div>
              <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)' }}>IvyLink</span>
            </div>
            <p style={{ fontSize: '13px', color: '#94A3B8', margin: '0' }}>
              © 2026 IvyLink · Made & Hosted in the US
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

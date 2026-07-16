import { useState } from "react";

/*
 * Interactive revenue calculator.
 * Dark background (#1A1A2E). Three sliders, live calculation.
 */

const CalculatorDark = () => {
  const [lapsed, setLapsed] = useState(312);
  const [ltv, setLtv] = useState(480);
  const [winback, setWinback] = useState(11);

  const recoverable = Math.round(lapsed * (winback / 100) * ltv);
  const fee = Math.round(recoverable * 0.2);
  const net = Math.round(recoverable * 0.8);

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#1A1A2E',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div
          style={{
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest mb-4"
            style={{
              color: '#E85D4A',
              letterSpacing: '0.1em',
              textAlign: 'left',
              marginLeft: '0',
              marginRight: 'auto',
              alignSelf: 'flex-start',
              width: 'auto',
            }}
          >
            FREE REVENUE AUDIT
          </p>
          <h2
            className="text-5xl font-bold tracking-tight"
            style={{
              color: '#FFFFFF',
              letterSpacing: '-0.8px',
              lineHeight: '1.2',
              textAlign: 'left',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(18px, 2.5vw, 36px)',
              marginBottom: '12px',
            }}
          >
            See exactly what IvyLink would recover for you. Takes 30 seconds.
          </h2>
          <p
            className="text-lg"
            style={{
              color: '#94A3B8',
              textAlign: 'left',
              marginBottom: '24px',
            }}
          >
            Drag the sliders to your real numbers.
          </p>
        </div>

        {/* Sliders container */}
        <div
          className="rounded-xl p-8 mb-8"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8EAF0',
          }}
        >
          {/* Slider 1: Lapsed clients */}
          <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#E8EAF0' }}>
            <div className="flex justify-between items-center mb-3">
              <label
                className="text-sm font-semibold"
                style={{ color: '#1A1A2E' }}
              >
                Lapsed clients in your database
              </label>
              <span
                className="text-base font-bold"
                style={{ color: '#E85D4A' }}
              >
                {lapsed} clients
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="800"
              step="10"
              value={lapsed}
              onChange={(e) => setLapsed(Number(e.target.value))}
              className="w-full h-2 rounded cursor-pointer"
              style={{
                accentColor: '#E85D4A',
              }}
            />
            <div className="flex justify-between text-xs mt-2" style={{ color: '#8B8BA7' }}>
              <span>50</span>
              <span>800</span>
            </div>
          </div>

          {/* Slider 2: LTV */}
          <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#E8EAF0' }}>
            <div className="flex justify-between items-center mb-3">
              <label
                className="text-sm font-semibold"
                style={{ color: '#1A1A2E' }}
              >
                Average annual client value
              </label>
              <span
                className="text-base font-bold"
                style={{ color: '#E85D4A' }}
              >
                ${ltv}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="1200"
              step="50"
              value={ltv}
              onChange={(e) => setLtv(Number(e.target.value))}
              className="w-full h-2 rounded cursor-pointer"
              style={{
                accentColor: '#E85D4A',
              }}
            />
            <div className="flex justify-between text-xs mt-2" style={{ color: '#8B8BA7' }}>
              <span>$200</span>
              <span>$1,200</span>
            </div>
          </div>

          {/* Slider 3: Win-back rate */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label
                className="text-sm font-semibold"
                style={{ color: '#1A1A2E' }}
              >
                Win-back rate (conservative)
              </label>
              <span
                className="text-base font-bold"
                style={{ color: '#E85D4A' }}
              >
                {winback}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="25"
              step="1"
              value={winback}
              onChange={(e) => setWinback(Number(e.target.value))}
              className="w-full h-2 rounded cursor-pointer"
              style={{
                accentColor: '#E85D4A',
              }}
            />
            <div className="flex justify-between text-xs mt-2" style={{ color: '#8B8BA7' }}>
              <span>5%</span>
              <span>25%</span>
            </div>
          </div>
        </div>

        {/* Results card */}
        <div
          className="rounded-xl p-8 mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8EAF0',
          }}
        >
          <div className="space-y-4">
            {/* Row 1: Recoverable */}
            <div className="flex justify-between items-baseline pb-4 border-b" style={{ borderBottomColor: '#E8EAF0' }}>
              <span style={{ color: '#4A4A6A' }}>Recoverable revenue</span>
              <span
                className="text-5xl font-bold"
                style={{ color: '#E85D4A' }}
              >
                ${recoverable.toLocaleString()}
              </span>
            </div>

            {/* Row 2: Fee */}
            <div className="flex justify-between items-baseline pb-4">
              <span style={{ color: '#8B8BA7' }}>IvyLink fee (20%)</span>
              <span
                className="text-xl font-semibold"
                style={{ color: '#4A4A6A' }}
              >
                ${fee.toLocaleString()}
              </span>
            </div>

            {/* Row 3: Net */}
            <div className="flex justify-between items-baseline">
              <span style={{ color: '#1A1A2E' }} className="font-semibold">
                You keep (80%)
              </span>
              <span
                className="text-2xl font-bold"
                style={{ color: '#16a34a' }}
              >
                ${net.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p
          className="text-sm text-center italic mb-6"
          style={{ color: '#64748B', maxWidth: '480px', margin: '0 auto 24px' }}
        >
          IvyLink works on performance. You pay 20% of what we recover, nothing if we don't.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="bg-[#E85D4A] text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-[#C94535] transition-colors inline-block"
          >
            Get my 30-day recovery plan →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorDark;

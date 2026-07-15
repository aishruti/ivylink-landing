import { useState } from "react";
import { MessageCircle, Phone, Clock } from "lucide-react";

/*
 * Scenario tabs showing AI agent outcomes in real-time.
 * Three scenarios: Instagram DM, Missed Call, Lapsed Client
 * Pure outcome-first language: "Missed DM → booked in 4s", etc.
 */

type Scenario = {
  id: string;
  icon: typeof MessageCircle;
  label: string;
  outcome: string;
  demo: {
    title: string;
    action: string;
    time: string;
    result: string;
  };
};

const scenarios: Scenario[] = [
  {
    id: "dm",
    icon: MessageCircle,
    label: "Missed DM → booked in 4s",
    outcome: "Instagram DM · New lead",
    demo: {
      title: "Client message arrives",
      action: "Hi! Are you available for a massage next week?",
      time: "AI responds in 4 seconds",
      result: "✓ Appointment booked for Tuesday at 2 PM",
    },
  },
  {
    id: "call",
    icon: Phone,
    label: "Missed call → recovered in 11s",
    outcome: "Missed call · Recovered",
    demo: {
      title: "Missed call detected",
      action: "Automated callback initiated",
      time: "AI qualifies & books in 11 seconds",
      result: "✓ Client rebooked their regular Thursday slot",
    },
  },
  {
    id: "lapsed",
    icon: Clock,
    label: "Lapsed 8 months → rebooked",
    outcome: "Lapsed client · Win-back",
    demo: {
      title: "Dormant client identified",
      action: "Personalized win-back message sent",
      time: "Response received within 2 hours",
      result: "✓ $180 facial rebooked + $50 product upsell",
    },
  },
];

const ScenarioTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = scenarios[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section className="py-10 lg:py-16 relative overflow-hidden w-full bg-muted/30">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            AI Agent in Action
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Watch Your AI Agent <span className="text-gradient">Recover Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real scenarios. Real response times. No manual follow-up needed.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Tab buttons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
            {scenarios.map((scenario, idx) => {
              const ScenarioIcon = scenario.icon;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative group rounded-xl px-3 sm:px-4 py-3 sm:py-4 transition-all ${
                    idx === activeTab
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card border border-border/50 text-foreground hover:border-primary/30"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <ScenarioIcon className="h-5 w-5" />
                    <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                      {scenario.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo card */}
          <div className="rounded-2xl bg-card border border-border/50 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-border/50 bg-muted/40">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <ActiveIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {active.outcome}
                </p>
                <p className="text-lg font-display font-bold text-foreground">
                  {active.demo.title}
                </p>
              </div>
            </div>

            {/* Demo content */}
            <div className="p-6 space-y-6">
              {/* Client message */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Client Message
                </p>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/40">
                  <p className="text-base text-foreground leading-relaxed">
                    {active.demo.action}
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    AI Response
                  </p>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {active.demo.time}
                  </span>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <p className="text-base text-foreground font-semibold mb-1">
                    Appointment confirmed
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {active.demo.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioTabs;

import { MapPin, Users, Calendar, Check, Star } from "lucide-react";

/*
 * Hero product visual. Revenue-focused mockup with floating booking + partner
 * stat cards. Keeps the hero anchored on the outcome (bookings, revenue) rather
 * than the discovery surface, which lives in the How It Works section instead.
 */

const HeroProductUI = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl card-elevated">
        {/* Gradient border effect */}
        <div className="absolute -inset-1 gradient-primary rounded-2xl blur-sm opacity-30" />
        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-white p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Your Partner Network</span>
          </div>

          {/* Search/Location Bar */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 p-3 rounded-xl bg-muted/50 border border-border/50">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm text-foreground font-medium whitespace-nowrap">Hoboken, NJ</span>
            <span className="text-xs text-muted-foreground ml-auto text-right">Recovery opportunities</span>
          </div>

          {/* Partner Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="h-18 w-18 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Users className="h-9 w-9 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground text-sm sm:text-base truncate">Sculpt Fitness Studio</span>
                  <Check className="h-4 w-4 text-primary shrink-0" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Fitness Studio • 0.3 mi</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs sm:text-sm font-bold text-foreground">23 bookings</div>
                <div className="text-xs font-semibold text-primary">$4,850</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground text-sm sm:text-base truncate">The Glow Bar</span>
                  <Check className="h-4 w-4 text-primary shrink-0" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Salon • 0.5 mi</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs sm:text-sm font-bold text-foreground">18 bookings</div>
                <div className="text-xs font-semibold text-primary">$3,200</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground text-sm sm:text-base truncate">Lumina Med Spa</span>
                  <Check className="h-4 w-4 text-primary shrink-0" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Med Spa • 0.8 mi</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs sm:text-sm font-bold text-foreground">12 bookings</div>
                <div className="text-xs font-semibold text-primary">$2,400</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating revenue card */}
      <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-3">
          <div className="h-18 w-18 rounded-lg gradient-primary flex items-center justify-center">
            <Calendar className="h-9 w-9 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">34</p>
            <p className="text-xs text-muted-foreground">Booked</p>
          </div>
        </div>
      </div>

      {/* Floating recovery card */}
      <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg gradient-purple flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">$23,040</p>
            <p className="text-xs text-muted-foreground">Recovered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductUI;

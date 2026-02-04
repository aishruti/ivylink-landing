import { MapPin, Users, Calendar, ArrowRight, Check, Star } from "lucide-react";

const HeroProductUI = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl card-elevated">
        {/* Gradient border effect */}
        <div className="absolute -inset-1 gradient-primary rounded-2xl blur-sm opacity-30" />
        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Partner Discovery</span>
          </div>

          {/* Search/Location Bar */}
          <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-muted/50 border border-border/50">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground font-medium">Beverly Hills, CA</span>
            <span className="text-xs text-muted-foreground ml-auto">12 potential partners found</span>
          </div>

          {/* Partner Cards */}
          <div className="space-y-3">
            {/* Partner 1 - Connected */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">SoulCycle Beverly Hills</span>
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Fitness Studio • 0.3 mi</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Connected</span>
              </div>
            </div>

            {/* Partner 2 - High Match */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Luxe Hair Salon</span>
                  <span className="text-xs text-muted-foreground">98% match</span>
                </div>
                <span className="text-sm text-muted-foreground">Salon • 0.5 mi</span>
              </div>
              <button className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                Connect <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Partner 3 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground">Equinox Gym</span>
                <span className="text-sm text-muted-foreground block">Gym • 0.8 mi</span>
              </div>
              <button className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                Connect <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stats card */}
      <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">+8</p>
            <p className="text-xs text-muted-foreground">Bookings this week</p>
          </div>
        </div>
      </div>

      {/* Floating partners card */}
      <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg gradient-purple flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Partners nearby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductUI;

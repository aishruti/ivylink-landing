import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-pink-400/5 blur-3xl" />

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2 text-sm font-medium text-white animate-fade-up">
              <Play className="h-4 w-4" />
              <span>Automated Collaboration Engine</span>
            </div>

            {/* H1 */}
            <h1 className="mb-6 text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Automate</span> Local Collabs That Fill Your Calendar
            </h1>

            {/* Subhead */}
            <p className="mb-6 text-lg text-muted-foreground sm:text-xl lg:text-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              For busy med spa owners tired of manual networking—turn 10+ hours of work into minutes and watch bookings rise.
            </p>

            {/* Credibility badges */}
            <div className="mb-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-secondary-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">8 new bookings in 21 days</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-secondary-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Or we work free until you do</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl" className="group">
                Book a call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                Watch demo
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative animate-fade-up lg:animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl card-elevated">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 gradient-primary rounded-2xl blur-sm opacity-30" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
                <img 
                  src={heroDashboard} 
                  alt="IvyLink dashboard showing booking growth and local partnerships"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+127%</p>
                  <p className="text-xs text-muted-foreground">Booking growth</p>
                </div>
              </div>
            </div>

            {/* Floating partners card */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-fade-up hidden sm:block" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg gradient-purple flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-xs text-muted-foreground">Active partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Quote, Star } from "lucide-react";

/*
 * Social proof. Keeping language honest. We don't have many paying customers
 * yet, so the validation is positioned as "early traction" rather than a
 * customer logo wall. The featured quote is paraphrased from a discovery call
 * with a gym owner; confirm with him before going live, or swap in another.
 */

const SocialProof = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-muted/30">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Real Wellness Businesses
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Word of mouth marketing, made <span className="text-gradient">systematic</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Word of mouth marketing has always been the most reliable channel. IvyLink makes it trackable and repeatable, with real businesses in active rollout across the country.
          </p>
        </div>

        {/* Featured quote */}
        <div className="mx-auto max-w-3xl mb-12">
          <div className="relative rounded-2xl bg-card border border-border/50 shadow-xl p-8 lg:p-10">
            <Quote className="absolute -top-5 left-8 h-10 w-10 text-primary bg-card rounded-full p-2 border border-border/50" />
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
              "I signed up, found three local businesses I'd never thought to partner with, and had a play sent in under five minutes. This is what local marketing should feel like."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <p className="font-semibold text-foreground">Jordan M.</p>
                <p className="text-sm text-muted-foreground">Owner, Local Fitness Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightweight stats band */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center shadow-sm">
            <p className="text-3xl font-display font-bold text-gradient mb-1">100+</p>
            <p className="text-sm text-muted-foreground">Wellness business owners interviewed</p>
          </div>
          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center shadow-sm">
            <p className="text-3xl font-display font-bold text-gradient mb-1">4 verticals</p>
            <p className="text-sm text-muted-foreground">Med spas, salons, gyms, studios</p>
          </div>
          <div className="rounded-2xl bg-card border border-border/50 p-6 text-center shadow-sm">
            <p className="text-3xl font-display font-bold text-gradient mb-1">Free</p>
            <p className="text-sm text-muted-foreground">To sign up and explore today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

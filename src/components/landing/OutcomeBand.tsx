import partnerNetworkWebp from "@/assets/screenshot-partner-network.webp";
import partnerNetworkPng from "@/assets/screenshot-partner-network.png";

/*
 * Outcome Band. Moved up directly under the hero, before any "how it works"
 * explanation. The single most compelling reason a wellness business owner
 * signs up is what their revenue dashboard will look like, so we show that
 * first.
 *
 * The duplicate quick-stat strip that used to sit above the screenshot was
 * removed: the screenshot itself already contains the same stats.
 */

const OutcomeBand = () => {
  return (
    <section id="outcome" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            See the Result
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See exactly how much revenue your <span className="text-gradient">partnerships</span> bring in.
          </h2>
          <p className="text-lg text-muted-foreground">
            Most local business advertising leaves you guessing. IvyLink doesn't. Every partnership generates unique QR codes, so when a customer redeems an offer you see the booking, the partner who referred them, and the revenue in real time. No guessing, no spreadsheets.
          </p>
        </div>

        {/* Real Partner Network screenshot */}
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            <div className="absolute -inset-1 gradient-primary rounded-2xl blur-md opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-white shadow-2xl">
              <picture>
                <source srcSet={partnerNetworkWebp} type="image/webp" />
                <img
                  src={partnerNetworkPng}
                  alt="IvyLink Partner Network dashboard showing active partnerships, scans, conversions, and estimated revenue per partner"
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto"
                />
              </picture>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Wellness businesses that activate their first IvyLink partnership typically see bookings within their first 21 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutcomeBand;

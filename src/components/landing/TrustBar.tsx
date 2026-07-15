/*
 * Trust / social proof bar. Three key metrics showing proof points.
 * No animation, no icons, no gradients - just clean numbers and labels.
 */

const TrustBar = () => {
  const stats = [
    {
      number: "$380K+",
      label: "recovered across pilot clients",
    },
    {
      number: "8 seconds",
      label: "avg AI response time vs 4+ hrs before",
    },
    {
      number: "11%",
      label: "win-back rate on lapsed client campaigns",
    },
  ];

  return (
    <section className="py-8 lg:py-12 relative w-full bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Mobile: stacked vertically */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-0">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:py-6 md:px-4 md:border-r md:border-border last:md:border-r-0">
                <p className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

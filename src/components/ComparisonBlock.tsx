const ComparisonBlock = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-foreground">Before vs after</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            From scattered executive content to a conversion-focused insight engine.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-section-border bg-surface-elevated p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Before Vantage</p>
            <ul className="space-y-3 text-sm text-muted-foreground font-body">
              <li>• Content is irregular and hard to sustain with busy experts</li>
              <li>• Thought leadership sits across disconnected channels</li>
              <li>• Weak conversion journey from insight to pipeline</li>
              <li>• Limited visibility into what content drives engagement</li>
            </ul>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary-soft p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground">After Vantage</p>
            <ul className="space-y-3 text-sm text-foreground font-body">
              <li>• Dedicated expert hub on your domain with clear narrative structure</li>
              <li>• Managed editorial workflow that protects tone and consistency</li>
              <li>• Built-in newsletter and CTAs to convert readers into subscribers</li>
              <li>• Analytics and integrations to optimise content and follow-up</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonBlock;

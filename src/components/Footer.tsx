const Footer = () => {
  return (
    <footer className="border-t border-section-border bg-surface-elevated py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center" aria-label="Vantage home">
          <img
            src="/images/Vantage-logo-dark.svg"
            alt="Vantage"
            className="h-6 w-auto"
          />
        </a>
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Profile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

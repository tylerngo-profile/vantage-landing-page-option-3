import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop rail */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="rounded-xl border border-section-border bg-background/95 p-3 shadow-lg backdrop-blur">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Book demo <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-section-border bg-background/95 p-3 backdrop-blur xl:hidden">
        <div className="mx-auto flex max-w-5xl gap-2">
          <a
            href="#demo"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Book a demo <ArrowRight size={16} />
          </a>
          <a
            href="#demo"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Example hub
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;

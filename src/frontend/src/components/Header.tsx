import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/assets/generated/trophy-logo.dim_200x200.png"
            alt="Elite India Projects Logo"
            className="h-14 w-14 object-contain flex-shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <h1 className="text-lg md:text-2xl font-bold text-elite-gold tracking-tight leading-tight">
              Elite India Projects
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Private Limited
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {/* Contact numbers */}
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-3">
            <a
              href="tel:9848525246"
              data-ocid="header.primary_button"
              className="flex items-center gap-1.5 text-elite-gold hover:text-elite-gold-dark transition-colors font-semibold text-sm md:text-base"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">9848525246</span>
            </a>
            <a
              href="tel:7013138131"
              data-ocid="header.secondary_button"
              className="flex items-center gap-1.5 text-elite-gold hover:text-elite-gold-dark transition-colors font-semibold text-sm md:text-base"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">7013138131</span>
            </a>
            <p className="hidden lg:block text-xs text-muted-foreground whitespace-nowrap">
              N. Ajay Kumar, Elite President
            </p>
          </div>

          {/* DTCP/RERA badges */}
          <div className="hidden md:flex items-center gap-2">
            <img
              src="/assets/generated/dtcp-badge.dim_100x100.png"
              alt="DTCP Approved"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/assets/generated/rera-badge.dim_100x100.png"
              alt="RERA Certified"
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

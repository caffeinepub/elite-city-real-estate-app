import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/assets/generated/trophy-logo.dim_200x200.png" 
            alt="Elite India Projects Logo" 
            className="h-14 w-14 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-elite-gold tracking-tight">
              Elite India Projects
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Private Limited
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="tel:9848525246" 
            className="flex items-center gap-2 px-4 py-2 bg-elite-gold/10 hover:bg-elite-gold/20 rounded-lg transition-colors border border-elite-gold/30"
          >
            <Phone className="h-4 w-4 text-elite-gold" />
            <span className="hidden sm:inline text-sm font-semibold text-elite-gold">9848525246</span>
          </a>
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

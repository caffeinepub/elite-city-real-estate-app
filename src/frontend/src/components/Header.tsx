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

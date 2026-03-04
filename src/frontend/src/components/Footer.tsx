import { ExternalLink, Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "elite-city-app";

  return (
    <footer className="w-full border-t border-border/40 bg-card mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-elite-gold mb-4">
              Elite India Projects
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium gated community projects with world-class amenities and
              DTCP/RERA approvals.
            </p>
            <div className="flex gap-2">
              <img
                src="/assets/generated/dtcp-badge.dim_100x100.png"
                alt="DTCP"
                className="h-10 w-10 object-contain"
              />
              <img
                src="/assets/generated/rera-badge.dim_100x100.png"
                alt="RERA"
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-elite-gold mb-4">
              Our Projects
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Elite Township - J.P. Nagar (23 Acres)</li>
              <li>Elite City Phase-1 - Kalvakurthi (6 Acres)</li>
              <li>Elite City Premium Phase-2 (10 Acres)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-elite-gold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kalvakurthi, Telangana</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@eliteindia.com</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://plots99.com/co/HDp4JumjqHvs#info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-elite-gold transition-colors"
                >
                  View Listing on Plots99
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Elite India Projects Private Limited. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart className="h-4 w-4 text-elite-red fill-elite-red" /> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-elite-gold hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

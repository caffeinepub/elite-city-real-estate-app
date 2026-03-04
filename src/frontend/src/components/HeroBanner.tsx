import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink, ZoomIn } from "lucide-react";

const posters = [
  {
    src: "/assets/uploads/1772598411164-1.png",
    alt: "Elite City Kalvakurthi - Telugu Marketing Poster",
    label: "Telugu",
  },
  {
    src: "/assets/uploads/Gemini_Generated_Image_ycett3ycett3ycet-2.png",
    alt: "Elite India Projects - English Marketing Poster",
    label: "English",
  },
];

export default function HeroBanner() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("inquiry-form");
    inquirySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[800px]">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1920x800.png"
            alt="Elite City Kalvakurthi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-elite-gold/20 backdrop-blur-sm rounded-full border border-elite-gold/30">
              <p className="text-elite-gold font-semibold text-sm">
                Premium Gated Community Projects
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-elite-gold">Elite City</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Experience luxury living in Kalvakurthi with world-class
              amenities, DTCP & RERA approved plots, and excellent connectivity
              to major highways.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-elite-gold hover:bg-elite-gold-dark text-black font-semibold"
                onClick={scrollToInquiry}
                data-ocid="hero.primary_button"
              >
                Book Your Plot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="bg-elite-red hover:bg-elite-red/90 text-white font-semibold"
                asChild
              >
                <a
                  href="https://plots99.com/co/HDp4JumjqHvs#info"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.secondary_button"
                >
                  View Full Listing <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const detailsSection =
                    document.getElementById("project-details");
                  detailsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="hero.link"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Posters Section */}
      <div className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Overview &amp;{" "}
              <span className="text-elite-gold">Marketing Materials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore all three premium ventures with detailed specifications
              and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {posters.map((poster, index) => (
              <Dialog key={poster.label}>
                <DialogTrigger asChild>
                  <div
                    className="relative cursor-pointer group"
                    data-ocid={`hero.open_modal_button.${index + 1}`}
                  >
                    <img
                      src={poster.src}
                      alt={poster.alt}
                      className="w-full h-auto rounded-lg shadow-2xl border-2 border-elite-gold/30 transition-all duration-300 group-hover:border-elite-gold"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-elite-gold/90 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                        <ZoomIn className="h-5 w-5" />
                        Click to Enlarge
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-elite-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                      {poster.label}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent
                  className="max-w-[95vw] max-h-[95vh] p-2"
                  data-ocid={`hero.dialog.${index + 1}`}
                >
                  <div className="overflow-auto">
                    <img
                      src={poster.src}
                      alt={poster.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

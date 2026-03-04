import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Building2,
  Camera,
  Dumbbell,
  Flame,
  Footprints,
  Leaf,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Siren,
  Sun,
  Trees,
  Trophy,
  Tv2,
  Waves,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";

type Amenity = {
  icon: React.ElementType;
  title: string;
  description: string;
  category: string;
};

const amenities: Amenity[] = [
  // Infrastructure
  {
    icon: MapPin,
    title: "Plots & Townships",
    description: "Residential & township plots",
    category: "Infrastructure",
  },
  {
    icon: Waves,
    title: "40ft / 33ft CC Roads",
    description: "Wide concrete roads for smooth connectivity",
    category: "Infrastructure",
  },
  {
    icon: Lightbulb,
    title: "Radium Lights",
    description: "Radium glow lighting for safe nights",
    category: "Infrastructure",
  },
  {
    icon: Zap,
    title: "Underground Electricity",
    description: "Modern underground power infrastructure",
    category: "Infrastructure",
  },
  {
    icon: Wind,
    title: "Drainage",
    description: "Advanced underground drainage system",
    category: "Infrastructure",
  },
  {
    icon: Wifi,
    title: "Geo Fiber",
    description: "High-speed geo fiber internet",
    category: "Infrastructure",
  },
  {
    icon: Building,
    title: "Water Tank",
    description: "Overhead water storage & supply",
    category: "Infrastructure",
  },
  {
    icon: Waves,
    title: "Water Taps (2 per plot)",
    description: "Dedicated water tap for every plot",
    category: "Infrastructure",
  },
  {
    icon: Footprints,
    title: "6ft Footpaths",
    description: "Safe pedestrian pathways",
    category: "Infrastructure",
  },
  {
    icon: Trees,
    title: "Avenue Plantation",
    description: "Lush green tree-lined avenues",
    category: "Infrastructure",
  },
  {
    icon: Flame,
    title: "Stormwater",
    description: "Effective stormwater management",
    category: "Infrastructure",
  },
  {
    icon: Sun,
    title: "Solar Lights",
    description: "Eco-friendly solar street lighting",
    category: "Infrastructure",
  },
  // Community Features
  {
    icon: ShieldCheck,
    title: "Compound Wall",
    description: "Secured compound wall perimeter",
    category: "Community",
  },
  {
    icon: Building2,
    title: "Main Arch",
    description: "Impressive grand entrance arch",
    category: "Community",
  },
  {
    icon: Tv2,
    title: "Lift & View Room",
    description: "Panoramic view room with lift access",
    category: "Community",
  },
  {
    icon: Leaf,
    title: "Open Parks",
    description: "Spacious landscaped parks",
    category: "Community",
  },
  {
    icon: Trees,
    title: "2 Gazebos",
    description: "Decorative outdoor gazebo shelters",
    category: "Community",
  },
  {
    icon: Siren,
    title: "Play Area",
    description: "Safe children's play area",
    category: "Community",
  },
  // Sports & Recreation
  {
    icon: Dumbbell,
    title: "Open Gym",
    description: "Outdoor fitness & exercise zone",
    category: "Sports",
  },
  {
    icon: Footprints,
    title: "Jogging Track",
    description: "Dedicated running & walking track",
    category: "Sports",
  },
  {
    icon: Trophy,
    title: "Indoor Sports",
    description: "Multi-purpose indoor sports facility",
    category: "Sports",
  },
  {
    icon: Trophy,
    title: "Net Practice Box Cricket",
    description: "Cricket net practice courts",
    category: "Sports",
  },
  // Security
  {
    icon: Camera,
    title: "24/7 CCTV",
    description: "Round-the-clock surveillance cameras",
    category: "Security",
  },
];

const categoryColors: Record<string, string> = {
  Infrastructure: "text-blue-500",
  Community: "text-green-500",
  Sports: "text-orange-500",
  Security: "text-red-500",
};

const categoryBgs: Record<string, string> = {
  Infrastructure: "bg-blue-500/10 group-hover:bg-blue-500/20",
  Community: "bg-green-500/10 group-hover:bg-green-500/20",
  Sports: "bg-orange-500/10 group-hover:bg-orange-500/20",
  Security: "bg-red-500/10 group-hover:bg-red-500/20",
};

export default function Amenities() {
  const categories = ["Infrastructure", "Community", "Sports", "Security"];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            World-Class <span className="text-elite-gold">Amenities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience luxury living with premium facilities and modern
            infrastructure
          </p>
        </div>

        {categories.map((category) => {
          const categoryAmenities = amenities.filter(
            (a) => a.category === category,
          );
          return (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-elite-gold border-b border-elite-gold/30 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryAmenities.map((amenity, idx) => {
                  const Icon = amenity.icon;
                  const colorClass =
                    categoryColors[amenity.category] || "text-elite-gold";
                  const bgClass =
                    categoryBgs[amenity.category] ||
                    "bg-elite-gold/10 group-hover:bg-elite-gold/20";
                  return (
                    <Card
                      key={amenity.title}
                      data-ocid={`amenity.card.${idx + 1}`}
                      className="group hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50"
                    >
                      <CardContent className="p-5 text-center">
                        <div className="mb-3 flex justify-center">
                          <div
                            className={`p-3 rounded-lg transition-colors ${bgClass}`}
                          >
                            <Icon className={`h-6 w-6 ${colorClass}`} />
                          </div>
                        </div>
                        <h4 className="font-bold text-sm mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {amenity.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

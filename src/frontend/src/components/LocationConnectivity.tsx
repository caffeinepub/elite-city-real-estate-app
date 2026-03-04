import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Camera,
  Factory,
  Fuel,
  GraduationCap,
  Hospital,
  MapPin,
  Navigation,
  Plane,
  QrCode,
  ShieldCheck,
  Train,
  Trophy,
  Wrench,
} from "lucide-react";

const highways = [
  { direction: "West", destination: "Raichur" },
  { direction: "East", destination: "Kodada" },
  { direction: "North", destination: "Hyderabad" },
  { direction: "South", destination: "Chennai / Tirupati" },
];

const landmarks = [
  {
    icon: Plane,
    title: "RGIA Airport",
    distance: "64 KM",
    color: "text-blue-500",
  },
  {
    icon: Building2,
    title: "Fourth City Pharma",
    distance: "30 KM",
    color: "text-purple-500",
  },
  {
    icon: Train,
    title: "RRR Station",
    distance: "16.5 KM",
    color: "text-blue-500",
  },
  {
    icon: Train,
    title: "Future RRR",
    distance: "15 Minutes",
    color: "text-green-500",
  },
  {
    icon: Navigation,
    title: "Tirupati Bypass",
    distance: "Facing Main Gate",
    color: "text-elite-gold",
  },
  {
    icon: MapPin,
    title: "Sub Registrar Office",
    distance: "200 Meters",
    color: "text-orange-500",
  },
  {
    icon: Building2,
    title: "Municipality Office",
    distance: "300 Meters",
    color: "text-teal-500",
  },
  {
    icon: GraduationCap,
    title: "B.Ed College",
    distance: "Nearby",
    color: "text-indigo-500",
  },
  {
    icon: Trophy,
    title: "Mini Cricket Stadium",
    distance: "Nearby",
    color: "text-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Gurukul School",
    distance: "Nearby",
    color: "text-indigo-500",
  },
  {
    icon: Hospital,
    title: "100 Bed Hospital",
    distance: "300 Meters",
    color: "text-red-500",
  },
  {
    icon: Factory,
    title: "Suryalata Spinning Mill",
    distance: "500 Meters (1000+ Jobs)",
    color: "text-teal-500",
  },
  {
    icon: Fuel,
    title: "Bharat Petrol Bunk",
    distance: "Nearby",
    color: "text-yellow-500",
  },
];

const securityFeatures = [
  {
    icon: Camera,
    title: "24-Hour Security & CCTV",
    description: "Round-the-clock surveillance and security",
  },
  {
    icon: QrCode,
    title: "QR Code Entry",
    description: "Smart digital entry system",
  },
  {
    icon: Wrench,
    title: "3-Year Professional Maintenance",
    description: "Society handover at ₹10/yard after 3 years",
  },
  {
    icon: ShieldCheck,
    title: "Gated Community",
    description: "Safe, secure, and private living",
  },
];

export default function LocationConnectivity() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prime <span className="text-elite-gold">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Excellent connectivity to major highways and essential facilities
          </p>
        </div>

        {/* 4-Way Highway Connectivity */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            4 Major Highways Connectivity
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highways.map((highway, index) => (
              <Card
                key={highway.direction}
                data-ocid={`location.card.${index + 1}`}
                className="hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50"
              >
                <CardContent className="p-6 text-center">
                  <Navigation className="h-8 w-8 text-elite-gold mx-auto mb-3" />
                  <p className="font-bold text-lg mb-1">{highway.direction}</p>
                  <p className="text-sm text-muted-foreground">
                    to {highway.destination}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Landmarks & Facilities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Key Landmarks &amp; Distances
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarks.map((landmark, index) => {
              const Icon = landmark.icon;
              return (
                <Card
                  key={landmark.title}
                  data-ocid={`location.item.${index + 1}`}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-muted flex-shrink-0">
                        <Icon className={`h-5 w-5 ${landmark.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm mb-0.5">
                          {landmark.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {landmark.distance}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Security & Maintenance */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Security &amp; Maintenance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  data-ocid={`security.card.${index + 1}`}
                  className="bg-elite-gold/5 border-elite-gold/20 hover:shadow-lg hover:border-elite-gold/40 transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-elite-gold/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-elite-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

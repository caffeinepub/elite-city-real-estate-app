import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  FileCheck,
  Globe,
  Layers,
  MapPinned,
  Ruler,
} from "lucide-react";

const details = [
  {
    icon: Globe,
    label: "Future Plan",
    value: "500+ Acres",
    description: "Visionary mega township development",
  },
  {
    icon: Building2,
    label: "Elite City Phase-1",
    value: "6 Acres",
    description: "Kalvakurthi Town – Currently Available",
  },
  {
    icon: Building2,
    label: "Elite City Premium Phase-2",
    value: "10 Acres",
    description: "Kalvakurthi Town – Premium Plots",
  },
  {
    icon: Layers,
    label: "Total Development",
    value: "16 Acres",
    description: "~300 Plots Across Both Phases",
  },
  {
    icon: Ruler,
    label: "Plot Sizes",
    value: "146–330 Sq. Yards",
    description: "Various Options to Choose From",
  },
  {
    icon: FileCheck,
    label: "Layout Design",
    value: "Modern & Scientific",
    description: "DTCP Approved, Scientifically Planned",
  },
];

export default function ProjectDetails() {
  return (
    <section id="project-details" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="text-elite-gold">Details</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium gated community projects with modern infrastructure and
            world-class amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={detail.label}
                data-ocid={`project.card.${index + 1}`}
                className="group hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-elite-gold/10 group-hover:bg-elite-gold/20 transition-colors">
                      <Icon className="h-6 w-6 text-elite-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {detail.label}
                      </p>
                      <h3 className="text-xl font-bold mb-1">{detail.value}</h3>
                      <p className="text-sm text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Location indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPinned className="h-5 w-5 text-elite-gold" />
          <span className="text-sm font-medium">
            Kalvakurthi Town, Nagarkurnool District, Telangana
          </span>
        </div>
      </div>
    </section>
  );
}

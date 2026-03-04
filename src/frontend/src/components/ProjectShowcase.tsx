import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Elite Township",
    location: "J.P. Nagar",
    area: "23 Acres",
    image: "/assets/generated/elite-township.dim_400x300.png",
    featured: false,
  },
  {
    id: 2,
    name: "Elite City",
    location: "Kalvakurthi",
    area: "Phase-1 - 6 Acres",
    image: "/assets/generated/elite-city.dim_400x300.png",
    featured: true,
  },
  {
    id: 3,
    name: "Elite City Premium",
    location: "Phase-2 - 10 Acres",
    area: "Municipality Limits",
    image: "/assets/generated/elite-city-premium.dim_400x300.png",
    featured: false,
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-elite-gold">Premium Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our portfolio of luxury gated community projects with
            world-class amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                project.featured ? "ring-2 ring-elite-gold scale-105" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-elite-gold text-black font-semibold">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-elite-gold">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <p className="text-sm font-semibold text-elite-gold/80">
                  {project.area}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

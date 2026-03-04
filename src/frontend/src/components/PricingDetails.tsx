import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

const pricing = [
  {
    project: "Elite Township",
    price: "9,499",
    location: "J.P. Nagar - 23 Acres",
    featured: false,
  },
  {
    project: "Elite City Phase-1",
    price: "19,999",
    location: "Kalvakurthi - 6 Acres",
    featured: true,
  },
  {
    project: "Elite City Phase 2",
    price: "17,999",
    location: "Kalvakurthi",
    featured: false,
  },
  {
    project: "Elite City Premium",
    price: "19,999",
    location: "Phase-2 - 10 Acres",
    featured: false,
  },
  {
    project: "Commercial Plots",
    price: "25,000",
    location: "Tirupati Bypass",
    featured: false,
    isCommercial: true,
  },
];

export default function PricingDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Price <span className="text-elite-gold">Details</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive pricing for premium plots with world-class amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.map((item) => (
            <Card
              key={item.project}
              className={`group hover:shadow-xl transition-all duration-300 ${
                item.featured ? "ring-2 ring-elite-gold scale-105" : ""
              } ${item.isCommercial ? "bg-elite-gold/5" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{item.project}</CardTitle>
                  {item.featured && (
                    <Badge className="bg-elite-gold text-black font-semibold">
                      Featured
                    </Badge>
                  )}
                  {item.isCommercial && (
                    <Badge variant="secondary" className="font-semibold">
                      Commercial
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-4">
                  <IndianRupee className="h-6 w-6 text-elite-gold" />
                  <span className="text-4xl font-bold text-elite-gold">
                    {item.price}
                  </span>
                  <span className="text-muted-foreground">/-</span>
                </div>
                <p className="text-sm text-muted-foreground">per Sq. Yard</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Prices are subject to change. Contact us for the latest pricing
            and offers.
          </p>
        </div>
      </div>
    </section>
  );
}

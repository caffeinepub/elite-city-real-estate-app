import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, TrendingUp } from "lucide-react";

const pricing = [
  {
    project: "Elite Township",
    price: "9,499",
    location: "23 Acres",
    sublocation: "",
    featured: false,
    isCommercial: false,
  },
  {
    project: "Elite City Phase-1",
    price: "19,999",
    location: "Kalvakurthi",
    sublocation: "6 Acres",
    featured: true,
    isCommercial: false,
  },
  {
    project: "Elite City Phase-2",
    price: "17,999",
    location: "Kalvakurthi",
    sublocation: "",
    featured: false,
    isCommercial: false,
  },
  {
    project: "Elite City Premium",
    price: "19,999",
    location: "Phase-2",
    sublocation: "",
    featured: false,
    isCommercial: false,
  },
  {
    project: "Commercial Plots",
    price: "25,000",
    location: "Tirupati Bypass Facing",
    sublocation: "",
    featured: false,
    isCommercial: true,
  },
];

const investmentInsights = [
  {
    size: "1000G Plots",
    tip: "Best Investment",
    detail: "High land value appreciation potential",
  },
  {
    size: "500G Plots",
    tip: "Population Growing",
    detail: "Rising demand in rapidly developing area",
  },
  {
    size: "150G Plots",
    tip: "Value Appreciating",
    detail: "Entry-level pricing with strong upside",
  },
];

export default function PricingDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Land Value –{" "}
            <span className="text-elite-gold">Invest in the Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive pricing for premium plots with world-class amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricing.map((item, index) => (
            <Card
              key={item.project}
              data-ocid={`pricing.card.${index + 1}`}
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
                <p className="text-sm text-muted-foreground">
                  {item.location}
                  {item.sublocation ? ` · ${item.sublocation}` : ""}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1 mb-2">
                  <IndianRupee className="h-5 w-5 text-elite-gold" />
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

        {/* Pricing note */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            * Prices per square yard. Facing charges extra. Prices subject to
            change – contact us for latest offers.
          </p>
        </div>

        {/* Investment Insights */}
        <Card
          className="bg-gradient-to-r from-elite-gold/10 via-elite-gold/5 to-transparent border-elite-gold/30"
          data-ocid="pricing.card"
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-7 w-7 text-elite-gold" />
              <CardTitle className="text-2xl font-bold">
                Investment Insight
              </CardTitle>
            </div>
            <p className="text-muted-foreground">
              Why Elite City plots are the smartest land investment right now
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {investmentInsights.map((insight, idx) => (
                <div
                  key={insight.size}
                  data-ocid={`investment.card.${idx + 1}`}
                  className="p-4 rounded-lg bg-elite-gold/10 border border-elite-gold/20"
                >
                  <p className="font-bold text-elite-gold text-lg mb-1">
                    {insight.size}
                  </p>
                  <p className="font-semibold text-sm mb-1">✓ {insight.tip}</p>
                  <p className="text-xs text-muted-foreground">
                    {insight.detail}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

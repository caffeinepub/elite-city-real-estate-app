import { Card, CardContent } from '@/components/ui/card';
import { Building2, Ruler, MapPinned, FileCheck } from 'lucide-react';

const details = [
  {
    icon: Building2,
    label: 'Elite City Phase-1',
    value: '6 Acres',
    description: 'Kalvakurthi - Currently Available',
  },
  {
    icon: MapPinned,
    label: 'Elite Township',
    value: '23 Acres',
    description: 'J.P. Nagar',
  },
  {
    icon: Building2,
    label: 'Total Portfolio',
    value: '39 Acres',
    description: '633 Plots Across All Projects',
  },
  {
    icon: Ruler,
    label: 'Plot Sizes',
    value: '146-330 Sq. Yards',
    description: 'Various Options Available',
  },
  {
    icon: FileCheck,
    label: 'Layout Design',
    value: 'HMDA Approved',
    description: 'Modern & Compliant',
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
            Premium gated community projects with modern infrastructure and world-class amenities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-elite-gold/10 group-hover:bg-elite-gold/20 transition-colors">
                      <Icon className="h-6 w-6 text-elite-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                      <h3 className="text-2xl font-bold mb-1">{detail.value}</h3>
                      <p className="text-sm text-muted-foreground">{detail.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

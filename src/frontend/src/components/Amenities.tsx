import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, 
  Trees, 
  Dumbbell, 
  Footprints, 
  Trophy,
  Droplets,
  Sun,
  Building,
  Zap
} from 'lucide-react';

const amenities = [
  {
    icon: '/assets/generated/cc-road-icon.dim_64x64.png',
    title: '40ft & 33ft CC Roads',
    description: 'Wide concrete roads for smooth connectivity',
  },
  {
    icon: '/assets/generated/electricity-icon.dim_64x64.png',
    title: 'Underground Electricity',
    description: 'Modern underground power infrastructure',
  },
  {
    icon: '/assets/generated/drainage-icon.dim_64x64.png',
    title: 'Underground Drainage',
    description: 'Advanced drainage system',
  },
  {
    iconComponent: Droplets,
    title: 'Water Connections',
    description: '2 connections per plot',
  },
  {
    iconComponent: Sun,
    title: 'Solar Street Lights',
    description: 'Eco-friendly lighting',
  },
  {
    iconComponent: Trees,
    title: 'Avenue Plantation',
    description: 'Green landscaping',
  },
  {
    image: '/assets/generated/entrance-arch.dim_400x300.png',
    title: 'Grand Entrance Arch',
    description: 'Impressive main entrance',
  },
  {
    image: '/assets/generated/swimming-pool.dim_400x300.png',
    title: 'Resort-Style Swimming Pool',
    description: 'Luxury pool facility',
  },
  {
    image: '/assets/generated/parks-playground.dim_400x300.png',
    title: 'Parks & Play Area',
    description: 'Family-friendly spaces',
  },
  {
    iconComponent: Dumbbell,
    title: 'Open Gym',
    description: 'Outdoor fitness area',
  },
  {
    iconComponent: Footprints,
    title: 'Jogging Track',
    description: 'Dedicated running path',
  },
  {
    iconComponent: Trophy,
    title: 'Indoor Sports',
    description: 'Multi-purpose sports facility',
  },
  {
    iconComponent: Trophy,
    title: 'Cricket Net Courts',
    description: 'Practice cricket facilities',
  },
  {
    iconComponent: Building,
    title: 'Overhead Water Tank',
    description: '24/7 water supply',
  },
];

export default function Amenities() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            World-Class <span className="text-elite-gold">Amenities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience luxury living with premium facilities and modern infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.iconComponent;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {amenity.icon && (
                      <img 
                        src={amenity.icon} 
                        alt={amenity.title} 
                        className="h-16 w-16 object-contain"
                      />
                    )}
                    {amenity.image && (
                      <img 
                        src={amenity.image} 
                        alt={amenity.title} 
                        className="h-32 w-full object-cover rounded-lg"
                      />
                    )}
                    {IconComponent && (
                      <div className="p-4 rounded-lg bg-elite-gold/10 group-hover:bg-elite-gold/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-elite-gold" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold mb-2">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

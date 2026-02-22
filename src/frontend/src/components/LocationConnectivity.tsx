import { Card, CardContent } from '@/components/ui/card';
import { 
  Navigation, 
  Train, 
  Building2, 
  GraduationCap, 
  Hospital, 
  Trophy,
  Factory
} from 'lucide-react';

const highways = [
  { direction: 'West', destination: 'Raichur' },
  { direction: 'East', destination: 'Kodad' },
  { direction: 'North', destination: 'Hyderabad' },
  { direction: 'South', destination: 'Chennai' },
];

const landmarks = [
  {
    icon: Train,
    title: 'RRR Station',
    distance: '15 Minutes',
    color: 'text-blue-500',
  },
  {
    icon: Train,
    title: 'Railway Line Survey',
    distance: 'Completed',
    color: 'text-green-500',
  },
  {
    icon: Navigation,
    title: 'Main Gate',
    distance: 'Tirupati Bypass Road',
    color: 'text-elite-gold',
  },
  {
    icon: Building2,
    title: 'Sub-Registrar Office',
    distance: '200 Meters',
    color: 'text-purple-500',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Colleges',
    distance: 'Nearby',
    color: 'text-indigo-500',
  },
  {
    icon: Hospital,
    title: 'Hospital',
    distance: 'Close Proximity',
    color: 'text-red-500',
  },
  {
    icon: Trophy,
    title: 'Mini Cricket Stadium',
    distance: 'Within Complex',
    color: 'text-orange-500',
  },
  {
    icon: Factory,
    title: 'Surylatha Spinning Mill',
    distance: '500 Meters (1000+ Jobs)',
    color: 'text-teal-500',
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
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">4 Major Highways Connectivity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highways.map((highway, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-elite-gold/50">
                <CardContent className="p-6 text-center">
                  <Navigation className="h-8 w-8 text-elite-gold mx-auto mb-3" />
                  <p className="font-bold text-lg mb-1">{highway.direction}</p>
                  <p className="text-sm text-muted-foreground">to {highway.destination}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Key Landmarks & Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarks.map((landmark, index) => {
              const Icon = landmark.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-muted ${landmark.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{landmark.title}</h4>
                        <p className="text-sm text-muted-foreground">{landmark.distance}</p>
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

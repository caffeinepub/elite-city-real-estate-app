import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

export default function LayoutGallery() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            DTCP Approved <span className="text-elite-gold">Layout Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our professionally designed and government-approved layout plan for Elite City Kalvakurthi
          </p>
        </div>

        <Card className="max-w-6xl mx-auto bg-card border-elite-gold/20 shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group">
                  <img 
                    src="/assets/Screenshot_20260222-232615.Adobe Acrobat.png" 
                    alt="DTCP Approved Layout Plan - Elite City Kalvakurthi TLP No.94/2025/H" 
                    className="w-full h-auto transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-elite-gold text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="h-6 w-6" />
                      Click to Zoom & Explore
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-elite-red text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    TLP No.94/2025/H
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[98vw] max-h-[98vh] p-4 bg-black/95">
                <div className="relative overflow-auto max-h-[90vh]">
                  <img 
                    src="/assets/Screenshot_20260222-232615.Adobe Acrobat.png" 
                    alt="DTCP Approved Layout Plan - Elite City Kalvakurthi" 
                    className={`w-full h-auto transition-transform duration-300 ${isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'}`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                  <div className="absolute top-4 right-4 bg-elite-gold/90 text-black px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                    <Maximize2 className="h-4 w-4" />
                    {isZoomed ? 'Click to Zoom Out' : 'Click to Zoom In'}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-elite-gold/10 border-elite-gold/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-elite-gold mb-2">DTCP</div>
                <p className="text-sm text-muted-foreground">Government Approved</p>
              </CardContent>
            </Card>
            <Card className="bg-elite-gold/10 border-elite-gold/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-elite-gold mb-2">6 Acres</div>
                <p className="text-sm text-muted-foreground">Total Project Area</p>
              </CardContent>
            </Card>
            <Card className="bg-elite-gold/10 border-elite-gold/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-elite-gold mb-2">Premium</div>
                <p className="text-sm text-muted-foreground">Plot Layouts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

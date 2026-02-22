import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitInquiry } from '../hooks/useQueries';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '9848525246',
    email: '',
    message: '',
    plotNumber: '',
  });

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await submitInquiry.mutateAsync(formData);
      toast.success('Inquiry submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        contact: '9848525246',
        email: '',
        message: '',
        plotNumber: '',
      });
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <section id="inquiry-form" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-2">
              Book Your <span className="text-elite-gold">Dream Plot</span>
            </CardTitle>
            <CardDescription className="text-base">
              Fill in your details and our team will contact you shortly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Phone Number *</Label>
                <Input
                  id="contact"
                  type="tel"
                  placeholder="9848525246"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plotNumber">Interested Project</Label>
                <Select
                  value={formData.plotNumber}
                  onValueChange={(value) => setFormData({ ...formData, plotNumber: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elite-township">Elite Township - J.P. Nagar (23 Acres)</SelectItem>
                    <SelectItem value="elite-city-phase1">Elite City Phase-1 - Kalvakurthi (6 Acres)</SelectItem>
                    <SelectItem value="elite-city-phase2">Elite City Phase 2 - Kalvakurthi</SelectItem>
                    <SelectItem value="elite-city-premium">Elite City Premium Phase-2 (10 Acres)</SelectItem>
                    <SelectItem value="commercial-plots">Commercial Plots - Tirupati Bypass</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-elite-gold hover:bg-elite-gold-dark text-black font-semibold"
                size="lg"
                disabled={submitInquiry.isPending}
              >
                {submitInquiry.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

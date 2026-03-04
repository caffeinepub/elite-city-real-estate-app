import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Clock, ZoomIn } from "lucide-react";

const approvals = [
  {
    project: "Elite City",
    dtcp: "DTCP TLP No.94/2025/H",
    rera: "RERA No: PO1600010279",
    status: "approved",
  },
  {
    project: "Elite Township",
    dtcp: "DTCP TLP No.123/204/H",
    rera: "RERA No: PO1600009014",
    status: "approved",
  },
  {
    project: "Elite City Premium",
    dtcp: "Approval Process",
    rera: "Ongoing",
    status: "ongoing",
  },
];

export default function Approvals() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No.1 <span className="text-elite-gold">Approvals</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All our projects are legally approved with clear documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {approvals.map((approval) => (
            <Card
              key={approval.project}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-elite-gold">
                  {approval.project}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    {approval.status === "approved" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{approval.dtcp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {approval.status === "approved" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{approval.rera}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-elite-gold/10 border-elite-gold/30 mb-8">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-bold">Clear Legal Documents</h3>
            </div>
            <p className="text-muted-foreground">
              All projects come with verified and transparent legal
              documentation
            </p>
          </CardContent>
        </Card>

        {/* DTCP Approved Layout Plan */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              DTCP Approved <span className="text-elite-gold">Layout Plan</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elite City Kalvakurthi - TLP No.94/2025/H
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="relative max-w-5xl mx-auto cursor-pointer group">
                <img
                  src="/assets/Screenshot_20260222-232615.Adobe Acrobat.png"
                  alt="DTCP Approved Layout Plan - Elite City Kalvakurthi"
                  className="w-full h-auto rounded-lg shadow-2xl border-2 border-elite-gold/30 transition-all duration-300 group-hover:border-elite-gold"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-elite-gold/90 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                    <ZoomIn className="h-5 w-5" />
                    Click to View Full Layout
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-2">
              <div className="overflow-auto">
                <img
                  src="/assets/Screenshot_20260222-232615.Adobe Acrobat.png"
                  alt="DTCP Approved Layout Plan - Elite City Kalvakurthi"
                  className="w-full h-auto"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

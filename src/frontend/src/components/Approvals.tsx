import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Award,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";

const approvals = [
  {
    project: "Elite City",
    dtcp: "DTCP TLP No. 94/2025/H",
    rera: "RERA P01600010279",
    status: "approved",
  },
  {
    project: "Elite Township",
    dtcp: "DTCP TLP No. 123/2024/H",
    rera: "RERA P01600009014",
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
          {approvals.map((approval, index) => (
            <Card
              key={approval.project}
              data-ocid={`approval.card.${index + 1}`}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-elite-gold">
                    {approval.project}
                  </h3>
                  {approval.status === "approved" ? (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
                      ✓ Approved
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                    >
                      In Progress
                    </Badge>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    {approval.status === "approved" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                        DTCP
                      </p>
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
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                        RERA
                      </p>
                      <p className="text-sm font-medium">{approval.rera}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ISO Certification & Legal Note row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* ISO Badge */}
          <Card className="bg-elite-gold/10 border-elite-gold/30">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-elite-gold/20">
                <Award className="h-8 w-8 text-elite-gold" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-elite-gold">
                  ISO 9001:2015 Certified
                </h4>
                <p className="text-sm text-muted-foreground">
                  Quality Management System Certified Organisation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Note */}
          <Card className="bg-green-500/5 border-green-500/20">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/10 flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Clear Legal Documents</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Clear Documents · Legal Opinion · Spot Registration
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <FileText className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">
                    Fully Transparent Documentation
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DTCP Approved Layout Plan */}
        <div className="mt-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              DTCP Approved <span className="text-elite-gold">Layout Plan</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elite City Kalvakurthi – TLP No.94/2025/H
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div
                className="relative max-w-5xl mx-auto cursor-pointer group"
                data-ocid="approvals.open_modal_button"
              >
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
            <DialogContent
              className="max-w-[95vw] max-h-[95vh] p-2"
              data-ocid="approvals.dialog"
            >
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

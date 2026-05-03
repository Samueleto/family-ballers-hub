import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ME, MY_PAYMENTS, CLUB } from "@/lib/dummy-data";
import { formatDate, formatNaira } from "@/lib/format";
import { Trophy, Printer, ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/portal/receipts/$id")({ component: ReceiptPage });

function ReceiptPage() {
  const { id } = Route.useParams();
  const p = MY_PAYMENTS.find(x => x.id === id) ?? MY_PAYMENTS[0];
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center justify-between">
        <a href="/portal/payments"><Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4" /> Back</Button></a>
        <Button variant="outline" size="sm" onClick={()=>window.print()}><Printer className="h-4 w-4" /> Print</Button>
      </div>
      <Card className="print:shadow-none"><CardContent className="p-8">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2"><span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Trophy className="h-6 w-6" /></span><div><p className="font-bold text-lg">{CLUB.name}</p><p className="text-xs text-muted-foreground">Official Receipt</p></div></div>
          <div className="text-right"><p className="text-xs text-muted-foreground">Receipt #</p><p className="font-mono font-bold">{p.id}</p></div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
          <div><p className="text-xs text-muted-foreground">Member</p><p className="font-medium">{ME.name}</p></div>
          <div><p className="text-xs text-muted-foreground">Date</p><p className="font-medium">{formatDate(p.date)}</p></div>
          <div><p className="text-xs text-muted-foreground">Reference</p><p className="font-medium">{p.ref}</p></div>
          <div><p className="text-xs text-muted-foreground">Status</p><p className="font-medium capitalize text-success flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> {p.status}</p></div>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between"><span>{p.type}</span><span className="font-medium">{formatNaira(p.amount)}</span></div>
          <div className="mt-3 flex justify-between border-t pt-3 text-lg font-bold"><span>Total</span><span className="text-success">{formatNaira(p.amount)}</span></div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Thank you for your payment. — {CLUB.name}</p>
      </CardContent></Card>
    </div>
  );
}

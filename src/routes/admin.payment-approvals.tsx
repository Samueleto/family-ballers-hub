import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoneyText } from "@/components/common/MoneyText";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PENDING_APPROVALS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";
import { Check, X, Eye } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/payment-approvals")({ component: () => {
  const [items, setItems] = useState(PENDING_APPROVALS);
  const act = (id: string, action: "approve"|"reject") => {
    setItems(items.filter(i => i.id !== id));
    toast.success(`Payment ${action}d. ${action==="approve"?"Receipt generated.":"Member notified."}`);
  };
  return (
    <div className="space-y-6">
      <PageHeader title="Payment Approval Queue" description={`${items.length} pending submissions`} />
      <Card><CardContent className="p-0 overflow-x-auto"><Table>
        <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Type</TableHead><TableHead>Bank</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Amount</TableHead><TableHead></TableHead></TableRow></TableHeader>
        <TableBody>{items.map(p => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.member}</TableCell>
            <TableCell>{p.type}</TableCell>
            <TableCell className="text-xs">{p.bank} · {p.ref}</TableCell>
            <TableCell>{formatDate(p.date)}</TableCell>
            <TableCell className="text-right"><MoneyText amount={p.amount} /></TableCell>
            <TableCell className="text-right whitespace-nowrap">
              <Sheet><SheetTrigger asChild><Button size="icon" variant="ghost"><Eye className="h-4 w-4" /></Button></SheetTrigger>
                <SheetContent>
                  <SheetHeader><SheetTitle>{p.member} — {p.type}</SheetTitle></SheetHeader>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground">[Proof image preview]</div>
                    <div><span className="text-muted-foreground">Amount:</span> <MoneyText amount={p.amount} /></div>
                    <div><span className="text-muted-foreground">Bank:</span> {p.bank}</div>
                    <div><span className="text-muted-foreground">Reference:</span> {p.ref}</div>
                    <div className="flex gap-2 pt-3"><Button className="flex-1" onClick={()=>act(p.id,"approve")}><Check className="h-4 w-4" /> Approve</Button><Button variant="destructive" className="flex-1" onClick={()=>act(p.id,"reject")}><X className="h-4 w-4" /> Reject</Button></div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button size="icon" variant="ghost" className="text-success" onClick={()=>act(p.id,"approve")}><Check className="h-4 w-4" /></Button>
              <Button size="icon" variant="ghost" className="text-destructive" onClick={()=>act(p.id,"reject")}><X className="h-4 w-4" /></Button>
            </TableCell>
          </TableRow>
        ))}{items.length === 0 && <TableRow><TableCell colSpan={6} className="py-8 text-center text-muted-foreground">All caught up — no pending approvals</TableCell></TableRow>}</TableBody>
      </Table></CardContent></Card>
    </div>
  );
}});

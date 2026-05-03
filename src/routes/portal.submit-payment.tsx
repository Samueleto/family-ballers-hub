import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/portal/submit-payment")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Submit Payment Proof" description="Status will be Pending until treasurer approves" />
    <Card className="max-w-2xl"><CardContent className="p-6">
      <form onSubmit={(e)=>{e.preventDefault(); toast.success("Payment submitted! Status: Pending");}} className="space-y-4">
        <div><Label>Payment type</Label>
          <Select defaultValue="dues"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
            <SelectItem value="dues">Monthly Dues</SelectItem><SelectItem value="contribution">Occasion Contribution</SelectItem>
            <SelectItem value="fine">Fine</SelectItem><SelectItem value="lateness">Lateness Fee</SelectItem>
            <SelectItem value="pledge">Constitution Pledge</SelectItem>
          </SelectContent></Select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Amount (₦)</Label><Input type="number" required /></div>
          <div><Label>Payment date</Label><Input type="date" required /></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Bank</Label><Input placeholder="GTBank" required /></div>
          <div><Label>Transaction reference</Label><Input placeholder="TRX/12345" required /></div>
        </div>
        <div><Label>Upload proof (image / PDF)</Label>
          <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm text-muted-foreground"><Upload className="mx-auto mb-2 h-6 w-6" /> Click or drag to upload (UI placeholder)</div>
        </div>
        <div><Label>Notes (optional)</Label><Textarea rows={2} /></div>
        <Button type="submit" className="w-full">Submit Payment Proof</Button>
      </form>
    </CardContent></Card>
  </div>
)});

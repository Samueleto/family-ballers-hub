import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MEMBERS } from "@/lib/dummy-data";
import { MoneyText } from "@/components/common/MoneyText";
import { toast } from "sonner";

const debtors = MEMBERS.filter(m => m.outstanding > 0);

export const Route = createFileRoute("/admin/debt-redemption")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Debt Redemption" description="Apply payments against outstanding member debts" />
    <Card className="max-w-2xl"><CardContent className="p-6">
      <form onSubmit={(e)=>{e.preventDefault(); toast.success("Debt redemption applied (UI placeholder)");}} className="space-y-4">
        <div><Label>Member</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select debtor" /></SelectTrigger><SelectContent>
            {debtors.map(m => <SelectItem key={m.id} value={m.id}>{m.name} — ₦{m.outstanding.toLocaleString()}</SelectItem>)}
          </SelectContent></Select>
        </div>
        <div><Label>Apply against</Label>
          <Select defaultValue="oldest"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
            <SelectItem value="oldest">Oldest debt first</SelectItem><SelectItem value="dues">Monthly dues</SelectItem>
            <SelectItem value="contributions">Contributions</SelectItem><SelectItem value="fines">Fines</SelectItem>
          </SelectContent></Select>
        </div>
        <div><Label>Amount paid (₦)</Label><Input type="number" required /></div>
        <div><Label>Reference</Label><Input required /></div>
        <Button type="submit" className="w-full">Apply Redemption</Button>
      </form>
    </CardContent></Card>
    <Card><CardContent className="p-6">
      <h3 className="font-semibold mb-3">Outstanding totals</h3>
      <div className="grid gap-2 sm:grid-cols-2">{debtors.map(m => (
        <div key={m.id} className="flex justify-between border-b py-2"><span>{m.name}</span><MoneyText amount={m.outstanding} variant="outstanding" /></div>
      ))}</div>
    </CardContent></Card>
  </div>
)});

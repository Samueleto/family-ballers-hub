import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { MEMBERS, MONTHS, DUES_2025, MONTHLY_DUE_AMOUNT, type PaymentStatus } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/dues-grid")({ component: DuesGrid });

const cellClass: Record<string, string> = {
  approved: "bg-success/15 text-success",
  partial: "bg-warning/15 text-warning",
  pending: "bg-warning/15 text-warning",
  unpaid: "bg-destructive/10 text-destructive",
  overdue: "bg-destructive/10 text-destructive",
};

function DuesGrid() {
  return (
    <div className="space-y-6">
      <PageHeader title="Monthly Dues Grid — 2025" description="Excel-style view of all member dues" actions={<ExportButtons name="dues-grid" />} />
      <Card><CardContent className="p-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr><th className="sticky left-0 z-10 bg-muted px-3 py-2 text-left">Member</th>{MONTHS.map(m => <th key={m} className="px-2 py-2">{m}</th>)}<th className="px-3 py-2 text-right">Total</th></tr>
          </thead>
          <tbody>
            {MEMBERS.map(m => {
              const statuses = DUES_2025[m.id] ?? [];
              const paid = statuses.filter(s=>s==="approved").length * MONTHLY_DUE_AMOUNT;
              return (
                <tr key={m.id} className="border-t">
                  <td className="sticky left-0 z-10 bg-card px-3 py-2 font-medium whitespace-nowrap">{m.name}</td>
                  {statuses.map((s,i)=>(<td key={i} className={cn("px-2 py-2 text-center font-medium", cellClass[s])}>{s==="approved"?"✓":s==="unpaid"?"✗":s==="partial"?"½":"…"}</td>))}
                  <td className="px-3 py-2 text-right font-bold">₦{paid.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent></Card>
      <p className="text-xs text-muted-foreground">Legend: ✓ Paid · ½ Partial · … Pending · ✗ Unpaid</p>
    </div>
  );
}

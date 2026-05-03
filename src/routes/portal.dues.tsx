import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { MONTHS, DUES_2025, MONTHLY_DUE_AMOUNT } from "@/lib/dummy-data";
import { formatNaira } from "@/lib/format";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/portal/dues")({ component: DuesPage });

function DuesPage() {
  const [year, setYear] = useState("2025");
  const myStatuses = DUES_2025["m-001"];
  const paid = myStatuses.filter(s => s === "approved").length;
  const owed = myStatuses.filter(s => s === "unpaid" || s === "overdue").length * MONTHLY_DUE_AMOUNT;

  return (
    <div className="space-y-6">
      <PageHeader title="Monthly Dues" description="₦5,000 per month membership dues" actions={
        <>
          <Select value={year} onValueChange={setYear}><SelectTrigger className="w-28"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="2025">2025</SelectItem><SelectItem value="2024">2024</SelectItem></SelectContent></Select>
          <ExportButtons name="my-dues" />
        </>
      } />
      <div className="grid gap-3 sm:grid-cols-3">
        <Card><CardContent className="p-4"><p className="text-xs text-muted-foreground">Paid Months</p><p className="text-2xl font-bold text-success">{paid} / 12</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-muted-foreground">Total Paid</p><p className="text-2xl font-bold">{formatNaira(paid * MONTHLY_DUE_AMOUNT)}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-muted-foreground">Outstanding</p><p className="text-2xl font-bold text-destructive">{formatNaira(owed)}</p></CardContent></Card>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {MONTHS.map((m, i) => (
          <Card key={m}><CardContent className="p-4 text-center">
            <p className="text-xs text-muted-foreground">{m} {year}</p>
            <p className="my-2 text-lg font-bold">{formatNaira(MONTHLY_DUE_AMOUNT)}</p>
            <StatusBadge status={myStatuses[i]} />
          </CardContent></Card>
        ))}
      </div>
    </div>
  );
}

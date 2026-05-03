import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MoneyText } from "@/components/common/MoneyText";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MY_LATENESS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/portal/lateness")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Lateness Fees" description="₦50 per minute late" actions={<ExportButtons name="lateness" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Date</TableHead><TableHead>Minutes Late</TableHead><TableHead className="text-right">Fee</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{MY_LATENESS.map(l => (
        <TableRow key={l.id}><TableCell>{formatDate(l.date)}</TableCell><TableCell>{l.minutesLate} min</TableCell><TableCell className="text-right"><MoneyText amount={l.amount} /></TableCell><TableCell><StatusBadge status={l.status} /></TableCell></TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

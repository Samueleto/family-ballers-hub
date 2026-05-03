import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MoneyText } from "@/components/common/MoneyText";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MY_PAYMENTS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/portal/payments")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Payment History" actions={<ExportButtons name="payments" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Date</TableHead><TableHead>Type</TableHead><TableHead>Reference</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Status</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>{MY_PAYMENTS.map(p => (
        <TableRow key={p.id}>
          <TableCell>{formatDate(p.date)}</TableCell>
          <TableCell className="font-medium">{p.type}</TableCell>
          <TableCell className="text-xs text-muted-foreground">{p.ref}</TableCell>
          <TableCell className="text-right"><MoneyText amount={p.amount} /></TableCell>
          <TableCell><StatusBadge status={p.status} /></TableCell>
          <TableCell><a href={`/portal/receipts/${p.id}`}><Button size="sm" variant="ghost">View</Button></a></TableCell>
        </TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

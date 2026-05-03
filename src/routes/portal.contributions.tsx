import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MoneyText } from "@/components/common/MoneyText";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MY_CONTRIBUTIONS } from "@/lib/dummy-data";

export const Route = createFileRoute("/portal/contributions")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="My Contributions" description="Per-occasion contributions" actions={<ExportButtons name="contributions" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Occasion</TableHead><TableHead className="text-right">Required</TableHead><TableHead className="text-right">Paid</TableHead><TableHead className="text-right">Balance</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{MY_CONTRIBUTIONS.map(c => (
        <TableRow key={c.occasionId}>
          <TableCell className="font-medium">{c.title}</TableCell>
          <TableCell className="text-right"><MoneyText amount={c.required} /></TableCell>
          <TableCell className="text-right"><MoneyText amount={c.paid} variant="income" /></TableCell>
          <TableCell className="text-right"><MoneyText amount={c.required - c.paid} variant={c.required-c.paid > 0 ? "outstanding" : "default"} /></TableCell>
          <TableCell><StatusBadge status={c.status} /></TableCell>
        </TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

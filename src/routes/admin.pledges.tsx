import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoneyText } from "@/components/common/MoneyText";
import { Progress } from "@/components/ui/progress";
import { PLEDGES } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/admin/pledges")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Constitution Pledges" description="Endowment pledges by members" actions={<ExportButtons name="pledges" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Purpose</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Pledged</TableHead><TableHead className="text-right">Paid</TableHead><TableHead>Progress</TableHead></TableRow></TableHeader>
      <TableBody>{PLEDGES.map(p => (
        <TableRow key={p.id}>
          <TableCell className="font-medium">{p.member}</TableCell><TableCell>{p.purpose}</TableCell><TableCell>{formatDate(p.date)}</TableCell>
          <TableCell className="text-right"><MoneyText amount={p.amount} /></TableCell>
          <TableCell className="text-right"><MoneyText amount={p.paid} variant="income" /></TableCell>
          <TableCell className="w-40"><Progress value={(p.paid/p.amount)*100} /></TableCell>
        </TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

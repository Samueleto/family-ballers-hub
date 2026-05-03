import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoneyText } from "@/components/common/MoneyText";
import { StatusBadge } from "@/components/common/StatusBadge";
import { REGISTRATION_FEES } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/admin/registration-fees")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Registration Fees" description="One-time ₦50,000 joining fee" actions={<ExportButtons name="registration" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Joined</TableHead><TableHead className="text-right">Fee</TableHead><TableHead className="text-right">Paid</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{REGISTRATION_FEES.map(r => (
        <TableRow key={r.id}><TableCell className="font-medium">{r.member}</TableCell><TableCell>{formatDate(r.date)}</TableCell><TableCell className="text-right"><MoneyText amount={r.amount} /></TableCell><TableCell className="text-right"><MoneyText amount={r.paid} variant="income" /></TableCell><TableCell><StatusBadge status={r.status} /></TableCell></TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

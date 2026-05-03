import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MoneyText } from "@/components/common/MoneyText";
import { MEMBERS, MY_LATENESS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

const ALL = MEMBERS.slice(0,6).flatMap(m => MY_LATENESS.map(l => ({...l, member: m.name, id: m.id+l.id})));

export const Route = createFileRoute("/admin/lateness")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Lateness Fee Management" description="₦50 per minute" actions={<ExportButtons name="lateness" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Date</TableHead><TableHead>Minutes</TableHead><TableHead className="text-right">Fee</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{ALL.map(l => (
        <TableRow key={l.id}><TableCell className="font-medium">{l.member}</TableCell><TableCell>{formatDate(l.date)}</TableCell><TableCell>{l.minutesLate}</TableCell><TableCell className="text-right"><MoneyText amount={l.amount} /></TableCell><TableCell><StatusBadge status={l.status} /></TableCell></TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MoneyText } from "@/components/common/MoneyText";
import { MEMBERS, MY_FINES } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const ALL = MEMBERS.flatMap(m => MY_FINES.map(f => ({...f, member: m.name, id: m.id+f.id})));

export const Route = createFileRoute("/admin/fines")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Fines Management" actions={<><Button onClick={()=>toast.info("Add fine — UI placeholder")}><Plus className="h-4 w-4" /> Issue Fine</Button><ExportButtons name="fines" /></>} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Reason</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{ALL.slice(0,15).map(f => (
        <TableRow key={f.id}><TableCell className="font-medium">{f.member}</TableCell><TableCell>{f.reason}</TableCell><TableCell>{formatDate(f.date)}</TableCell><TableCell className="text-right"><MoneyText amount={f.amount} /></TableCell><TableCell><StatusBadge status={f.status} /></TableCell></TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

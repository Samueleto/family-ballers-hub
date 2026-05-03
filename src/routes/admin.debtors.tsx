import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoneyText } from "@/components/common/MoneyText";
import { MEMBERS } from "@/lib/dummy-data";
import { Mail, Phone } from "lucide-react";

const debtors = MEMBERS.filter(m => m.outstanding > 0).sort((a,b)=>b.outstanding-a.outstanding);

export const Route = createFileRoute("/admin/debtors")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Debtors List" description={`${debtors.length} members with outstanding balances`} actions={<ExportButtons name="debtors" />} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Contact</TableHead><TableHead className="text-right">Outstanding</TableHead><TableHead></TableHead></TableRow></TableHeader>
      <TableBody>{debtors.map(m => (
        <TableRow key={m.id}>
          <TableCell className="font-medium">{m.name}</TableCell>
          <TableCell className="text-xs text-muted-foreground">{m.phone}</TableCell>
          <TableCell className="text-right"><MoneyText amount={m.outstanding} variant="outstanding" /></TableCell>
          <TableCell className="text-right"><Button size="icon" variant="ghost"><Mail className="h-4 w-4" /></Button><Button size="icon" variant="ghost"><Phone className="h-4 w-4" /></Button></TableCell>
        </TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

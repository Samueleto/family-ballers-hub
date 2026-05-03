import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoneyText } from "@/components/common/MoneyText";
import { Badge } from "@/components/ui/badge";
import { MEMBERS } from "@/lib/dummy-data";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/members")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Member Management" description={`${MEMBERS.length} members`} actions={<><Button onClick={()=>toast.info("Add member — UI placeholder")}><Plus className="h-4 w-4" /> Add Member</Button><ExportButtons name="members" /></>} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Role</TableHead><TableHead>Phone</TableHead><TableHead>Joined</TableHead><TableHead className="text-right">Outstanding</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>{MEMBERS.map(m => (
        <TableRow key={m.id}>
          <TableCell className="font-medium">{m.name}</TableCell>
          <TableCell>{m.role}</TableCell>
          <TableCell className="text-xs text-muted-foreground">{m.phone}</TableCell>
          <TableCell>{m.joined}</TableCell>
          <TableCell className="text-right"><MoneyText amount={m.outstanding} variant={m.outstanding>0?"outstanding":"default"} /></TableCell>
          <TableCell><Badge variant={m.status==="Active"?"default":"secondary"}>{m.status}</Badge></TableCell>
        </TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

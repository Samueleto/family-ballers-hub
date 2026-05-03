import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OCCASIONS } from "@/lib/dummy-data";
import { formatDate, formatNaira } from "@/lib/format";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/contributions")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Contributions Management" actions={<><Button onClick={()=>toast.info("Add — UI placeholder")}><Plus className="h-4 w-4" /> Add Occasion</Button><ExportButtons name="contributions" /></>} />
    <Card><CardContent className="p-0 overflow-x-auto"><Table>
      <TableHeader><TableRow><TableHead>Occasion</TableHead><TableHead>Type</TableHead><TableHead>Date</TableHead><TableHead>Host</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader>
      <TableBody>{OCCASIONS.map(o => (
        <TableRow key={o.id}><TableCell className="font-medium">{o.title}</TableCell><TableCell>{o.type}</TableCell><TableCell>{formatDate(o.date)}</TableCell><TableCell>{o.host}</TableCell><TableCell className="text-right">{formatNaira(o.contribution)}</TableCell></TableRow>
      ))}</TableBody></Table></CardContent></Card>
  </div>
)});

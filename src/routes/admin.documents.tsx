import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DOCS } from "@/lib/dummy-data";
import { FileText, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/documents")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Documents Management" actions={<Button onClick={()=>toast.info("Upload — UI placeholder")}><Upload className="h-4 w-4" /> Upload</Button>} />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {DOCS.map(d => (
        <Card key={d.id}><CardContent className="flex items-start gap-3 p-4">
          <div className="rounded-lg bg-primary/10 p-3"><FileText className="h-5 w-5 text-primary" /></div>
          <div className="min-w-0 flex-1"><p className="font-medium text-sm truncate">{d.name}</p><p className="text-xs text-muted-foreground">{d.category} · {d.size} · {d.date}</p></div>
          <Button size="icon" variant="ghost" className="text-destructive" onClick={()=>toast.info("Delete — UI placeholder")}><Trash2 className="h-4 w-4" /></Button>
        </CardContent></Card>
      ))}
    </div>
  </div>
)});

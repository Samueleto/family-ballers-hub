import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCS } from "@/lib/dummy-data";
import { FileText, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/portal/documents")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Documents Library" description="Club documents available to members" />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {DOCS.map(d => (
        <Card key={d.id}><CardContent className="flex items-start gap-3 p-4">
          <div className="rounded-lg bg-primary/10 p-3"><FileText className="h-5 w-5 text-primary" /></div>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-sm truncate">{d.name}</p>
            <p className="text-xs text-muted-foreground">{d.category} · {d.size}</p>
            <Button size="sm" variant="ghost" className="mt-2 h-7 px-2" onClick={()=>toast.info("Download — UI placeholder")}><Download className="h-3 w-3" /> Download</Button>
          </div>
        </CardContent></Card>
      ))}
    </div>
  </div>
)});

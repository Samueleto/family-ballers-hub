import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { OCCASIONS } from "@/lib/dummy-data";
import { formatDate, formatNaira } from "@/lib/format";

export const Route = createFileRoute("/portal/occasions")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Occasions Calendar" description="Club and member occasions requiring contributions" />
    <div className="grid gap-3 md:grid-cols-2">
      {OCCASIONS.map(o => (
        <Card key={o.id}><CardContent className="flex gap-4 p-5">
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="text-xs">{new Date(o.date).toLocaleString("en",{month:"short"})}</span>
            <span className="text-2xl font-bold leading-none">{new Date(o.date).getDate()}</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold">{o.title}</p>
            <p className="text-xs text-muted-foreground">{o.type} · Host: {o.host}</p>
            <p className="text-xs text-muted-foreground">{formatDate(o.date)}</p>
            <p className="mt-1 text-sm font-medium">Contribution: {formatNaira(o.contribution)}</p>
          </div>
        </CardContent></Card>
      ))}
    </div>
  </div>
)});

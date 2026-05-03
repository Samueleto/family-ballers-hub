import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { EVENTS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/_public/events")({
  head: () => ({ meta: [{ title: "Events — Family Ballers" }, { name: "description", content: "Upcoming meetings, weddings, social events and club activities." }]}),
  component: () => (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">Events</h1>
      <div className="mt-8 space-y-3">
        {EVENTS.map(e => (
          <Card key={e.id}><CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="text-xs font-medium">{new Date(e.date).toLocaleString("en",{month:"short"})}</span>
              <span className="text-2xl font-bold leading-none">{new Date(e.date).getDate()}</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">{e.title}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</p>
              <p className="text-xs text-muted-foreground">{formatDate(e.date)}</p>
            </div>
            <span className="self-start rounded-full bg-muted px-3 py-1 text-xs font-medium">{e.type}</span>
          </CardContent></Card>
        ))}
      </div>
    </div>
  ),
});

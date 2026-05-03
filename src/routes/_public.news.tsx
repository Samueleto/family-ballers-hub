import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { NEWS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/_public/news")({
  head: () => ({ meta: [{ title: "News — Family Ballers" }, { name: "description", content: "The latest news and updates from Family Ballers Club." }]}),
  component: () => (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold">News</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NEWS.map(n => (
          <Card key={n.id} className="overflow-hidden">
            <div className="aspect-video overflow-hidden bg-muted"><img src={n.image} alt={n.title} className="h-full w-full object-cover" /></div>
            <CardContent className="p-5">
              <p className="text-xs text-muted-foreground">{formatDate(n.date)}</p>
              <h3 className="mt-1 font-semibold text-lg">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
});

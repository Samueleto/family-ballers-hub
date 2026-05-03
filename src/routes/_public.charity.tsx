import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CHARITY } from "@/lib/dummy-data";
import { formatNaira } from "@/lib/format";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/_public/charity")({
  head: () => ({ meta: [{ title: "Charity & Outreach — Family Ballers" }, { name: "description", content: "Our charity projects making a difference across Nigerian communities." }]}),
  component: () => (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">Charity & Outreach</h1>
      <p className="mt-2 text-muted-foreground">Building a better community, one project at a time.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {CHARITY.map(c => (
          <Card key={c.id} className="overflow-hidden">
            <div className="aspect-video overflow-hidden bg-muted"><img src={c.image} alt={c.title} className="h-full w-full object-cover" /></div>
            <CardContent className="p-5">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.impact}</p>
              <p className="mt-3 text-xl font-bold text-success">{formatNaira(c.raised)} raised</p>
              <Button className="mt-3 w-full" variant="outline"><Heart className="h-4 w-4" /> Donate</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
});

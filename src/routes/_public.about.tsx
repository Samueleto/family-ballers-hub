import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { CLUB, MEMBERS } from "@/lib/dummy-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/_public/about")({
  head: () => ({ meta: [
    { title: "About Us — Family Ballers" },
    { name: "description", content: "Our story, mission and leadership at Family Ballers Club." },
  ]}),
  component: () => (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">About {CLUB.name}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{CLUB.tagline}</p>
      <div className="prose prose-neutral mt-8 max-w-none">
        <p>Founded in {CLUB.founded}, Family Ballers began as a small circle of friends committed to mutual support and giving back. Today we are a thriving brotherhood of 120+ members impacting communities across Nigeria.</p>
        <h2>Our Values</h2>
        <ul><li>Brotherhood &amp; loyalty</li><li>Charitable service</li><li>Excellence in all we do</li><li>Financial integrity</li></ul>
      </div>
      <h2 className="mt-12 text-2xl font-bold">Leadership</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {MEMBERS.slice(0,3).map(m => (
          <Card key={m.id}><CardContent className="p-5 text-center">
            <Avatar className="mx-auto h-16 w-16"><AvatarFallback className="bg-primary text-primary-foreground">{m.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
            <p className="mt-3 font-semibold">{m.name}</p>
            <p className="text-sm text-primary">{m.role}</p>
          </CardContent></Card>
        ))}
      </div>
    </div>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Calendar, Trophy, Sparkles } from "lucide-react";
import { CLUB, NEWS, EVENTS, CHARITY } from "@/lib/dummy-data";
import { formatDate, formatNaira } from "@/lib/format";

export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title: "Family Ballers — Brotherhood. Charity. Excellence." },
      { name: "description", content: "Welcome to Family Ballers Club. Serving our community since 2014 through brotherhood and charity." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" /> Est. {CLUB.founded}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {CLUB.name}
            </h1>
            <p className="mt-3 text-2xl font-medium text-primary">{CLUB.tagline}</p>
            <p className="mt-4 max-w-lg text-muted-foreground">
              A trusted community of brothers building lasting bonds through fellowship, charity outreach,
              and shared excellence. Together we rise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/membership"><Button size="lg">Become a Member <ArrowRight className="h-4 w-4" /></Button></a>
              <a href="/charity"><Button size="lg" variant="outline">Our Charity Work</Button></a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border bg-muted shadow-xl">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900" alt="Members at a community event" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border bg-card p-4 shadow-lg">
              <p className="text-xs text-muted-foreground">Charity raised YTD</p>
              <p className="text-2xl font-bold text-success">{formatNaira(4550000)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          {[
            { icon: Users, label: "Active Members", value: "120+" },
            { icon: Calendar, label: "Years Active", value: `${new Date().getFullYear() - CLUB.founded}` },
            { icon: Heart, label: "Charity Projects", value: "24" },
            { icon: Trophy, label: "Lives Impacted", value: "3,500+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">Latest News</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {NEWS.map((n) => (
                <Card key={n.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">{formatDate(n.date)}</p>
                    <h3 className="mt-1 font-semibold leading-tight">{n.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Upcoming Events</h2>
            <div className="space-y-3">
              {EVENTS.map((e) => (
                <Card key={e.id}>
                  <CardContent className="flex gap-3 p-4">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-xs font-medium">{new Date(e.date).toLocaleString("en", { month: "short" })}</span>
                      <span className="text-xl font-bold leading-none">{new Date(e.date).getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold leading-tight">{e.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{e.location}</p>
                      <span className="mt-1 inline-block rounded bg-muted px-2 py-0.5 text-[10px] font-medium">{e.type}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charity */}
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Charity & Outreach</h2>
              <p className="text-sm text-muted-foreground">Giving back is at the heart of who we are.</p>
            </div>
            <a href="/charity" className="text-sm font-medium text-primary hover:underline">View all →</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {CHARITY.map((c) => (
              <Card key={c.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.impact}</p>
                  <p className="mt-2 text-lg font-bold text-success">{formatNaira(c.raised)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Join the Family</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Be part of a brotherhood committed to growth, charity, and mutual support.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/membership"><Button size="lg">Apply for Membership</Button></a>
          <a href="/contact"><Button size="lg" variant="outline">Get in Touch</Button></a>
        </div>
      </section>
    </div>
  );
}

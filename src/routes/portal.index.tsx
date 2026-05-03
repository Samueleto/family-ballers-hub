import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { MoneyText } from "@/components/common/MoneyText";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ME, MY_PAYMENTS, ANNOUNCEMENTS, EVENTS } from "@/lib/dummy-data";
import { formatDate } from "@/lib/format";
import { Wallet, CheckCircle2, Clock, Upload, Megaphone } from "lucide-react";

export const Route = createFileRoute("/portal/")({
  head: () => ({ meta: [{ title: "Member Dashboard — Family Ballers" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title={`Welcome, ${ME.name.split(" ")[0]}`} description="Your club balance, dues and recent activity at a glance." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Outstanding Balance" value={`₦${ME.outstanding.toLocaleString()}`} icon={Wallet} tone="destructive" hint="Pay before month-end" />
        <StatCard label="Total Paid YTD" value={`₦${ME.totalPaidYTD.toLocaleString()}`} icon={CheckCircle2} tone="success" />
        <StatCard label="Pending Approvals" value="1" icon={Clock} tone="warning" />
        <StatCard label="Member Since" value={new Date(ME.joined).getFullYear().toString()} hint={ME.role} />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between"><CardTitle>Recent Payments</CardTitle><a href="/portal/payments"><Button size="sm" variant="ghost">View all</Button></a></CardHeader>
          <CardContent className="space-y-2">
            {MY_PAYMENTS.slice(0,5).map(p => (
              <div key={p.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                <div><p className="text-sm font-medium">{p.type}</p><p className="text-xs text-muted-foreground">{formatDate(p.date)} · {p.ref}</p></div>
                <div className="flex items-center gap-3"><MoneyText amount={p.amount} /><StatusBadge status={p.status} /></div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Megaphone className="h-5 w-5" /> Announcements</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {ANNOUNCEMENTS.map(a => (
              <div key={a.id} className="border-l-2 border-primary pl-3">
                <p className="text-xs text-muted-foreground">{formatDate(a.date)}</p>
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader><CardTitle>Upcoming Events</CardTitle></CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map(e => (
            <div key={e.id} className="rounded-lg border p-3"><p className="text-xs text-primary font-medium">{formatDate(e.date)}</p><p className="font-medium text-sm mt-1">{e.title}</p><p className="text-xs text-muted-foreground">{e.location}</p></div>
          ))}
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-3">
        <a href="/portal/submit-payment"><Button><Upload className="h-4 w-4" /> Submit Payment</Button></a>
        <a href="/portal/dues"><Button variant="outline">View Dues</Button></a>
      </div>
    </div>
  );
}

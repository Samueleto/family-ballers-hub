import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MEMBERS } from "@/lib/dummy-data";
import { Phone, Mail, Search } from "lucide-react";

export const Route = createFileRoute("/portal/directory")({ component: () => {
  const [q, setQ] = useState("");
  const list = MEMBERS.filter(m => m.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-6">
      <PageHeader title="Member Directory" description={`${MEMBERS.length} members`} />
      <div className="relative max-w-sm"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search members..." className="pl-9" /></div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(m => (
          <Card key={m.id}><CardContent className="flex gap-3 p-4">
            <Avatar><AvatarFallback className="bg-primary/10 text-primary">{m.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <p className="font-medium truncate">{m.name}</p>
              <p className="text-xs text-primary">{m.role}</p>
              <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1 truncate"><Phone className="h-3 w-3" /> {m.phone}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 truncate"><Mail className="h-3 w-3" /> {m.email}</p>
            </div>
          </CardContent></Card>
        ))}
      </div>
    </div>
  );
}});

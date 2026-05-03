import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChatUI } from "@/components/common/ChatUI";
import { MEMBERS } from "@/lib/dummy-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portal/chat/private")({ component: () => {
  const [active, setActive] = useState(MEMBERS[1]);
  return (
    <div className="grid h-[calc(100vh-8rem)] gap-3 lg:grid-cols-[280px_1fr]">
      <div className="overflow-y-auto rounded-lg border bg-card">
        {MEMBERS.filter(m=>m.id!=="m-001").map(m => (
          <button key={m.id} onClick={()=>setActive(m)} className={cn("flex w-full gap-3 border-b p-3 text-left hover:bg-muted", active.id===m.id && "bg-muted")}>
            <Avatar className="h-10 w-10"><AvatarFallback>{m.name.split(" ").map(s=>s[0]).join("")}</AvatarFallback></Avatar>
            <div className="min-w-0"><p className="font-medium text-sm truncate">{m.name}</p><p className="text-xs text-muted-foreground truncate">Tap to chat</p></div>
          </button>
        ))}
      </div>
      <ChatUI title={active.name} />
    </div>
  );
}});

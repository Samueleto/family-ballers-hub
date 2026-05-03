import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: string; text: string; mine?: boolean; time: string };
const SEED: Msg[] = [
  { id: 1, from: "Bisi Adeyemi", text: "Reminder: General meeting Saturday 4pm.", time: "10:02" },
  { id: 2, from: "Tunde Bakare", text: "Noted, will be there.", time: "10:14" },
  { id: 3, from: "You", text: "Coming with my brother.", mine: true, time: "10:20" },
  { id: 4, from: "Chukwuemeka Obi", text: "Welcome 👏", time: "10:21" },
];

export function ChatUI({ title }: { title: string }) {
  const [msgs, setMsgs] = useState(SEED);
  const [input, setInput] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault(); if (!input.trim()) return;
    setMsgs([...msgs, { id: Date.now(), from: "You", text: input, mine: true, time: "now" }]);
    setInput("");
  };
  return (
    <Card className="flex h-[calc(100vh-8rem)] flex-col">
      <div className="border-b p-3 font-semibold">{title}</div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4 bg-muted/20">
        {msgs.map(m => (
          <div key={m.id} className={cn("flex", m.mine ? "justify-end" : "justify-start")}>
            <div className={cn("max-w-[75%] rounded-lg px-3 py-2", m.mine ? "bg-primary text-primary-foreground" : "bg-card border")}>
              {!m.mine && <p className="text-[10px] font-semibold text-primary">{m.from}</p>}
              <p className="text-sm">{m.text}</p>
              <p className={cn("text-[10px] mt-0.5", m.mine ? "text-primary-foreground/70" : "text-muted-foreground")}>{m.time}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={send} className="flex gap-2 border-t p-3">
        <Input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..." />
        <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
      </form>
    </Card>
  );
}

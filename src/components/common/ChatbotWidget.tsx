import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Msg = { role: "bot" | "user"; text: string };

const PUBLIC_FAQ = ["How do I join Family Ballers?", "Where do you meet?", "What does membership cost?"];
const PORTAL_QUICK = ["Check My Balance", "Payment Status", "Outstanding Dues"];

function reply(text: string, mode: "public" | "portal"): string {
  const t = text.toLowerCase();
  if (mode === "portal") {
    if (t.includes("balance")) return "Your current outstanding balance is ₦47,500. This includes monthly dues, fines and one wedding contribution.";
    if (t.includes("status")) return "You have 1 pending payment (Monthly Dues – Sep, ₦5,000) awaiting treasurer approval.";
    if (t.includes("outstanding") || t.includes("dues")) return "Outstanding monthly dues: Oct, Nov, Dec 2025 (₦15,000). Plus 1 unpaid fine of ₦5,000.";
    return "I can help with balances, payment status, dues and contributions. Try one of the quick actions below.";
  }
  if (t.includes("join") || t.includes("member")) return "Membership is open by referral. Visit the Membership page or contact us through the Contact form.";
  if (t.includes("meet") || t.includes("where")) return "We meet monthly at our clubhouse in Lagos. Public events are listed on the Events page.";
  if (t.includes("cost") || t.includes("fee") || t.includes("price")) return "Registration fee is ₦50,000 (one-off). Monthly dues are ₦5,000.";
  return "Hi! I'm the Family Ballers Club Assistant. Ask me about membership, events, or our charity work.";
}

export function ChatbotWidget({ mode = "public" }: { mode?: "public" | "portal" }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: mode === "portal" ? "Hi! I'm your portal assistant. Use a quick action or ask me anything." : "Welcome to Family Ballers! How can I help?" },
  ]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }, { role: "bot", text: reply(text, mode) }]);
    setInput("");
  };

  const quick = mode === "portal" ? PORTAL_QUICK : PUBLIC_FAQ;

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex h-[460px] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary p-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <p className="text-sm font-semibold">Club Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded p-1 hover:bg-primary-foreground/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {msgs.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[80%] rounded-lg px-3 py-2 text-sm",
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-2">
            <div className="mb-2 flex flex-wrap gap-1">
              {quick.map((q) => (
                <button key={q} onClick={() => send(q)} className="rounded-full border bg-background px-2 py-0.5 text-[11px] hover:bg-muted">{q}</button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-1">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="h-9" />
              <Button type="submit" size="icon" className="h-9 w-9"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </div>
      )}
      <Button onClick={() => setOpen((o) => !o)} size="icon" className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-xl">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}

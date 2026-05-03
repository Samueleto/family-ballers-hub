import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_public/membership")({
  head: () => ({ meta: [{ title: "Membership — Family Ballers" }, { name: "description", content: "How to become a member of Family Ballers Club." }]}),
  component: () => (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">Membership</h1>
      <p className="mt-2 text-muted-foreground">Join a brotherhood that grows together.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card><CardContent className="p-6">
          <h3 className="text-xl font-bold">Member Benefits</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Brotherhood & networking","Welfare support for life events","Access to club facilities","Annual gala & retreats","Vote on club decisions","Charity participation"].map(b => (
              <li key={b} className="flex gap-2"><Check className="h-4 w-4 text-success" /> {b}</li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-primary/5 p-4">
            <p className="text-xs text-muted-foreground">One-time fee</p>
            <p className="text-2xl font-bold">₦50,000</p>
            <p className="text-xs text-muted-foreground">+ ₦5,000 monthly dues</p>
          </div>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h3 className="text-xl font-bold">Apply Now</h3>
          <form onSubmit={(e)=>{e.preventDefault(); toast.success("Application submitted (UI placeholder)");}} className="mt-4 space-y-3">
            <div><Label>Full name</Label><Input required /></div>
            <div><Label>Email</Label><Input type="email" required /></div>
            <div><Label>Phone</Label><Input required /></div>
            <div><Label>Referred by (member name)</Label><Input /></div>
            <div><Label>Why join?</Label><Textarea rows={3} /></div>
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </CardContent></Card>
      </div>
    </div>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_public/contact")({
  head: () => ({ meta: [{ title: "Contact — Family Ballers" }, { name: "description", content: "Get in touch with Family Ballers Club." }]}),
  component: () => (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card><CardContent className="p-6 space-y-4">
          <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Address</p><p className="text-sm text-muted-foreground">12 Allen Avenue, Ikeja, Lagos</p></div></div>
          <div className="flex gap-3"><Phone className="h-5 w-5 text-primary" /><div><p className="font-medium">Phone</p><p className="text-sm text-muted-foreground">+234 803 555 0000</p></div></div>
          <div className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="font-medium">Email</p><p className="text-sm text-muted-foreground">hello@familyballers.ng</p></div></div>
          <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-sm">[Map placeholder]</div>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <form onSubmit={(e)=>{e.preventDefault(); toast.success("Message sent (UI placeholder)");}} className="space-y-3">
            <div><Label>Name</Label><Input required /></div>
            <div><Label>Email</Label><Input type="email" required /></div>
            <div><Label>Subject</Label><Input /></div>
            <div><Label>Message</Label><Textarea rows={5} required /></div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent></Card>
      </div>
    </div>
  ),
});

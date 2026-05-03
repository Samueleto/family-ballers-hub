import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ME } from "@/lib/dummy-data";
import { toast } from "sonner";

export const Route = createFileRoute("/portal/profile")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="My Profile" />
    <Card><CardContent className="p-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20"><AvatarFallback className="bg-primary text-primary-foreground text-xl">{ME.initials}</AvatarFallback></Avatar>
        <div><p className="text-xl font-bold">{ME.name}</p><p className="text-primary">{ME.role}</p><p className="text-xs text-muted-foreground">Member since {new Date(ME.joined).getFullYear()}</p></div>
      </div>
      <form onSubmit={(e)=>{e.preventDefault(); toast.success("Profile saved (UI placeholder)");}} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><Label>Full name</Label><Input defaultValue={ME.name} /></div>
        <div><Label>Email</Label><Input defaultValue={ME.email} /></div>
        <div><Label>Phone</Label><Input defaultValue={ME.phone} /></div>
        <div><Label>Address</Label><Input defaultValue="12 Allen Avenue, Lagos" /></div>
        <div className="sm:col-span-2"><Button type="submit">Save Changes</Button></div>
      </form>
    </CardContent></Card>
  </div>
)});

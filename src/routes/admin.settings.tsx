import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CLUB } from "@/lib/dummy-data";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/settings")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Settings" />
    <Tabs defaultValue="club"><TabsList><TabsTrigger value="club">Club Info</TabsTrigger><TabsTrigger value="fees">Fees</TabsTrigger><TabsTrigger value="roles">Roles</TabsTrigger></TabsList>
      <TabsContent value="club"><Card><CardContent className="p-6 grid gap-4 sm:grid-cols-2 max-w-3xl">
        <div><Label>Club name</Label><Input defaultValue={CLUB.name} /></div>
        <div><Label>Tagline</Label><Input defaultValue={CLUB.tagline} /></div>
        <div><Label>Founded</Label><Input defaultValue={CLUB.founded.toString()} /></div>
        <div><Label>Motto</Label><Input defaultValue={CLUB.motto} /></div>
        <div className="sm:col-span-2"><Button onClick={()=>toast.success("Saved")}>Save</Button></div>
      </CardContent></Card></TabsContent>
      <TabsContent value="fees"><Card><CardContent className="p-6 grid gap-4 sm:grid-cols-2 max-w-3xl">
        <div><Label>Monthly dues (₦)</Label><Input type="number" defaultValue="5000" /></div>
        <div><Label>Registration fee (₦)</Label><Input type="number" defaultValue="50000" /></div>
        <div><Label>Lateness fee per minute (₦)</Label><Input type="number" defaultValue="50" /></div>
        <div><Label>Default fine (₦)</Label><Input type="number" defaultValue="2500" /></div>
        <div className="sm:col-span-2"><Button onClick={()=>toast.success("Saved")}>Save</Button></div>
      </CardContent></Card></TabsContent>
      <TabsContent value="roles"><Card><CardContent className="p-6 max-w-3xl">
        <table className="w-full text-sm"><thead className="border-b"><tr><th className="text-left py-2">Permission</th><th className="text-center">Member</th><th className="text-center">Treasurer</th><th className="text-center">Super Admin</th></tr></thead>
        <tbody>{["View own balance","Submit payments","Approve payments","Manage members","Manage fines","Edit settings","Issue receipts"].map(p => (
          <tr key={p} className="border-b"><td className="py-2">{p}</td><td className="text-center"><Switch defaultChecked={p==="View own balance"||p==="Submit payments"} /></td><td className="text-center"><Switch defaultChecked={p!=="Manage members"&&p!=="Edit settings"} /></td><td className="text-center"><Switch defaultChecked /></td></tr>
        ))}</tbody></table>
      </CardContent></Card></TabsContent>
    </Tabs>
  </div>
)});

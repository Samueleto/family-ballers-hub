import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REVENUE_SERIES, EXPENSE_BREAKDOWN, MEMBERS } from "@/lib/dummy-data";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from "recharts";
import { formatNaira } from "@/lib/format";

const memberGrowth = [{y:"2020",m:60},{y:"2021",m:75},{y:"2022",m:88},{y:"2023",m:99},{y:"2024",m:110},{y:"2025",m:120}];
const topDebtors = MEMBERS.filter(m=>m.outstanding>0).sort((a,b)=>b.outstanding-a.outstanding).map(m=>({name:m.name.split(" ")[0],amt:m.outstanding}));

export const Route = createFileRoute("/admin/reports")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Reports & Charts" />
    <div className="grid gap-6 lg:grid-cols-2">
      <Card><CardHeader><CardTitle>Dues Collection Trend</CardTitle></CardHeader><CardContent className="h-72">
        <ResponsiveContainer><LineChart data={REVENUE_SERIES}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="month" fontSize={12} /><YAxis fontSize={12} tickFormatter={v=>`₦${v/1000}k`} /><Tooltip formatter={(v:number)=>formatNaira(v)} /><Legend /><Line type="monotone" dataKey="income" stroke="hsl(150 60% 45%)" strokeWidth={2} /></LineChart></ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Expense by Category</CardTitle></CardHeader><CardContent className="h-72">
        <ResponsiveContainer><BarChart data={EXPENSE_BREAKDOWN}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="name" fontSize={12} /><YAxis fontSize={12} tickFormatter={v=>`₦${v/1000}k`} /><Tooltip formatter={(v:number)=>formatNaira(v)} /><Bar dataKey="value" fill="hsl(150 60% 45%)" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Top Debtors</CardTitle></CardHeader><CardContent className="h-72">
        <ResponsiveContainer><BarChart data={topDebtors} layout="vertical"><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis type="number" fontSize={12} tickFormatter={v=>`₦${v/1000}k`} /><YAxis dataKey="name" type="category" fontSize={12} width={70} /><Tooltip formatter={(v:number)=>formatNaira(v)} /><Bar dataKey="amt" fill="hsl(0 70% 60%)" radius={[0,4,4,0]} /></BarChart></ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Member Growth</CardTitle></CardHeader><CardContent className="h-72">
        <ResponsiveContainer><LineChart data={memberGrowth}><CartesianGrid strokeDasharray="3 3" opacity={0.3} /><XAxis dataKey="y" fontSize={12} /><YAxis fontSize={12} /><Tooltip /><Line type="monotone" dataKey="m" stroke="hsl(150 60% 45%)" strokeWidth={2} dot={{r:4}} /></LineChart></ResponsiveContainer>
      </CardContent></Card>
    </div>
  </div>
)});

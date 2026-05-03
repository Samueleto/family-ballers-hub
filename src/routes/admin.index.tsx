import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CLUB_FINANCE, REVENUE_SERIES, EXPENSE_BREAKDOWN, PENDING_APPROVALS } from "@/lib/dummy-data";
import { formatNaira } from "@/lib/format";
import { Wallet, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, CartesianGrid, Legend } from "recharts";
import { MoneyText } from "@/components/common/MoneyText";

const COLORS = ["hsl(150 60% 45%)","hsl(170 50% 55%)","hsl(40 80% 60%)","hsl(0 70% 60%)"];

export const Route = createFileRoute("/admin/")({ component: Overview });

function Overview() {
  return (
    <div className="space-y-6">
      <PageHeader title="Financial Overview" description="Snapshot of club finances" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Club Balance" value={formatNaira(CLUB_FINANCE.balance)} icon={Wallet} tone="success" />
        <StatCard label="Income YTD" value={formatNaira(CLUB_FINANCE.incomeYTD)} icon={TrendingUp} tone="success" />
        <StatCard label="Expenses YTD" value={formatNaira(CLUB_FINANCE.expenseYTD)} icon={TrendingDown} />
        <StatCard label="Outstanding" value={formatNaira(CLUB_FINANCE.outstanding)} icon={AlertCircle} tone="destructive" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Income vs Expense</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_SERIES}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" fontSize={12} /><YAxis fontSize={12} tickFormatter={v=>`₦${v/1000}k`} />
                <Tooltip formatter={(v:number)=>formatNaira(v)} />
                <Legend />
                <Area type="monotone" dataKey="income" stroke="hsl(150 60% 45%)" fill="hsl(150 60% 45% / 0.2)" />
                <Area type="monotone" dataKey="expense" stroke="hsl(0 70% 60%)" fill="hsl(0 70% 60% / 0.15)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Expense Breakdown</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={EXPENSE_BREAKDOWN} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {EXPENSE_BREAKDOWN.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v:number)=>formatNaira(v)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader><CardTitle>Pending Approvals ({PENDING_APPROVALS.length})</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {PENDING_APPROVALS.slice(0,3).map(p => (
            <div key={p.id} className="flex justify-between border-b pb-2 last:border-0">
              <div><p className="text-sm font-medium">{p.member}</p><p className="text-xs text-muted-foreground">{p.type}</p></div>
              <MoneyText amount={p.amount} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

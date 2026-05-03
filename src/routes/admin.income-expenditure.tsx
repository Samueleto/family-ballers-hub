import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ExportButtons } from "@/components/common/ExportButtons";
import { Card, CardContent } from "@/components/ui/card";
import { CLUB_FINANCE, EXPENSE_BREAKDOWN } from "@/lib/dummy-data";
import { formatNaira } from "@/lib/format";

const income = [
  { item: "Monthly dues collected", amount: 3120000 },
  { item: "Occasion contributions", amount: 2450000 },
  { item: "Registration fees", amount: 600000 },
  { item: "Fines & lateness fees", amount: 285000 },
  { item: "Donations & pledges", amount: 385000 },
];

export const Route = createFileRoute("/admin/income-expenditure")({ component: () => (
  <div className="space-y-6">
    <PageHeader title="Income & Expenditure Statement" description="January – October 2025" actions={<ExportButtons name="income-expenditure" />} />
    <Card><CardContent className="p-6">
      <h2 className="text-lg font-bold border-b pb-2">Income</h2>
      <table className="mt-3 w-full text-sm"><tbody>
        {income.map(i => (<tr key={i.item} className="border-b"><td className="py-2">{i.item}</td><td className="py-2 text-right tabular-nums">{formatNaira(i.amount)}</td></tr>))}
        <tr className="font-bold"><td className="py-2">Total Income</td><td className="py-2 text-right text-success">{formatNaira(CLUB_FINANCE.incomeYTD)}</td></tr>
      </tbody></table>
      <h2 className="mt-8 text-lg font-bold border-b pb-2">Expenditure</h2>
      <table className="mt-3 w-full text-sm"><tbody>
        {EXPENSE_BREAKDOWN.map(e => (<tr key={e.name} className="border-b"><td className="py-2">{e.name}</td><td className="py-2 text-right tabular-nums">{formatNaira(e.value)}</td></tr>))}
        <tr className="font-bold"><td className="py-2">Total Expenditure</td><td className="py-2 text-right text-destructive">{formatNaira(CLUB_FINANCE.expenseYTD)}</td></tr>
      </tbody></table>
      <div className="mt-8 rounded-lg bg-success/10 p-4 flex justify-between font-bold"><span>Net Surplus</span><span className="text-success text-xl">{formatNaira(CLUB_FINANCE.incomeYTD - CLUB_FINANCE.expenseYTD)}</span></div>
    </CardContent></Card>
  </div>
)});

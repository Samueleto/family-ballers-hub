import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const map: Record<string, { label: string; cls: string }> = {
  approved: { label: "Paid", cls: "bg-success/15 text-success border-success/30" },
  paid: { label: "Paid", cls: "bg-success/15 text-success border-success/30" },
  pending: { label: "Pending", cls: "bg-warning/15 text-warning border-warning/30" },
  partial: { label: "Partial", cls: "bg-warning/15 text-warning border-warning/30" },
  unpaid: { label: "Unpaid", cls: "bg-destructive/10 text-destructive border-destructive/30" },
  overdue: { label: "Overdue", cls: "bg-destructive/10 text-destructive border-destructive/30" },
  rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive border-destructive/30" },
};

export function StatusBadge({ status }: { status: string }) {
  const cfg = map[status.toLowerCase()] ?? { label: status, cls: "" };
  return (
    <Badge variant="outline" className={cn("font-medium capitalize", cfg.cls)}>
      {cfg.label}
    </Badge>
  );
}
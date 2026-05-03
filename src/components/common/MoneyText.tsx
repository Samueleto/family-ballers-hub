import { cn } from "@/lib/utils";
import { formatNaira } from "@/lib/format";

type Props = {
  amount: number;
  variant?: "default" | "outstanding" | "income";
  className?: string;
};

export function MoneyText({ amount, variant = "default", className }: Props) {
  const color =
    variant === "outstanding" || amount < 0
      ? "text-destructive"
      : variant === "income"
        ? "text-success"
        : "";
  return <span className={cn("font-semibold tabular-nums", color, className)}>{formatNaira(amount)}</span>;
}
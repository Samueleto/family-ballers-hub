export const NAIRA = "₦";

export function formatNaira(amount: number): string {
  const sign = amount < 0 ? "-" : "";
  const abs = Math.abs(amount);
  return `${sign}${NAIRA}${abs.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;
}

export function formatDate(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-NG", { year: "numeric", month: "short", day: "numeric" });
}
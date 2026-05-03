import { Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";

export function Logo({ to = "/" }: { to?: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 font-bold text-lg">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Trophy className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        Family <span className="text-primary">Ballers</span>
      </span>
    </Link>
  );
}
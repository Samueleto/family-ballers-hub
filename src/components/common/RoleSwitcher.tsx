import { useRole, type Role } from "@/lib/role-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const labels: Record<Role, string> = {
  public: "Public Visitor",
  member: "Member",
  treasurer: "Treasurer",
  admin: "Super Admin",
};

export function RoleSwitcher() {
  const { role, setRole } = useRole();
  return (
    <Select
      value={role}
      onValueChange={(v) => {
        const r = v as Role;
        setRole(r);
        const dest = r === "public" ? "/" : r === "member" ? "/portal" : "/admin";
        window.location.href = dest;
      }}
    >
      <SelectTrigger className="h-8 w-[170px] text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {(Object.keys(labels) as Role[]).map((r) => (
          <SelectItem key={r} value={r} className="text-xs">View as: {labels[r]}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

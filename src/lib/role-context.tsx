import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "public" | "member" | "treasurer" | "admin";

type Ctx = {
  role: Role;
  setRole: (r: Role) => void;
};

const RoleContext = createContext<Ctx>({ role: "member", setRole: () => {} });

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("member");
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
}

export const useRole = () => useContext(RoleContext);
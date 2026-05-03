import { Outlet } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, type NavGroup } from "./AppSidebar";
import { RoleSwitcher } from "@/components/common/RoleSwitcher";
import { NotificationBell } from "@/components/common/NotificationBell";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutDashboard, Grid3x3, Coins, AlertTriangle, Clock, UserX, Receipt,
  ClipboardCheck, Users, BarChart3, FileText, Settings, FileSignature, BadgeDollarSign, ScrollText,
} from "lucide-react";

const groups: NavGroup[] = [
  { label: "Overview", items: [
    { to: "/admin", label: "Financial Overview", icon: LayoutDashboard },
    { to: "/admin/reports", label: "Reports & Charts", icon: BarChart3 },
    { to: "/admin/income-expenditure", label: "Income & Expenditure", icon: ScrollText },
  ]},
  { label: "Collections", items: [
    { to: "/admin/dues-grid", label: "Monthly Dues Grid", icon: Grid3x3 },
    { to: "/admin/contributions", label: "Contributions", icon: Coins },
    { to: "/admin/fines", label: "Fines", icon: AlertTriangle },
    { to: "/admin/lateness", label: "Lateness Fees", icon: Clock },
    { to: "/admin/registration-fees", label: "Registration Fees", icon: BadgeDollarSign },
    { to: "/admin/pledges", label: "Constitution Pledges", icon: FileSignature },
  ]},
  { label: "Operations", items: [
    { to: "/admin/payment-approvals", label: "Payment Approvals", icon: ClipboardCheck },
    { to: "/admin/debtors", label: "Debtors List", icon: UserX },
    { to: "/admin/debt-redemption", label: "Debt Redemption", icon: Receipt },
    { to: "/admin/members", label: "Members", icon: Users },
    { to: "/admin/documents", label: "Documents", icon: FileText },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ]},
];

export function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar groups={groups} />
        <div className="flex flex-1 flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background/90 px-3 backdrop-blur">
            <SidebarTrigger />
            <div className="hidden sm:block"><p className="text-sm font-semibold">Admin Console</p></div>
            <div className="flex-1" />
            <RoleSwitcher />
            <NotificationBell />
            <div className="flex items-center gap-2 border-l pl-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">BA</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-xs font-medium leading-tight">Bisi Adeyemi</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Super Admin</p>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6"><Outlet /></main>
        </div>
      </div>
    </SidebarProvider>
  );
}

import { Outlet } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, type NavGroup } from "./AppSidebar";
import { RoleSwitcher } from "@/components/common/RoleSwitcher";
import { NotificationBell } from "@/components/common/NotificationBell";
import { ChatbotWidget } from "@/components/common/ChatbotWidget";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ME } from "@/lib/dummy-data";
import {
  LayoutDashboard, Calendar, Coins, Users, MessageSquare, Lock, FileText, User,
  Upload, History, AlertTriangle, Clock, CalendarDays,
} from "lucide-react";

const groups: NavGroup[] = [
  { label: "Overview", items: [
    { to: "/portal", label: "Dashboard", icon: LayoutDashboard },
    { to: "/portal/occasions", label: "Occasions", icon: CalendarDays },
    { to: "/portal/directory", label: "Member Directory", icon: Users },
  ]},
  { label: "Finance", items: [
    { to: "/portal/dues", label: "Monthly Dues", icon: Calendar },
    { to: "/portal/contributions", label: "Contributions", icon: Coins },
    { to: "/portal/fines", label: "Fines", icon: AlertTriangle },
    { to: "/portal/lateness", label: "Lateness Fees", icon: Clock },
    { to: "/portal/submit-payment", label: "Submit Payment", icon: Upload },
    { to: "/portal/payments", label: "Payment History", icon: History },
  ]},
  { label: "Community", items: [
    { to: "/portal/chat/group", label: "Group Chat", icon: MessageSquare },
    { to: "/portal/chat/private", label: "Private Chat", icon: Lock },
    { to: "/portal/documents", label: "Documents", icon: FileText },
    { to: "/portal/profile", label: "Profile", icon: User },
  ]},
];

export function PortalLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar groups={groups} />
        <div className="flex flex-1 flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background/90 px-3 backdrop-blur">
            <SidebarTrigger />
            <div className="flex-1" />
            <RoleSwitcher />
            <NotificationBell />
            <div className="flex items-center gap-2 border-l pl-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">{ME.initials}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-xs font-medium leading-tight">{ME.name}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{ME.role}</p>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6"><Outlet /></main>
        </div>
        <ChatbotWidget mode="portal" />
      </div>
    </SidebarProvider>
  );
}

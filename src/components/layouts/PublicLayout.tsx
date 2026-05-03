import { Outlet, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/common/Logo";
import { RoleSwitcher } from "@/components/common/RoleSwitcher";
import { ChatbotWidget } from "@/components/common/ChatbotWidget";
import { Menu, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/charity", label: "Charity" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

export function PublicLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.to}
                href={n.to}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted",
                  path === n.to && "bg-primary/10 text-primary"
                )}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><RoleSwitcher /></div>
            <a href="/portal" className="hidden sm:block">
              <Button size="sm">Member Login</Button>
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="border-b p-4"><Logo /></div>
                <nav className="flex flex-col p-2">
                  {NAV.map((n) => (
                    <a
                      key={n.to}
                      href={n.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                        path === n.to && "bg-primary/10 text-primary"
                      )}
                    >
                      {n.label}
                    </a>
                  ))}
                  <div className="mt-3 border-t p-2"><RoleSwitcher /></div>
                  <a href="/portal" onClick={() => setOpen(false)} className="mt-2 block">
                    <Button className="w-full" size="sm">Member Login</Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="mt-12 border-t bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">Brotherhood. Charity. Excellence. Serving our community since 2014.</p>
            <div className="mt-3 flex gap-2">
              <a href="#" className="rounded-md border p-2 hover:bg-muted"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="rounded-md border p-2 hover:bg-muted"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="rounded-md border p-2 hover:bg-muted"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.slice(0, 4).map((n) => <li key={n.to}><a href={n.to} className="hover:text-primary">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">More</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.slice(4).map((n) => <li key={n.to}><a href={n.to} className="hover:text-primary">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 12 Allen Avenue, Ikeja, Lagos</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> +234 803 555 0000</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> hello@familyballers.ng</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Family Ballers Club. All rights reserved.
        </div>
      </footer>

      <ChatbotWidget mode="public" />
    </div>
  );
}
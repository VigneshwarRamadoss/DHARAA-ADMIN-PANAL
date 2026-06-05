import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Image as ImageIcon,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import { memo } from "react";

const nav = [
  { to: "/", label: "Overview", icon: LayoutDashboard, badge: null },
  { to: "/orders", label: "Orders", icon: ShoppingBag, badge: "24" },
  { to: "/products", label: "Catalogue", icon: Package, badge: null },
  { to: "/customers", label: "Customers", icon: Users, badge: null },
  { to: "/content", label: "Content", icon: ImageIcon, badge: null },
  { to: "/settings", label: "Settings", icon: Settings, badge: null },
] as const;

function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden lg:flex w-[244px] shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="px-6 py-7 border-b border-sidebar-border">
        <div className="wordmark text-[18px] text-sidebar-foreground">DHARAA</div>
        <div className="eyebrow mt-1 text-sidebar-foreground/50">Admin Console</div>
      </div>
      <nav className="flex-1 px-3 py-6 space-y-0.5">
        <div className="eyebrow px-3 pb-3 text-sidebar-foreground/40">Workspace</div>
        {nav.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`group flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-sidebar-primary pl-[10px]"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] tabular px-1.5 py-0.5 bg-sidebar-primary/15 text-sidebar-primary rounded-sm">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="m-3 p-4 bg-sidebar-accent/40 border border-sidebar-border">
        <div className="eyebrow text-sidebar-primary mb-1">Live</div>
        <div className="text-xs text-sidebar-foreground/70 leading-relaxed">
          Store is live. 14 orders awaiting fulfilment.
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-20 flex items-center px-6 gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        <input
          type="search"
          placeholder="Search orders, products, customers…"
          className="w-full h-9 pl-10 pr-3 bg-secondary border border-transparent focus:border-foreground focus:bg-cream text-sm outline-none transition-colors"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground tabular border border-border px-1.5 py-0.5">
          ⌘K
        </kbd>
      </div>
      <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Notifications">
        <Bell className="h-4 w-4" strokeWidth={1.5} />
        <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-sale" />
      </button>
      <div className="h-6 w-px bg-border" />
      <button className="flex items-center gap-3 group">
        <div className="h-8 w-8 bg-foreground text-background flex items-center justify-center text-xs font-medium">AR</div>
        <div className="text-left hidden md:block">
          <div className="text-xs font-medium leading-tight">Aanya Raj</div>
          <div className="text-[11px] text-muted-foreground leading-tight">Store Manager</div>
        </div>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
      </button>
    </header>
  );
}

export const AdminShell = memo(function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 px-6 lg:px-10 py-8">{children}</main>
      </div>
    </div>
  );
});

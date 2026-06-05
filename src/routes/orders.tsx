import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Button, Status } from "@/components/admin/ui";
import { Filter, Download, Search } from "lucide-react";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Orders — DHARAA Admin" },
      { name: "description", content: "All orders across the DHARAA storefront with payment, fulfilment, and shipping status." },
    ],
  }),
  component: Orders,
});

const orders = [
  { id: "DH-24081", customer: "Priya Mehta", email: "priya.m@gmail.com", items: 2, total: "₹ 48,200", payment: "PAID", status: "PROCESSING", date: "04 Jun, 11:42" },
  { id: "DH-24080", customer: "Rohan Kapoor", email: "rohan@kapoor.in", items: 1, total: "₹ 12,500", payment: "PAID", status: "CONFIRMED", date: "04 Jun, 11:20" },
  { id: "DH-24079", customer: "Anika Sharma", email: "anika.s@outlook.com", items: 3, total: "₹ 1,02,000", payment: "PAID", status: "SHIPPED", date: "04 Jun, 10:48" },
  { id: "DH-24078", customer: "Vikram Joshi", email: "vj.studio@gmail.com", items: 1, total: "₹ 7,800", payment: "PENDING_PAYMENT", status: "PENDING_PAYMENT", date: "04 Jun, 09:55" },
  { id: "DH-24077", customer: "Meera Iyer", email: "meera@iyer.co", items: 2, total: "₹ 34,500", payment: "PAID", status: "DELIVERED", date: "04 Jun, 08:30" },
  { id: "DH-24076", customer: "Kabir Singh", email: "kabir.singh@gmail.com", items: 1, total: "₹ 18,900", payment: "REFUNDED", status: "CANCELLED", date: "03 Jun, 22:14" },
  { id: "DH-24075", customer: "Ishaan Verma", email: "ishaan.v@gmail.com", items: 4, total: "₹ 86,400", payment: "PAID", status: "SHIPPED", date: "03 Jun, 19:02" },
  { id: "DH-24074", customer: "Nisha Pillai", email: "nisha@pillai.studio", items: 1, total: "₹ 14,200", payment: "PAID", status: "DELIVERED", date: "03 Jun, 17:38" },
  { id: "DH-24073", customer: "Arjun Nair", email: "arjun.n@hey.com", items: 2, total: "₹ 27,650", payment: "PAID", status: "PROCESSING", date: "03 Jun, 14:11" },
];

const tabs = [
  { label: "All", count: 142 },
  { label: "Awaiting fulfilment", count: 24 },
  { label: "Shipped", count: 18 },
  { label: "Delivered", count: 86 },
  { label: "Returns", count: 4 },
] as const;

function Orders() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="Commerce"
        title="Orders"
        description="142 orders across the last 7 days. 24 still need fulfilment — pickup window closes at 17:00."
        actions={
          <>
            <Button variant="ghost" size="sm"><Download className="h-3.5 w-3.5" />Export CSV</Button>
            <Button variant="primary" size="sm">Manual order</Button>
          </>
        }
      />

      {/* Tabs + filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-1 -ml-3">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              className={`px-3 py-1.5 text-xs flex items-center gap-2 transition-colors ${
                i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{t.label}</span>
              <span className={`tabular text-[10px] px-1.5 py-0.5 ${i === 0 ? "bg-foreground text-background" : "bg-secondary"}`}>
                {t.count}
              </span>
              {i === 0 && <span className="absolute -bottom-1.5 left-3 right-3 h-px bg-foreground" />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
            <input
              type="search"
              placeholder="Order ID, customer, email…"
              className="h-9 w-72 pl-9 pr-3 bg-secondary text-sm border border-transparent focus:border-foreground focus:bg-cream outline-none"
            />
          </div>
          <Button variant="outline" size="sm"><Filter className="h-3.5 w-3.5" />Filters</Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="text-left text-[10px] tracking-[0.18em] uppercase text-muted-foreground border-b border-border bg-secondary/40">
              <th className="px-6 py-3 font-medium w-8"><input type="checkbox" className="accent-foreground" /></th>
              <th className="py-3 font-medium">Order</th>
              <th className="py-3 font-medium">Customer</th>
              <th className="py-3 font-medium">Items</th>
              <th className="py-3 font-medium tabular">Total</th>
              <th className="py-3 font-medium">Payment</th>
              <th className="py-3 font-medium">Fulfilment</th>
              <th className="px-6 py-3 font-medium text-right">Placed</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-border/60 last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4"><input type="checkbox" className="accent-foreground" /></td>
                <td className="py-4 font-mono text-xs">{o.id}</td>
                <td className="py-4">
                  <div className="font-medium">{o.customer}</div>
                  <div className="text-xs text-muted-foreground">{o.email}</div>
                </td>
                <td className="py-4 text-muted-foreground tabular">{o.items}</td>
                <td className="py-4 tabular font-medium">{o.total}</td>
                <td className="py-4"><Status value={o.payment} /></td>
                <td className="py-4"><Status value={o.status} /></td>
                <td className="px-6 py-4 text-right text-muted-foreground text-xs tabular">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 flex items-center justify-between border-t border-border text-xs text-muted-foreground">
          <span className="tabular">Showing 9 of 142</span>
          <div className="flex gap-1">
            <button className="px-2.5 py-1 hover:text-foreground">Previous</button>
            <button className="px-2.5 py-1 bg-foreground text-background tabular">1</button>
            <button className="px-2.5 py-1 hover:text-foreground tabular">2</button>
            <button className="px-2.5 py-1 hover:text-foreground tabular">3</button>
            <button className="px-2.5 py-1 hover:text-foreground">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

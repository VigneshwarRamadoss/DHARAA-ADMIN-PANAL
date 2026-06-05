import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Button, Status } from "@/components/admin/ui";
import { ArrowUpRight, Download, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overview — DHARAA Admin" },
      { name: "description", content: "Daily pulse: revenue, orders, fulfilment, and customer signals across DHARAA." },
    ],
  }),
  component: Overview,
});

const recentOrders = [
  { id: "DH-24081", customer: "Priya Mehta", items: 2, total: "₹ 48,200", status: "PROCESSING", time: "12m ago" },
  { id: "DH-24080", customer: "Rohan Kapoor", items: 1, total: "₹ 12,500", status: "CONFIRMED", time: "34m ago" },
  { id: "DH-24079", customer: "Anika Sharma", items: 3, total: "₹ 1,02,000", status: "SHIPPED", time: "1h ago" },
  { id: "DH-24078", customer: "Vikram Joshi", items: 1, total: "₹ 7,800", status: "PENDING_PAYMENT", time: "2h ago" },
  { id: "DH-24077", customer: "Meera Iyer", items: 2, total: "₹ 34,500", status: "DELIVERED", time: "3h ago" },
  { id: "DH-24076", customer: "Kabir Singh", items: 1, total: "₹ 18,900", status: "CANCELLED", time: "4h ago" },
];

const topPieces = [
  { name: "Ananta Diamond Choker", sold: 14, revenue: "₹ 18.2L" },
  { name: "Rivaa Stackable Bands (Set of 3)", sold: 38, revenue: "₹ 9.4L" },
  { name: "Saanjh Polki Earrings", sold: 11, revenue: "₹ 7.8L" },
  { name: "Niyati Pearl Drop", sold: 27, revenue: "₹ 5.1L" },
];

function Overview() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="Friday · 04 June 2026"
        title="Good morning, Aanya."
        description="Revenue is pacing 12% above forecast. Three orders flagged for verification — review them before noon."
        actions={
          <>
            <Button variant="ghost" size="sm"><Download className="h-3.5 w-3.5" />Export</Button>
            <Button variant="primary" size="sm">New Order <ArrowUpRight className="h-3.5 w-3.5" /></Button>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-10">
        <Stat label="Gross Revenue · 24h" value="₹ 8.42L" delta={{ value: "12.4%", positive: true }} hint="vs. ₹ 7.49L yesterday" />
        <Stat label="Orders" value="142" delta={{ value: "8.1%", positive: true }} hint="24 awaiting fulfilment" />
        <Stat label="Avg. Order Value" value="₹ 7,920" delta={{ value: "3.2%", positive: true }} hint="Target ₹ 7,500" />
        <Stat label="Cart Abandon" value="61.3%" delta={{ value: "1.8%", positive: false }} hint="Below 65% target" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-px bg-border">
        {/* Revenue chart */}
        <div className="xl:col-span-2 bg-card p-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="eyebrow mb-2">Revenue · last 14 days</div>
              <div className="font-serif text-3xl tabular">₹ 1.14 Cr</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground">
              <TrendingUp className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="tabular">+18.6% MoM</span>
            </div>
          </div>
          <RevenueChart />
        </div>

        {/* Top pieces */}
        <div className="bg-card p-8">
          <div className="eyebrow mb-6">Top pieces · this week</div>
          <ol className="space-y-5">
            {topPieces.map((p, i) => (
              <li key={p.name} className="flex items-start gap-4">
                <span className="font-serif text-2xl text-muted-foreground tabular w-6">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 tabular">{p.sold} sold · {p.revenue}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Recent orders */}
      <div className="mt-10 bg-card border border-border">
        <div className="px-8 py-6 flex items-center justify-between border-b border-border">
          <div>
            <div className="eyebrow mb-1">Live queue</div>
            <h2 className="font-serif text-2xl">Recent orders</h2>
          </div>
          <Button variant="ghost" size="sm">View all <ArrowUpRight className="h-3.5 w-3.5" /></Button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] tracking-[0.18em] uppercase text-muted-foreground border-b border-border">
              <th className="px-8 py-3 font-medium">Order</th>
              <th className="py-3 font-medium">Customer</th>
              <th className="py-3 font-medium">Items</th>
              <th className="py-3 font-medium tabular">Total</th>
              <th className="py-3 font-medium">Status</th>
              <th className="px-8 py-3 font-medium text-right">Placed</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((o) => (
              <tr key={o.id} className="border-b border-border/60 last:border-0 hover:bg-secondary/50 transition-colors">
                <td className="px-8 py-4 font-mono text-xs">{o.id}</td>
                <td className="py-4">{o.customer}</td>
                <td className="py-4 text-muted-foreground tabular">{o.items}</td>
                <td className="py-4 tabular font-medium">{o.total}</td>
                <td className="py-4"><Status value={o.status} /></td>
                <td className="px-8 py-4 text-right text-muted-foreground text-xs tabular">{o.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RevenueChart() {
  const data = [42, 51, 38, 64, 58, 71, 66, 82, 74, 89, 78, 94, 88, 102];
  const max = Math.max(...data);
  const w = 600;
  const h = 180;
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - (v / max) * h]);
  const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-44" preserveAspectRatio="none">
      <defs>
        <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#rev)" />
      <path d={path} fill="none" stroke="var(--color-foreground)" strokeWidth="1.25" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 3.5 : 0} fill="var(--color-foreground)" />
      ))}
    </svg>
  );
}

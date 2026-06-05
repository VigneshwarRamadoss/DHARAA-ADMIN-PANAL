import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Button } from "@/components/admin/ui";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — DHARAA Admin" },
      { name: "description", content: "Customer relationships, lifetime value, and engagement signals." },
    ],
  }),
  component: Customers,
});

const customers = [
  { name: "Priya Mehta", email: "priya.m@gmail.com", phone: "+91 98201 12345", city: "Mumbai", orders: 8, ltv: "₹ 3,84,200", segment: "VIP", last: "Today" },
  { name: "Anika Sharma", email: "anika.s@outlook.com", phone: "+91 99203 44521", city: "Delhi", orders: 12, ltv: "₹ 6,12,400", segment: "VIP", last: "Today" },
  { name: "Rohan Kapoor", email: "rohan@kapoor.in", phone: "+91 98765 31201", city: "Bengaluru", orders: 3, ltv: "₹ 48,500", segment: "Returning", last: "1d" },
  { name: "Meera Iyer", email: "meera@iyer.co", phone: "+91 90412 88123", city: "Chennai", orders: 5, ltv: "₹ 1,72,800", segment: "Returning", last: "1d" },
  { name: "Ishaan Verma", email: "ishaan.v@gmail.com", phone: "+91 98103 22910", city: "Gurugram", orders: 7, ltv: "₹ 4,28,900", segment: "VIP", last: "2d" },
  { name: "Nisha Pillai", email: "nisha@pillai.studio", phone: "+91 99001 87234", city: "Kochi", orders: 2, ltv: "₹ 36,500", segment: "New", last: "3d" },
  { name: "Vikram Joshi", email: "vj.studio@gmail.com", phone: "+91 98223 11005", city: "Pune", orders: 1, ltv: "₹ 7,800", segment: "New", last: "5h" },
];

function Customers() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="Relationships"
        title="Customers"
        description="2,148 customers · 38% repeat rate this quarter. Reach out to VIPs before the festive drop."
        actions={
          <>
            <Button variant="ghost" size="sm">Segments</Button>
            <Button variant="primary" size="sm">Compose email</Button>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-8">
        <Card label="Total" value="2,148" hint="+128 this month" />
        <Card label="VIP" value="186" hint="LTV ≥ ₹ 2L" />
        <Card label="Returning" value="812" hint="2+ orders" />
        <Card label="Repeat rate" value="38%" hint="Above 35% target" />
      </div>

      <div className="bg-card border border-border overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="text-left text-[10px] tracking-[0.18em] uppercase text-muted-foreground border-b border-border bg-secondary/40">
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="py-3 font-medium">Contact</th>
              <th className="py-3 font-medium">City</th>
              <th className="py-3 font-medium tabular">Orders</th>
              <th className="py-3 font-medium tabular">LTV</th>
              <th className="py-3 font-medium">Segment</th>
              <th className="px-6 py-3 font-medium text-right">Last seen</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-b border-border/60 last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-accent text-foreground flex items-center justify-center text-xs font-medium">
                      {c.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="font-medium">{c.name}</div>
                  </div>
                </td>
                <td className="py-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Mail className="h-3 w-3" strokeWidth={1.5} />{c.email}</div>
                  <div className="flex items-center gap-1.5 mt-0.5 tabular"><Phone className="h-3 w-3" strokeWidth={1.5} />{c.phone}</div>
                </td>
                <td className="py-4 text-muted-foreground">{c.city}</td>
                <td className="py-4 tabular">{c.orders}</td>
                <td className="py-4 tabular font-medium">{c.ltv}</td>
                <td className="py-4">
                  <span className={`text-[10px] tracking-[0.12em] uppercase ${
                    c.segment === "VIP" ? "text-gold" : c.segment === "Returning" ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {c.segment === "VIP" && "★ "}{c.segment}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-muted-foreground text-xs tabular">{c.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="bg-card p-6">
      <div className="eyebrow mb-2">{label}</div>
      <div className="font-serif text-3xl tabular">{value}</div>
      <div className="text-xs text-muted-foreground mt-2">{hint}</div>
    </div>
  );
}

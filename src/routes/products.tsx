import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Button, Status } from "@/components/admin/ui";
import { Plus, LayoutGrid, List } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Catalogue — DHARAA Admin" },
      { name: "description", content: "Manage the DHARAA product catalogue, variants, stock, and pricing." },
    ],
  }),
  component: Products,
});

const products = [
  { sku: "DHR-ANT-001", name: "Ananta Diamond Choker", category: "Necklaces", metal: "18K Gold", price: "₹ 1,82,000", stock: 4, status: "PUBLISHED" },
  { sku: "DHR-RVA-204", name: "Rivaa Stackable Bands (Set of 3)", category: "Rings", metal: "Silver 925", price: "₹ 24,500", stock: 28, status: "PUBLISHED" },
  { sku: "DHR-SNJ-118", name: "Saanjh Polki Earrings", category: "Earrings", metal: "22K Gold", price: "₹ 71,000", stock: 2, status: "LOW" },
  { sku: "DHR-NYT-077", name: "Niyati Pearl Drop", category: "Earrings", metal: "Rose Gold", price: "₹ 18,900", stock: 16, status: "PUBLISHED" },
  { sku: "DHR-VRS-330", name: "Virasat Temple Mangalsutra", category: "Mangalsutra", metal: "22K Gold", price: "₹ 96,500", stock: 6, status: "PUBLISHED" },
  { sku: "DHR-AKR-091", name: "Aakar Geometric Cuff", category: "Bangles", metal: "Silver 925", price: "₹ 14,200", stock: 0, status: "ARCHIVED" },
  { sku: "DHR-MNK-455", name: "Manika Ruby Pendant", category: "Pendants", metal: "18K Gold", price: "₹ 58,700", stock: 9, status: "DRAFT" },
];

function Products() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="Catalogue"
        title="Pieces"
        description="284 published pieces across 12 categories. 6 are running low on stock."
        actions={
          <>
            <Button variant="outline" size="sm">Import</Button>
            <Button variant="primary" size="sm"><Plus className="h-3.5 w-3.5" />New piece</Button>
          </>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-8">
        <Mini label="Published" value="284" />
        <Mini label="Drafts" value="12" />
        <Mini label="Low stock" value="6" tone="alert" />
        <Mini label="Out of stock" value="3" tone="alert" />
      </div>

      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <button className="h-9 px-3 bg-foreground text-background flex items-center gap-2 text-xs"><List className="h-3.5 w-3.5" />Table</button>
          <button className="h-9 px-3 bg-secondary text-muted-foreground flex items-center gap-2 text-xs hover:text-foreground"><LayoutGrid className="h-3.5 w-3.5" />Grid</button>
        </div>
        <div className="flex items-center gap-2">
          <select className="h-9 px-3 bg-secondary text-xs border-0 focus:outline-none">
            <option>All categories</option><option>Necklaces</option><option>Earrings</option><option>Rings</option>
          </select>
          <select className="h-9 px-3 bg-secondary text-xs border-0 focus:outline-none">
            <option>All status</option><option>Published</option><option>Draft</option>
          </select>
        </div>
      </div>

      <div className="bg-card border border-border overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="text-left text-[10px] tracking-[0.18em] uppercase text-muted-foreground border-b border-border bg-secondary/40">
              <th className="px-6 py-3 font-medium w-8"><input type="checkbox" className="accent-foreground" /></th>
              <th className="py-3 font-medium">Piece</th>
              <th className="py-3 font-medium">Category</th>
              <th className="py-3 font-medium">Metal</th>
              <th className="py-3 font-medium tabular">Price</th>
              <th className="py-3 font-medium tabular">Stock</th>
              <th className="px-6 py-3 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sku} className="border-b border-border/60 last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4"><input type="checkbox" className="accent-foreground" /></td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-accent flex items-center justify-center text-[10px] font-serif text-muted-foreground">DH</div>
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">{p.sku}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-muted-foreground">{p.category}</td>
                <td className="py-4 text-muted-foreground">{p.metal}</td>
                <td className="py-4 tabular font-medium">{p.price}</td>
                <td className="py-4 tabular">
                  <span className={p.stock === 0 ? "text-sale" : p.stock < 5 ? "text-sale" : ""}>{p.stock}</span>
                </td>
                <td className="px-6 py-4 text-right"><Status value={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Mini({ label, value, tone }: { label: string; value: string; tone?: "alert" }) {
  return (
    <div className="bg-card p-5">
      <div className="eyebrow mb-2">{label}</div>
      <div className={`font-serif text-3xl tabular ${tone === "alert" ? "text-sale" : ""}`}>{value}</div>
    </div>
  );
}

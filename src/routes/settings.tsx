import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Button } from "@/components/admin/ui";
import { Check } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — DHARAA Admin" },
      { name: "description", content: "Store configuration, taxes, shipping, payments, team, and integrations." },
    ],
  }),
  component: Settings,
});

const sections = [
  { title: "Store profile", items: ["Brand name & contact", "Currency · INR", "Time zone · Asia/Kolkata", "GSTIN & legal"] },
  { title: "Payments", items: ["Razorpay · Connected", "UPI · Enabled", "Cards & Net Banking · Enabled", "COD · Tier-1 cities only"] },
  { title: "Shipping", items: ["Shiprocket · Connected", "5 shipping zones", "Free shipping above ₹ 5,000", "Insurance above ₹ 50,000"] },
  { title: "Taxes", items: ["GST 3% · Gold & Silver", "GST 18% · Fashion jewellery", "Inclusive pricing"] },
  { title: "Notifications", items: ["Resend · Transactional email", "MSG91 · SMS & OTP", "Slack · #orders alerts"] },
  { title: "Team", items: ["4 members", "Roles · Admin, Manager, Support", "SSO · Google Workspace"] },
];

function Settings() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        description="The quiet machinery behind the storefront. Everything here is versioned and audited."
        actions={<Button variant="primary" size="sm">Save changes</Button>}
      />

      {/* Store profile card */}
      <div className="bg-card border border-border p-8 mb-px">
        <div className="eyebrow mb-4">Store profile</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Store name" value="DHARAA" />
          <Field label="Support email" value="care@dharaa.in" />
          <Field label="Phone" value="+91 22 6100 9000" />
          <Field label="GSTIN" value="27AABCD1234E1Z5" />
          <Field label="Registered address" value="14 Bandra Reclamation, Mumbai 400050" full />
        </div>
      </div>

      {/* Sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {sections.slice(1).map((s) => (
          <div key={s.title} className="bg-card p-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif text-xl">{s.title}</h3>
              <button className="text-xs text-muted-foreground hover:text-foreground">Manage →</button>
            </div>
            <ul className="space-y-3">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0" strokeWidth={2} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <div className="eyebrow mb-3 text-sale">Danger zone</div>
        <div className="flex items-center justify-between bg-card border border-sale/30 p-6">
          <div>
            <div className="font-medium">Pause the storefront</div>
            <div className="text-xs text-muted-foreground mt-1">Visitors see a maintenance page. Admin remains accessible.</div>
          </div>
          <Button variant="outline" size="sm">Pause store</Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        defaultValue={value}
        className="w-full h-10 px-3 bg-secondary border border-transparent focus:border-foreground focus:bg-cream text-sm outline-none transition-colors"
      />
    </div>
  );
}

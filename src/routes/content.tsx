import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Button, Status } from "@/components/admin/ui";
import { Plus, ImageIcon, FileText, Megaphone } from "lucide-react";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Content — DHARAA Admin" },
      { name: "description", content: "Homepage banners, editorial sections, and storefront pages." },
    ],
  }),
  component: Content,
});

const blocks = [
  { type: "HERO_BANNER", title: "Festive Edit · Akshaya Tritiya", placement: "Homepage · Hero slot 1", status: "PUBLISHED", scheduled: "Live now" },
  { type: "PROMO_STRIP", title: "Complimentary insurance on orders above ₹ 50,000", placement: "Sitewide top strip", status: "PUBLISHED", scheduled: "Live now" },
  { type: "EDITORIAL_SECTION", title: "The Polki Story — handcrafted in Bikaner", placement: "Homepage · Below hero", status: "DRAFT", scheduled: "Scheduled · 10 Jun" },
  { type: "HERO_BANNER", title: "Bridal Trousseau Lookbook", placement: "Homepage · Hero slot 2", status: "PUBLISHED", scheduled: "Live now" },
  { type: "EDITORIAL_SECTION", title: "Meet the Artisan · Shilpa Devi", placement: "Story page", status: "ARCHIVED", scheduled: "Ended 28 May" },
];

const iconFor = (t: string) => t === "HERO_BANNER" ? ImageIcon : t === "PROMO_STRIP" ? Megaphone : FileText;

function Content() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        eyebrow="Storytelling"
        title="Content"
        description="Curate the editorial surface of DHARAA — banners, lookbooks, and storytelling moments."
        actions={
          <>
            <Button variant="ghost" size="sm">Preview storefront</Button>
            <Button variant="primary" size="sm"><Plus className="h-3.5 w-3.5" />New block</Button>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border mb-10">
        {/* Hero preview */}
        <div className="lg:col-span-2 bg-card p-8">
          <div className="eyebrow mb-4">Live hero · Homepage</div>
          <div className="aspect-[16/7] bg-gradient-to-br from-accent via-gold-soft to-beige relative overflow-hidden flex items-end p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-cream)_0%,_transparent_60%)] opacity-50" />
            <div className="relative max-w-md">
              <div className="eyebrow mb-3 text-foreground/60">Akshaya Tritiya · 2026</div>
              <h3 className="font-serif text-4xl leading-tight text-foreground">An offering of light.</h3>
              <p className="text-xs text-foreground/70 mt-3">Discover the festive edit — limited pieces, handcrafted in 22K gold.</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 text-xs text-muted-foreground">
            <span className="tabular">Updated 2h ago · Aanya R.</span>
            <div className="flex gap-2">
              <button className="hover:text-foreground">Replace image</button>
              <span>·</span>
              <button className="hover:text-foreground">Edit copy</button>
            </div>
          </div>
        </div>

        {/* Side panel */}
        <div className="bg-card p-8">
          <div className="eyebrow mb-4">Scheduling</div>
          <div className="space-y-5">
            <ScheduleRow date="10 JUN" label="Polki Story" sub="Editorial section · drops 09:00 IST" />
            <ScheduleRow date="15 JUN" label="Summer Sale" sub="Promo strip · 7 days" />
            <ScheduleRow date="22 JUN" label="Bridal Trousseau" sub="Hero rotation begins" />
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <Button variant="outline" size="sm">Open calendar</Button>
          </div>
        </div>
      </div>

      {/* Blocks list */}
      <div className="bg-card border border-border">
        <div className="px-8 py-5 border-b border-border flex items-center justify-between">
          <h2 className="font-serif text-2xl">All blocks</h2>
          <div className="text-xs text-muted-foreground tabular">5 blocks · 3 live</div>
        </div>
        <ul>
          {blocks.map((b) => {
            const Icon = iconFor(b.type);
            return (
              <li key={b.title} className="px-8 py-5 border-b border-border/60 last:border-0 flex items-center gap-6 hover:bg-secondary/30 transition-colors">
                <div className="h-12 w-12 bg-accent flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="eyebrow mb-1 text-muted-foreground">{b.type.replace(/_/g, " ")}</div>
                  <div className="font-medium truncate">{b.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{b.placement}</div>
                </div>
                <div className="hidden md:block text-right">
                  <Status value={b.status} />
                  <div className="text-[11px] text-muted-foreground mt-1.5 tabular">{b.scheduled}</div>
                </div>
                <button className="text-xs text-muted-foreground hover:text-foreground">Edit →</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ScheduleRow({ date, label, sub }: { date: string; label: string; sub: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground tabular w-12 pt-1 border-r border-border pr-3">{date}</div>
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

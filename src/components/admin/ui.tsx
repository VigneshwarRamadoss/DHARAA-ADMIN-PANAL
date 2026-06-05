import { type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-border mb-8">
      <div>
        <div className="eyebrow mb-3">{eyebrow}</div>
        <h1 className="font-serif text-4xl md:text-5xl leading-none">{title}</h1>
        {description && (
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}

export function Stat({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string;
  delta?: { value: string; positive?: boolean };
  hint?: string;
}) {
  return (
    <div className="bg-card border border-border p-6 flex flex-col gap-4 hover:border-foreground/30 transition-colors">
      <div className="eyebrow">{label}</div>
      <div className="flex items-baseline gap-3">
        <div className="font-serif text-4xl tabular leading-none">{value}</div>
        {delta && (
          <span
            className={`text-xs tabular ${
              delta.positive ? "text-foreground" : "text-sale"
            }`}
          >
            {delta.positive ? "↑" : "↓"} {delta.value}
          </span>
        )}
      </div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const sizes = { sm: "h-8 px-3 text-xs", md: "h-10 px-5 text-sm" };
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/85",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    ghost: "text-foreground hover:bg-secondary",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

const statusMap: Record<string, string> = {
  CONFIRMED: "bg-foreground text-background",
  PROCESSING: "bg-gold-soft text-foreground",
  SHIPPED: "bg-secondary text-foreground border border-border",
  DELIVERED: "bg-cream text-foreground border border-foreground/30",
  PENDING_PAYMENT: "bg-sale/10 text-sale border border-sale/30",
  CANCELLED: "bg-muted text-muted-foreground line-through",
  PAID: "bg-foreground text-background",
  REFUNDED: "bg-muted text-muted-foreground",
  DRAFT: "bg-muted text-muted-foreground",
  PUBLISHED: "bg-foreground text-background",
  ARCHIVED: "bg-secondary text-muted-foreground",
  LOW: "bg-sale/10 text-sale",
  IN_STOCK: "bg-secondary text-foreground",
};

export function Status({ value }: { value: string }) {
  const cls = statusMap[value] ?? "bg-secondary text-foreground";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase ${cls}`}>
      {value.replace(/_/g, " ")}
    </span>
  );
}

# DHARAA — Admin Console

DHARAA is a premium, high-end administration panel and operations console designed for a luxury retail storefront (fine jewelry, diamonds, bridal trousseaus, and handcrafted ornaments). 

It features an editorial, high-aesthetic design system optimized for store managers and operations coordinators to manage orders, product inventory, customer relationships, marketing content, and configuration.

---

## 🎨 Design & Aesthetic Language

The console uses a bespoke design language customized for luxury branding:
- **Typography**: 
  - **Serif**: *Cormorant Garamond* (adds an editorial, high-end editorial feel for main titles and brand markers).
  - **Sans**: *Inter* (high legibility font for administrative fields, tables, and buttons).
  - **Mono**: *JetBrains Mono* (used for data cells: order IDs, SKUs, and monetary values).
- **Harmonious Palette (OKLCH)**:
  - Background: Soft warm cream (`#FCFBF9`).
  - Text & Accents: Deep ink black (`#212121`).
  - Highlights: Luxurious warm gold and vibrant coral/orange (`#FC5927`) for status flags.

---

## 🧭 Page Architecture & Workflows (Admin Guide)

The dashboard contains six specialized sections to control your luxury storefront:

### 1. Overview Dashboard (`/`)
- **Purpose**: Daily status reports and business health tracking.
- **Key Metrics**: Daily Gross Revenue, active order volume, Average Order Value (AOV), and cart abandonment rates.
- **Visuals**: A custom 14-day interactive SVG revenue chart and a list of the top pieces sold this week.
- **Live Queue**: Real-time view of recent incoming orders with status flags.

### 2. Orders Manager (`/orders`)
- **Purpose**: Order verification, fulfillment, and payment statuses.
- **Actions**: Filter by dispatch stages (Awaiting fulfillment, Shipped, Delivered), run global search across IDs and customer emails, and trigger manual order entry.

### 3. Catalogue Vault (`/products`)
- **Purpose**: Manage luxury pieces, product specifications, metals, and stock availability.
- **Data Points**: SKU, metal purity (e.g. 22K Gold, 18K Gold, Silver 925), categories (Necklaces, Rings, Bangles), unit price, and real-time stock counts.

### 4. Customers Relationships (`/customers`)
- **Purpose**: Track customer lifecycles, value metrics, and purchasing segments.
- **Segments**: VIP clients (LTV ≥ ₹ 2L), Returning clients, and New registrants.

### 5. Storytelling & Content (`/content`)
- **Purpose**: Curate marketing lookbooks, seasonal drop banners, and promotional content.
- **Features**: Visual homepage hero editor preview, scheduling timeline (upcoming campaign collections), and layout block config list.

### 6. Store Settings (`/settings`)
- **Purpose**: Operational configurations.
- **Machinery**: Payment gateway status (Razorpay/UPI), shipping rules (Shiprocket), GST tax configurations, team roles, and a maintenance-mode toggle (*Pause Store*).

---

## 🛠️ Developer & Technical Guide

### Tech Stack
- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (SSR React Framework built on Vite and Nitro).
- **Routing**: [TanStack Router](https://tanstack.com/router/v1/docs/guide/routing) (Strictly typed, file-based routing).
- **State & Cache**: [TanStack Query](https://tanstack.com/query/latest) (Server-state synchronization).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Next-generation utility CSS).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/).

### Folder Structure

```
├── .lovable/             # Platform configuration meta
├── src/
│   ├── components/       # UI Components
│   │   ├── admin/        # Admin shell, topbar, sidebar, and layout blocks
│   │   └── ui/           # Radix-based UI building blocks (dialogs, cards, inputs)
│   ├── hooks/            # Shared React hooks
│   ├── lib/              # API utilities, error handlers, and config scripts
│   ├── routes/           # File-based routes (TanStack Router Pages)
│   │   ├── __root.tsx    # Root layout shell & provider context
│   │   └── index.tsx     # Overview dashboard page
│   ├── routeTree.gen.ts  # Auto-generated routing tree
│   ├── router.tsx        # Router configuration & queryClient instantiation
│   ├── server.ts         # Server-side application entry
│   ├── start.ts          # Client hydration bootstrap
│   └── styles.css        # Main stylesheet (Tailwind imports & OKLCH variables)
├── package.json          # Dependencies & npm scripts
└── tsconfig.json         # TypeScript rules
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed on your system.

### 1. Install Dependencies
Run the following command in the project root to install the packages:
```bash
npm install
```

### 2. Run the Development Server
Launch the local dev server using:
```bash
npm run dev
```
Once booted, the application will be hosted at:
- **Local URL**: [http://localhost:8080/](http://localhost:8080/)

### 3. Build for Production
To bundle the project for a production release, run:
```bash
npm run build
```

---

## 🔀 Version Control Integration

The project tracking is linked to:
- **GitHub Repository**: [https://github.com/VigneshwarRamadoss/DHARAA-ADMIN-PANAL.git](https://github.com/VigneshwarRamadoss/DHARAA-ADMIN-PANAL.git)

To push changes to the repository:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

# DHARAA Admin Routes Guide

Welcome to the routing directory of the DHARAA Admin Console. This documentation is split into two sections: a **Business Owner Guide** explaining what the system pages accomplish, and a **Developer Guide** describing the codebase and routing architecture.

---

## 💼 Business Owner (Admin) Guide

This directory manages the screens and workflows of your retail machinery. Below is a map of the pages and how they support the day-to-day operations of DHARAA.

### Page Directory & Workflows

| Page Component | Route URL | Business Purpose | Operational Actions |
| :--- | :--- | :--- | :--- |
| **Overview** ([index.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/index.tsx)) | `/` | The business pulse dashboard. Displays 24-hour gross revenue, order volume, and average order value (AOV). | Monitor real-time charts, view recent orders, and export reports. |
| **Orders** ([orders.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/orders.tsx)) | `/orders` | Order management and fulfillment dispatch interface. | Filter by status (Awaiting fulfillment, Shipped, Delivered), process payments, and dispatch tracking details. |
| **Catalogue** ([products.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/products.tsx)) | `/products` | Vault and pieces inventory manager. Displays SKU codes, metal composition (e.g., 22K Gold, Silver 925), pricing, and real-time stock levels. | Manage product listings, draft new pieces, and check low-stock or out-of-stock items. |
| **Customers** ([customers.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/customers.tsx)) | `/customers` | Relationship management tool showing customer lifetime value (LTV), order frequency, and loyalty tiers. | View contact cards, filter VIP segments, and coordinate customer outreach. |
| **Content** ([content.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/content.tsx)) | `/content` | Storefront editorial and lookbook curator. Controls the homepage promotional banners and marketing strips. | Schedule future collection launches, preview hero banner edits, and swap images. |
| **Settings** ([settings.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/settings.tsx)) | `/settings` | Operational configurations, payment providers (Razorpay), courier details (Shiprocket), GST structures, and team permissions. | Modify shop configuration, audit access roles, and toggle safety configurations like *Pause Store*. |

---

## 🛠️ Developer Guide

DHARAA is built using **TanStack Start** (SSR framework) and uses **file-based routing** powered by **TanStack Router**. 

### Routing Rules

1. **Only Route Files Live Here**: Every `.tsx` file in this directory represents an active URL route. Do not place reusable UI components or helper utility files directly in this folder. Use `src/components/` and `src/lib/` instead.
2. **Global Layout Shell**: The main application shell and layout wrapper is defined in [__root.tsx](file:///p:/dhara-sparkle-build-main/dhara-sparkle-build-main/src/routes/__root.tsx). It sets up the `<AdminShell>` and `<QueryClientProvider>`.

### Route Conventions & Formats

| File Pattern | URL Endpoint | Description |
| :--- | :--- | :--- |
| `index.tsx` | `/` | Home or main root page. |
| `about.tsx` | `/about` | Static page layout. |
| `users/index.tsx` | `/users` | Standard index list route. |
| `users/$id.tsx` | `/users/:id` | Dynamic path segment. Parameter accessible via `useParams()`. |
| `posts/{-$category}.tsx` | `/posts/:category?` | Optional segment parameter. |
| `files/$.tsx` | `/files/*` | Splat/catch-all segment. Parameter retrieved via `_splat` context. |
| `_layout.tsx` | _Layout route_ | Non-URL routing wrapper. Renders nested paths through an `<Outlet />`. |

### Auto-Generation
The router tree is automatically scanned and generated into `src/routeTree.gen.ts`. 
- **Important**: Do not edit `routeTree.gen.ts` by hand. The Vite dev server will rewrite it dynamically as you create, rename, or delete files inside this directory.

### Adding a New Page
To add a new route:
1. Create a file with the suffix `.tsx` matching your target route pattern (e.g. `analytics.tsx` for `/analytics`).
2. Define and export the route configuration using `createFileRoute`:
   ```tsx
   import { createFileRoute } from '@tanstack/react-router'

   export const Route = createFileRoute('/analytics')({
     component: AnalyticsComponent,
   })

   function AnalyticsComponent() {
     return <div>Analytics Workspace</div>
   }
   ```
3. Let the Vite build process automatically regenerate the route tree.

# Family Ballers — UI-Only Build Plan

A polished, mobile-first frontend for a community club management system. **No backend, database, auth, or real payments** — everything uses dummy data and visual placeholders. A simple role switcher (top-right dropdown: Member / Treasurer / Super Admin / Public) lets you preview every view without login logic.

## Design system

- **Theme**: Green & white. Primary green `oklch(0.55 0.15 150)`, accent soft mint, neutral white/gray surfaces. Trustworthy, financial, clean.
- **Typography**: Inter, generous spacing, clear hierarchy.
- **Components** (shadcn/ui based, all reusable):
  - `MoneyText` — formats ₦ with red for negative/outstanding, green for positive
  - `StatusBadge` — Paid/Approved (green), Pending/Partial (yellow), Unpaid/Overdue/Rejected (red)
  - `StatCard`, `SectionHeader`, `EmptyState`, `PageHeader`
  - `DataTable` with Excel + PDF export buttons (UI placeholders, toast on click)
  - `ChartCard` wrapping Recharts (line, bar, pie, area)
  - `RoleSwitcher`, `NotificationBell`, `ChatbotWidget`
- **Icons**: lucide-react throughout.
- **Layouts**: `PublicLayout` (top nav + footer), `PortalLayout` (sidebar + header for members), `AdminLayout` (sidebar + header for admins). All sidebars collapsible (shadcn sidebar).

## Routes

```text
Public                          Member Portal              Admin Dashboard
/                               /portal                    /admin
/about                          /portal/dues               /admin/overview
/charity                        /portal/contributions      /admin/dues-grid
/events                         /portal/fines              /admin/contributions
/gallery                        /portal/occasions          /admin/fines
/news                           /portal/directory          /admin/lateness
/membership                     /portal/chat/group         /admin/debtors
/contact                        /portal/chat/private       /admin/debt-redemption
                                /portal/documents          /admin/income-expenditure
                                /portal/profile            /admin/payment-approvals
                                /portal/submit-payment     /admin/members
                                /portal/payments           /admin/reports
                                /portal/receipts/$id       /admin/registration-fees
                                                           /admin/pledges
                                                           /admin/documents
                                                           /admin/settings
```

## Public website

- **Home**: hero with club tagline, mission snapshot, stats (members, years active, charity raised), upcoming events, latest news, CTA to join.
- **About**: history, leadership cards, values.
- **Charity & Outreach**: project cards with images, impact numbers, donation CTA (placeholder).
- **Events**: filterable list + calendar view.
- **Gallery**: responsive image grid with lightbox.
- **News**: blog-style cards with detail page.
- **Membership**: tiers/benefits, registration form (UI only).
- **Contact**: form + map placeholder + socials.
- Floating **Club Assistant** chatbot (public mode: FAQ answers from canned dummy responses).

## Member portal

- **Dashboard**: outstanding balance card (red), recent payments, upcoming dues, announcements feed, quick actions.
- **Monthly Dues**: year selector → 12-month grid of paid/unpaid badges, totals.
- **Contributions**: per-occasion list (weddings, funerals, naming) with amount owed/paid.
- **Fines** & **Lateness Fees**: tables with reason, date, amount, status.
- **Occasions Calendar**: month view, occasion details drawer.
- **Member Directory**: searchable cards with avatar, role, contact.
- **Group Chat & Private Chat**: WhatsApp-style UI with dummy threads (no realtime).
- **Documents Library**: file cards with download icons (placeholder).
- **Profile**: editable form, avatar, KYC fields.
- **Submit Payment Proof**: form (occasion/dues type, amount, date, bank ref, file upload placeholder) → confirmation toast, status Pending.
- **Payment History**: table with statuses, click row → **Receipt View** (printable A4-style screen with club logo, ref, breakdown).
- Portal chatbot with quick-action buttons: Check My Balance, Payment Status, Outstanding Dues.

## Admin dashboard

- **Financial Overview**: KPI cards (club balance green, income green, expenses, outstanding red), revenue chart, expense breakdown pie, recent activity.
- **Monthly Dues Grid**: Excel-like table, members as rows × months as columns, color-coded cells, click to mark/edit (UI only), year selector, export buttons.
- **Contributions / Fines / Lateness**: management tables with add/edit dialogs, filters.
- **Debtors List**: sortable by amount owed, contact action.
- **Debt Redemption**: workflow UI to apply payments against old debts.
- **Income & Expenditure Statement**: formal statement layout with date range, export.
- **Payment Approval Queue**: pending submissions list, detail drawer with proof image preview, Approve/Reject buttons → toast + visual record update + receipt generated.
- **Member Management**: table with role assignment, status, suspend/reactivate.
- **Reports & Charts**: configurable charts (Recharts) — dues collection trend, contribution per occasion, top debtors, member growth.
- **Registration Fees**, **Constitution Pledges**: tracking tables.
- **Documents Management**: upload UI placeholder, categorize, visibility toggle.
- **Settings**: club info, fee amounts, occasion types, roles & permissions matrix, branding.

## Cross-cutting UI

- **Notifications bell** with dummy items (payment approved, new announcement, fine added).
- **Toasts** (sonner) for all actions.
- **Empty states** and **skeleton loaders** everywhere.
- **Mobile**: sidebars become sheets; tables become stacked cards on small screens.
- All export and file-upload buttons show "UI placeholder" toasts.

## What's intentionally NOT built

- No Supabase, no auth, no API routes, no real file storage, no payment gateway, no realtime chat. Role switching is local state only. All data lives in `src/lib/dummy-data.ts`.

## Technical notes

- TanStack Start file-based routes under `src/routes/` (one file per page; layout routes for `/portal` and `/admin` rendering `<Outlet />`).
- Each route has its own `head()` metadata.
- Shared dummy data + types in `src/lib/`.
- Recharts for all charts; lucide-react for icons; shadcn components already present.
- Strict green/white tokens added to `src/styles.css` (override `--primary` and chart colors).

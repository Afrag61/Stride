# 👟 Stride — Online Shoe Store

**Stride** is a full online shopping website for shoes — think of it like a mini version of Nike's or Adidas' website. Customers can browse shoes by category, search for products, view product details, pick their size and color, add items to a cart, save favorites to a wishlist, check out, and view their past orders.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3ecf8e?logo=supabase)

<!-- 📸 Add a screenshot or GIF of the homepage / product page here, e.g.:
![Homepage screenshot](docs/screenshot-home.png)
-->

### What this project actually is (in plain terms)

- It's a **website**, built by a developer using modern web technologies (listed below).
- It lets a shop owner sell shoes online: customers can search, filter, and buy products.
- It's still a **development project** (source code) — not a live, ready-to-visit website unless it has been deployed (e.g. to a platform like Vercel) and a link has been shared separately.
- The "tech stack" badges above just show *what tools were used to build it* — useful context for engineering hiring, less relevant if you're just reviewing the product/feature side.

---

## ✨ Features

- 🛍️ **Product catalog** — browse products by category, view details, pick size & color
- 🔎 **Product search** — search bar in the header navigates to filtered product results
- 📄 **Pagination** — product listing pages are paginated
- 🛒 **Cart** — powered by Redux Toolkit + `redux-persist`, so it survives page reloads
- ❤️ **Wishlist** — save favorite products (synced with Supabase per user)
- 📦 **Order history** — logged-in users can view their past orders in their account
- 🔐 **Authentication** — login / register / logout via Supabase Auth, with route protection through Next.js middleware (`src/proxy.ts`)
- 👤 **Account settings** — manage profile info
- 📧 **Newsletter signup** — sends emails via EmailJS
- 🌗 **Light / Dark theme** — theme context & toggle
- 🎬 **Animations** — powered by GSAP
- ✅ **Form validation** — `react-hook-form` + `zod`
- 📱 Fully responsive UI styled with **Tailwind CSS v4**

## 🧱 Tech Stack

| Layer               | Technology                                  |
| -------------------- | -------------------------------------------- |
| Framework            | [Next.js 16](https://nextjs.org) (App Router, React 19) |
| Styling              | Tailwind CSS v4                              |
| State management     | Redux Toolkit + redux-persist                |
| Backend / Auth / DB  | Supabase (`@supabase/ssr`)                   |
| Forms & Validation   | React Hook Form + Zod                        |
| Animations           | GSAP (`@gsap/react`)                         |
| Emails               | EmailJS (`@emailjs/nodejs`)                  |
| Icons                | lucide-react, react-icons                    |
| Notifications        | react-hot-toast                              |
| Language             | TypeScript                                   |

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages & layouts
│   ├── (auth)/            # login, register routes (route group)
│   ├── about/
│   ├── account/           # account + settings + wishlist pages
│   ├── cart/
│   ├── categories/
│   ├── products/[productId]/
│   └── wishlist/
├── Modules/               # Feature-based modules (UI + logic per feature)
│   ├── About/
│   ├── Account/            # Account profile, settings, order history (Orders, OrderItem)
│   ├── Auth/               # Auth context, hooks, login/register logic
│   ├── Cart/
│   ├── Categories/
│   ├── Error/
│   ├── Footer/
│   ├── Header/             # incl. functional header search (navigates to /products?q=...)
│   ├── Home/               # Hero, Categories, Products, Testimonials, Newsletter
│   ├── NotFound/
│   ├── ProductDetails/
│   ├── Products/           # Product listing, sidebar filters, pagination
│   ├── Theme/               # Light/dark theme context & toggle
│   └── Wishlist/
├── Redux/                   # Redux store, cart slice, persisted storage
├── components/               # Shared/reusable UI components (incl. Skeletons)
├── lib/
│   ├── supabase/               # Supabase client & server helpers
│   ├── env.ts                   # Typed & validated environment variables (Zod)
│   ├── calculateDiscount.ts
│   └── newsLetter.ts            # Server action for newsletter signup (EmailJS)
├── proxy.ts                      # Middleware — Supabase auth session handling
└── types.ts                       # Shared TypeScript types (Product, Category, Cart, Wishlist...)
```

> This project organizes code by **feature module** (`src/Modules/*`) rather than by file type — each module bundles its own components, hooks, and logic.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20 recommended)
- A [Supabase](https://supabase.com) project
- An [EmailJS](https://www.emailjs.com) account (for the newsletter feature)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root with the following variables (see `src/lib/env.ts` for the full validated list):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

# EmailJS (used by the newsletter server action)
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PRIVATE_KEY=your_emailjs_private_key
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> Environment variables are validated at startup using Zod (`src/lib/env.ts`) — the app will throw a clear error if any required variable is missing.

### 3. Run the development server

```bash
npm run dev
```

The app runs on **[http://localhost:3799](http://localhost:3799)** (custom port set in `package.json`).

### 4. Build for production

```bash
npm run build
npm run start
```

### 5. Lint

```bash
npm run lint
```

## 🗂️ Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------- |
| `npm run dev`         | Start the dev server on port 3799     |
| `npm run build`       | Build the app for production          |
| `npm run start`       | Start the production server           |
| `npm run lint`        | Run ESLint                            |

## 🔑 Authentication & Middleware

Auth is handled by Supabase (`@supabase/ssr`). `src/proxy.ts` acts as Next.js middleware, refreshing the Supabase session on each request and can be used to protect authenticated routes (account, wishlist, etc.).

## 🛒 State Management

The cart lives in Redux (`src/Redux/cartSlice`) and is persisted to storage via `redux-persist` (`src/Redux/storage.ts`), so items stay in the cart across page reloads and browser sessions.

## 🆕 Recent Changes

- Added **Order History** to the account section (view past orders, pulled from Supabase)
- Header **search bar is now functional** — submitting a search takes you to `/products?q=...`
- Added **pagination** to the product listing page
- Minor cleanup and fixes across the account, cart, and products modules

## 📝 Notes

- This repo includes `AGENTS.md` / `CLAUDE.md` files with instructions for AI coding assistants — worth checking if you're using one to work on this codebase.
- Update the sections above (env variable names, deployment steps, etc.) as the project evolves.

## 📄 License

Add your license here (e.g. MIT).

## Soludesks LMS – Frontend

Soludesks is a Learning Management System (LMS) frontend built with **Next.js** and **TypeScript**, providing dashboards, course management, and learning experiences for learners and admins.

---

## 1. Project Setup Instructions

### Prerequisites
- **Node.js**: v18+ (recommended)
- **Package manager**: npm or pnpm (repo includes both `package-lock.json` and `pnpm-lock.yaml`)

### Install dependencies
```bash
# using npm
npm install

# or using pnpm
pnpm install
```

### Run the development server
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser.

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm run start
```

### Lint
```bash
npm run lint
```

---

## 2. Tech Stack Used

his project leverages a modern, production-ready tech stack designed for scalability and developer experience:

### Core Framework & Language
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router for server-side rendering, routing, and API routes
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better code quality and developer experience

### UI Component System
- **[shadcn/ui](https://ui.shadcn.com/)** - **Primary component library** built on Radix UI primitives
  - Uses the "New York" style variant
  - Components are copied into the project (not installed as dependencies) for full customization
  - Configured in `components.json` with CSS variables for theming
  - Includes 60+ pre-built components: buttons, forms, dialogs, tables, navigation, and more
  - All components are fully customizable and follow accessibility best practices
  - Components located in `components/ui/` directory

### Styling & Design System
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **Custom Design Tokens** - Defined in `app/globals.css` using CSS variables (colors, spacing, typography)
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** / `tw-animate-css` - Animation utilities for smooth transitions and effects
- **CSS Variables** - Theme-aware color system supporting light/dark modes

### State Management
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Official Redux toolset for efficient state management
- **[React Redux](https://react-redux.js.org/)** - React bindings for Redux
- **RTK Query** - Data fetching and caching solution (`lib/store/api`) for API integration
- Custom typed hooks (`useAppSelector`, `useAppDispatch`) for TypeScript support

### UI Primitives & Accessibility
- **[Radix UI](https://www.radix-ui.com/)** - Headless, accessible component primitives
  - Used as the foundation for shadcn/ui components
  - Provides accessibility features out of the box (keyboard navigation, ARIA attributes, focus management)
  - Components include: Dialog, Dropdown, Select, Tabs, Tooltip, and many more

### Icons
- **[Heroicons](https://heroicons.com/)** - Beautiful hand-crafted SVG icons from the makers of Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Icon library (also configured as shadcn/ui's default icon library)

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with minimal re-renders
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolver adapters
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation library

### Data Visualization
- **[Recharts](https://recharts.org/)** - Composable charting library built on React and D3

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching (light/dark mode) with system preference detection
- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics integration
- **[class-variance-authority](https://cva.style/)** - For creating type-safe component variants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for conditional className management

---

## 3. Folder Structure Overview

The project follows Next.js App Router conventions with a clear separation of concerns. Here's a detailed breakdown:

### Root Level Files
- `next.config.mjs` - Next.js configuration (image optimization, TypeScript settings)
- `tsconfig.json` - TypeScript compiler configuration with path aliases (`@/*`)
- `package.json` - Project dependencies and npm scripts
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS processing
- `components.json` - **shadcn/ui configuration file** (defines component paths, style preferences, and aliases)

High-level structure:

```text
.
├─ app/
│  ├─ layout.tsx                # Root layout (Inter font, providers, global styles)
│  ├─ globals.css               # App-level Tailwind + design tokens
│  └─ (dashboard)/              # Authenticated dashboard area
│     ├─ layout.tsx             # Dashboard shell layout
│     ├─ dashboard/page.tsx     # Main dashboard
│     └─ courses/               # Course management & detail pages
│        ├─ page.tsx            # Courses listing / management
│        └─ [slug]/             # Course detail + learn routes
│           ├─ page.tsx         # Course detail page
│           └─ learn/page.tsx   # Course learning experience
│
├─ components/
│  ├─ layout/                   # Shell components (navbar, sidebar, dashboard layout)
│  ├─ common/                   # Reusable primitives (logo, stats card, search input, etc.)
│  ├─ pages/
│  │  └─ courses/               # Page-specific UI for courses (filters, header, tabs, pagination, cards)
│  ├─ ui/                       # Generic UI components (table, button, inputs, video player, etc.)
│  └─ theme-provider.tsx        # Theme provider (dark/light)
│
├─ lib/
│  ├─ constants/                # Simple constant values (e.g. courses)
│  ├─ contexts/                 # React contexts (e.g. sidebar context)
│  ├─ data/                     # Static data used in UI (courses, applicants, lessons, navigation, quiz)
│  ├─ hooks/                    # Custom hooks (Redux hooks, sidebar hook, etc.)
│  ├─ providers/                # Top-level providers (Redux provider)
│  ├─ store/                    # Redux store configuration, slices, and RTK Query APIs
│  │  ├─ api/                   # RTK Query API slices
│  │  ├─ slices/                # Redux slices (e.g. user slice)
│  │  └─ index.ts               # Store bootstrap
│  ├─ types/                    # Shared TypeScript types (course, user, navigation, etc.)
│  └─ utils.ts                  # Shared utilities (e.g. `cn` helper)
│
├─ public/
│  └─ images/                   # Static assets
│     ├─ branding/              # Logos, course banners, avatars
│     └─ ui/                    # UI icons (SVGs, placeholders)
│
├─ styles/
│  └─ globals.css               # Additional global styles / tokens (legacy or extended)
│
├─ next.config.mjs              # Next.js configuration (images, TS options)
├─ tsconfig.json                # TypeScript configuration
├─ package.json                 # Scripts and dependencies
└─ postcss.config.mjs           # PostCSS + Tailwind config
```

---
4. Key Features & Architecture Decisions

### Component Architecture
- **shadcn/ui Components**: The project uses shadcn/ui as the primary component library. Components are copied directly into `components/ui/` rather than installed as npm packages, allowing for full customization while maintaining consistency.
- **Component Composition**: Components are built using composition patterns, making them highly reusable and maintainable.
- **Type Safety**: Full TypeScript coverage ensures type safety across components, props, and data structures.

### State Management Strategy
- **Redux Toolkit**: Centralized state management for global application state (user authentication, UI state)
- **RTK Query**: Handles server state, caching, and data fetching with minimal boilerplate
- **Local State**: React hooks (`useState`, `useReducer`) for component-specific state
- **Context API**: Used for UI state like sidebar visibility (lightweight, no need for Redux)

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid UI development
- **Design Tokens**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Dark Mode**: Full support via `next-themes` and CSS variables

### Routing & Navigation
- **Next.js App Router**: File-based routing with support for dynamic routes (`[slug]`)
- **Route Groups**: `(dashboard)` group organizes routes without affecting URLs
- **Client Components**: Marked with `"use client"` directive where interactivity is needed
- **Server Components**: Default for better performance (where applicable)

---

## 5. Deployment Link



- **Production URL**: `https://soludesks.vercel.app/dashboard`

---

## 6. Running in Different Environments

- **Local development**: `npm run dev`
- **Preview / Staging**: Build (`npm run build`) and run (`npm start`) against your staging environment
- **Production**: Configure environment variables and deploy (e.g. via Vercel)

The app uses a central Redux store and static `lib/data/*` fixtures, so it runs without a backend by default. Hook it up to a real API by updating the RTK Query definitions in `lib/store/api`.

Thank you for Reading!
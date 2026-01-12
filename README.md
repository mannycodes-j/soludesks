## Soludesks LMS – Frontend Assessment

Soludesks is a Learning Management System (LMS) frontend built with **Next.js** and **TypeScript**, providing dashboards, course management, and learning experiences for learners and admins.

---

## 1. Project Setup Instructions

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js**: v18+ (LTS version recommended)
- **Package manager**: npm or pnpm (this repository includes both `package-lock.json` and `pnpm-lock.yaml` for flexibility)

### Installation Steps

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies**:
```bash
# using npm
npm install

# or using pnpm (recommended for faster installs)
pnpm install
```

3. **Run the development server**:
```bash
npm run dev
# or
pnpm dev
```
The application will start on `http://localhost:3000`. Open this URL in your browser to view the application.

### Build for Production

To create an optimized production build:
```bash
npm run build
```

This command will:
- Compile TypeScript to JavaScript
- Optimize and bundle all assets
- Generate static pages where possible
- Create a `.next` folder with the production build

### Start Production Server

After building, you can run the production server locally:
```bash
npm run start
```

### Code Quality

Run the linter to check for code quality issues:
```bash
npm run lint
```

---

## 2. Tech Stack Used

This project leverages a modern, production-ready tech stack designed for scalability and developer experience:

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

### Application Routes (`app/`)
```
app/
├─ layout.tsx                   # Root layout wrapping entire app
│                                # - Configures Inter font from Google Fonts
│                                # - Sets up ReduxProvider and Analytics
│                                # - Applies global styles
│
├─ globals.css                  # Main stylesheet with:
│                                # - Tailwind CSS imports
│                                # - CSS custom properties (design tokens)
│                                # - Color system (light/dark mode)
│                                # - Animation keyframes
│                                # - Base typography styles
│
├─ page.tsx                     # Landing/home page
│
└─ (dashboard)/                 # Route group (doesn't affect URL structure)
   ├─ layout.tsx                # Dashboard layout wrapper
   │                             # - Uses DashboardLayout component
   │                             # - Provides sidebar and navbar context
   │
   ├─ dashboard/
   │  └─ page.tsx               # Main dashboard page
   │
   └─ courses/
      ├─ page.tsx               # Course management/listing page
      │                          # - Displays course cards in grid
      │                          # - Includes filters and search
      │                          # - Pagination support
      │
      └─ [slug]/                # Dynamic route for individual courses
         ├─ page.tsx            # Course detail page
         │                      # - Shows course info and applicants table
         │
         └─ learn/
            └─ page.tsx        # Course learning interface
                              # - Lesson content display
                              # - Video player integration
                              # - Quiz functionality
```

### Components (`components/`)
```
components/
├─ layout/                      # Application shell components
│  ├─ navbar.tsx                # Top navigation bar
│  │                             # - Search functionality
│  │                             # - User profile dropdown
│  │                             # - Mobile menu toggle
│  │
│  ├─ sidebar.tsx               # Sidebar navigation
│  │                             # - Navigation menu items
│  │                             # - Responsive mobile behavior
│  │                             # - Active route highlighting
│  │
│  └─ dashboard-layout.tsx     # Main dashboard wrapper
│                                # - Combines navbar + sidebar
│                                # - Manages layout spacing
│
├─ common/                      # Shared, reusable components
│  ├─ logo.tsx                  # Application logo component
│  ├─ search-input.tsx          # Reusable search input with icon
│  └─ stats-card.tsx            # Statistics card component
│                                # - Displays metrics with icons
│                                # - Supports change indicators
│
├─ pages/                       # Page-specific components
│  ├─ courses/
│  │  ├─ course-card.tsx        # Course card for grid display
│  │  ├─ course-header.tsx      # Course page header with breadcrumbs
│  │  ├─ course-filters.tsx     # Search and filter controls
│  │  ├─ course-pagination.tsx  # Pagination component (responsive)
│  │  └─ course-tabs.tsx        # Tab navigation for course views
│  │
│  └─ learn-slug/               # Learning interface components
│     ├─ lessons-sidebar.tsx    # Lesson navigation sidebar
│     ├─ lesson-content.tsx      # Lesson content renderer
│     ├─ quiz-content.tsx       # Quiz display component
│     └─ quiz-question.tsx      # Individual quiz question
│
├─ ui/                          # shadcn/ui components (60+ components)
│                                # These are copied from shadcn/ui and fully customizable:
│                                # - button.tsx, input.tsx, card.tsx
│                                # - table.tsx, dialog.tsx, dropdown-menu.tsx
│                                # - form.tsx, select.tsx, tabs.tsx
│                                # - And many more...
│                                # See full list in components/ui/ directory
│
└─ theme-provider.tsx            # Theme context provider for dark/light mode
```

### Library & Utilities (`lib/`)
```
lib/
├─ constants/                   # Application constants
│  ├─ courses.constants.ts      # Course-related constants
│  └─ index.ts                  # Central export file
│
├─ contexts/                    # React Context providers
│  ├─ sidebar-context.tsx       # Sidebar open/close state management
│  └─ index.ts                  # Context exports
│
├─ data/                        # Static/mock data (replace with API calls)
│  ├─ applicants.data.ts        # Sample applicant data
│  ├─ courses.data.ts           # Course data and statistics
│  ├─ lessons.data.ts           # Lesson content data
│  ├─ navigation.data.ts        # Navigation menu items
│  ├─ quiz.data.ts              # Quiz questions and answers
│  └─ index.ts                  # Data exports
│
├─ hooks/                       # Custom React hooks
│  ├─ use-redux.ts              # Typed Redux hooks (useAppSelector, useAppDispatch)
│  ├─ use-sidebar.ts            # Sidebar state hook
│  └─ index.ts                  # Hook exports
│
├─ providers/                   # Top-level React providers
│  ├─ redux-provider.tsx        # Redux store provider wrapper
│  └─ index.ts                  # Provider exports
│
├─ store/                       # Redux store configuration
│  ├─ api/                      # RTK Query API definitions
│  │  ├─ base.api.ts           # Base API configuration
│  │  ├─ user.api.ts           # User-related API endpoints
│  │  └─ index.ts              # API exports
│  │
│  ├─ slices/                   # Redux slices
│  │  └─ user.slice.ts         # User state management slice
│  │
│  └─ index.ts                  # Store configuration and type exports
│
├─ types/                       # TypeScript type definitions
│  ├─ api.types.ts             # API-related types
│  ├─ applicant.types.ts        # Applicant data types
│  ├─ course.types.ts          # Course data types
│  ├─ navigation.types.ts      # Navigation types
│  ├─ user.types.ts            # User data types
│  └─ index.ts                 # Type exports
│
└─ utils.ts                     # Utility functions
                                # - cn(): className merge utility
                                # - Other helper functions
```

### Static Assets (`public/`)
```
public/
└─ images/
   ├─ branding/                 # Brand assets
   │  ├─ logo.png              # Main application logo
   │  ├─ course-banner.png     # Course banner images
   │  └─ Avatars.png           # User avatars
   │
   └─ ui/                       # UI-specific images
      ├─ icons/                 # SVG icon files
      │  ├─ dashboard.svg
      │  ├─ classes.svg
      │  ├─ book.svg
      │  └─ ... (more icons)
      └─ placeholder.jpg        # Placeholder images
```

### Styles (`styles/`)
```
styles/
└─ globals.css                  # Additional global styles
                                # - May contain legacy styles
                                # - Extended design tokens
                                # - Additional animations
```

---

## 4. Key Features & Architecture Decisions

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

If the project is deployed (for example, to Vercel), add your production URL here:

- **Production URL**: `https://your-deployment-url.com`

> Replace the placeholder above with your actual deployment link (e.g. Vercel URL) once deployed.

### Deployment Considerations
- **Environment Variables**: Configure any required environment variables in your deployment platform
- **Build Command**: `npm run build` (or `pnpm build`)
- **Output Directory**: `.next` (Next.js default)
- **Node Version**: Ensure Node.js 18+ is available in your deployment environment

---

## 6. Running in Different Environments

### Local Development
```bash
npm run dev
```
- Runs on `http://localhost:3000`
- Hot module replacement enabled
- Development optimizations active

### Preview / Staging
```bash
npm run build
npm run start
```
- Creates optimized production build
- Runs production server locally
- Useful for testing before deployment

### Production
- Deploy to your preferred platform (Vercel, Netlify, AWS, etc.)
- Configure environment variables
- Set up CI/CD pipeline if needed
- The app uses a central Redux store and static `lib/data/*` fixtures, so it runs without a backend by default
- To connect to a real API, update the RTK Query definitions in `lib/store/api/`

---

## 7. Additional Notes

### Adding New shadcn/ui Components
To add new components from shadcn/ui:
```bash
npx shadcn@latest add [component-name]
```
Example: `npx shadcn@latest add alert-dialog`

### Customization
- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Edit files directly in `components/ui/` (they're yours to customize)
- **Styling**: Use Tailwind classes or extend `tailwind.config` if needed

### Data Management
Currently using static data files in `lib/data/`. To integrate with a backend:
1. Update RTK Query API definitions in `lib/store/api/`
2. Replace static imports with API calls
3. Update components to use Redux selectors/hooks

---

Thank you for Reading!


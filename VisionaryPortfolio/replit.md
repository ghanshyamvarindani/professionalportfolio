# Enterprise Data Strategy Portfolio

## Overview

This is a professional portfolio website showcasing an Enterprise Data Strategy Leader with 21 years of experience in data governance, privacy, compliance, and analytics modernization. The application is built as a single-page portfolio featuring multiple sections with real content from the professional's resume.

**Tech Stack:**
- Frontend: React with TypeScript, Vite build system
- UI Framework: shadcn/ui component library with Radix UI primitives
- Styling: Tailwind CSS with custom design system
- Routing: Wouter (lightweight client-side routing)
- State Management: TanStack Query (React Query)
- Backend: Express.js (minimal, serving static frontend only)
- Database: PostgreSQL via Drizzle ORM (configured but not used - static portfolio)

**Purpose:** Professional portfolio to showcase expertise, experience, and projects for enterprise data strategy leadership roles.

**Current Status:** Fully functional portfolio with real resume content, dark mode support, mobile responsiveness, and smooth navigation.

## Recent Changes

**November 13, 2025:**
- Created complete portfolio website with modern design
- Implemented all sections: Hero, About, Skills, Experience, Projects, Contact, Footer
- Updated content with actual resume information from Servify, AirAsia, and TCS roles
- Added 6 featured projects based on real accomplishments (Data Warehouse, Lakehouse, Fraud Detection, etc.)
- Implemented dark mode toggle with localStorage persistence
- Added mobile-responsive navigation with hamburger menu
- Created smooth scrolling between sections
- Implemented contact form with toast notifications
- Generated professional images for hero background, headshot, and project thumbnails
- Passed comprehensive end-to-end testing

## User Preferences

Preferred communication style: Simple, everyday language.

**Important Notes:**
- Contact email and LinkedIn URLs use professional placeholders - update these with actual contact details before sharing
- All content is static and hardcoded in React components (no backend persistence needed)

## System Architecture

### Frontend Architecture

**Component-Based Design:**
- Single-page application with section-based components (Navigation, HeroSection, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection, Footer)
- All sections composed in a single Home page component
- Reusable UI components from shadcn/ui library located in `client/src/components/ui/`
- Custom portfolio components in `client/src/components/`

**Styling Strategy:**
- Tailwind CSS with custom design tokens defined in CSS variables
- Design system follows "new-york" shadcn style variant
- Comprehensive color system supporting light/dark modes
- Custom spacing, typography, and elevation systems
- Professional portfolio aesthetic inspired by modern SaaS companies (Linear, Stripe, Notion)

**Build System:**
- Vite for fast development and optimized production builds
- TypeScript for type safety across the application
- Path aliases configured (@/ for client/src, @shared for shared code, @assets for assets)
- Development server with HMR (Hot Module Replacement)

### Backend Architecture

**Express Server:**
- Minimal Express.js server primarily serving the Vite-built frontend
- Development mode uses Vite middleware for live reloading
- Production mode serves static files from dist/public
- API route structure in place but currently unused
- Session and request logging middleware configured

**Storage Layer:**
- In-memory storage implementation (MemStorage) for user data
- Interface-based design allowing easy swap to database implementation
- User schema defined with Drizzle ORM but not currently connected to live database

**Server Organization:**
- `server/index.ts` - Main Express application entry point
- `server/routes.ts` - API route registration (placeholder)
- `server/storage.ts` - Storage interface and in-memory implementation
- `server/vite.ts` - Vite development server integration

### Data Storage Solutions

**Database Configuration:**
- PostgreSQL configured via Drizzle ORM
- Connection via Neon serverless driver (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` with users table
- Migrations configured to output to `./migrations` directory
- Database URL expected from environment variable

**Current State:**
- Database schema exists but application doesn't use it (static portfolio)
- Portfolio content includes real professional experience from resume:
  - Servify (Senior Director - Data, AI & Analytics, Dec 2020 - Present)
  - AirAsia Berhad (Manager, Data & Analytics, Mar 2020 - Dec 2020)
  - Tata Consultancy Services (Delivery Head, Oct 2004 - Feb 2020)
- Six featured projects based on actual accomplishments
- Contact information uses professional placeholders (update with real details before publishing)
- No authentication needed - this is a public portfolio site

### Design System

**Typography:**
- Primary font: Inter (Google Fonts)
- Weight range: 400-800 for different text hierarchies
- Responsive font sizing using Tailwind's breakpoint system

**Color System:**
- CSS custom properties for theme colors
- Support for light and dark modes via CSS class toggling
- Semantic color naming (primary, secondary, muted, accent, destructive)
- Separate color definitions for cards, popovers, and backgrounds

**Layout Patterns:**
- Full-width sections with centered max-width containers
- Responsive grid layouts (1-3 columns based on breakpoint)
- Consistent spacing using Tailwind's spacing scale
- Mobile-first responsive design approach

**Component Patterns:**
- Card-based content presentation with hover effects
- Badge components for skills and technologies
- Avatar component for professional headshot
- Toast notifications for user feedback
- Form components with validation support

## External Dependencies

### UI Component Libraries
- **Radix UI**: Headless component primitives for accessibility (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled component system built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Component variant styling utility
- **tailwind-merge & clsx**: Utility functions for conditional CSS classes

### Data & State Management
- **TanStack Query (React Query)**: Server state management and caching
- **React Hook Form**: Form state management with @hookform/resolvers for validation
- **Zod**: Schema validation (used with Drizzle for type safety)

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL client for Neon serverless databases
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store (configured but unused)

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### Routing & Navigation
- **Wouter**: Lightweight client-side routing library (~ 1.5kb)
- Client-side navigation with smooth scrolling between sections
- Single route defined (home page) with 404 fallback

### Image Assets
- Generated images stored in `attached_assets/generated_images/`
- Professional headshot, hero background, and project thumbnails
- Images imported directly in components via Vite's asset handling

### Google Fonts
- Inter font family loaded via Google Fonts CDN
- Weights: 400, 500, 600, 700, 800
- Font display strategy: swap for performance

### Build & Deployment
- Production build concatenates frontend (Vite) and backend (ESBuild)
- Output: `dist/public` for frontend, `dist/index.js` for backend
- Node.js runtime required for production server
- Environment variables: DATABASE_URL (for PostgreSQL connection)
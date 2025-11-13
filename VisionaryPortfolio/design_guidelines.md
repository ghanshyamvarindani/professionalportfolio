# Design Guidelines: Enterprise Data Strategy Leader Portfolio

## Design Approach
**Reference-Based Approach** drawing from modern professional portfolios (Linear, Stripe, Notion) that balance sophistication with clarity. This portfolio requires a design that conveys authority, expertise, and innovation while remaining approachable and scannable.

## Typography System
- **Primary Font**: Inter or Work Sans (Google Fonts) - modern, professional sans-serif
- **Display/Headings**: 700-800 weight for impact
  - Hero name: 4xl-6xl (responsive)
  - Section headers: 3xl-4xl
  - Subsection titles: xl-2xl
- **Body Text**: 400-500 weight, base to lg size for optimal readability
- **Accent Text**: 600 weight for emphasis, labels, and skill tags

## Layout System
**Spacing Units**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 for consistency (p-4, gap-8, my-12, py-16, etc.)

**Container Strategy**:
- Full-width sections with centered max-w-6xl content areas
- Hero: Full viewport width with centered max-w-5xl
- Content sections: max-w-6xl with px-4 md:px-8
- Text-heavy sections (About): max-w-4xl for readability

## Component Library

### Hero Section (Full Viewport)
- Large hero image background (professional executive/tech environment) with subtle gradient overlay
- Centered content with name as display text, professional tagline beneath
- Animated fade-in entrance
- Scroll indicator/CTA button with blurred background
- Navigation bar: sticky, transparent initially, solid on scroll

### About Me Section
- Two-column layout (lg breakpoint): Professional headshot left, narrative text right
- Single column on mobile
- Pull quote highlighting unique value proposition
- Stats bar: 21 Years Experience | Global Organizations | Enterprise Scale

### Skills Section
- Multi-column grid layout: 3 columns (lg), 2 columns (md), 1 column (base)
- Skill category cards with icon, title, and competency list
- Categories: Data Governance, Privacy & Compliance, Strategy & Transformation, Analytics & Modernization, Leadership & Culture
- Subtle hover lift effect on cards

### Experience Section
- Timeline layout with vertical line connector
- Each position: Company logo placeholder, title, dates, 3-4 key achievements as bullet points
- Alternating left-right layout on desktop, stacked on mobile
- Achievement highlights with subtle icons

### Projects Section
- Card grid: 3 columns (lg), 2 columns (md), 1 column (base)
- Project cards with placeholder image, title, brief description, tech tags
- "View Details" link with arrow icon (Heroicons)
- 6-8 placeholder projects showcasing major enterprise initiatives

### Contact Section
- Two-column: Contact form left (name, email, message fields), contact info right
- Professional email, LinkedIn profile link
- Simple, clean form design with clear labels
- Submit button with primary CTA styling

### Navigation
- Sticky header with smooth scroll to sections
- Logo/name left, section links right (desktop)
- Hamburger menu for mobile with slide-in drawer
- Active section indicator

### Footer
- Simple, single-row layout
- Copyright, social links (LinkedIn, GitHub if applicable), back-to-top link

## Icons
**Heroicons** (via CDN) for all interface elements, skill categories, and navigation

## Images
**Required Images**:
1. **Hero Background**: Large, high-quality image of modern office/technology environment or abstract data visualization (1920x1080+). Should convey professionalism and enterprise scale
2. **About Me Headshot**: Professional executive portrait (800x800)
3. **Project Placeholders**: 6 placeholder images representing enterprise data projects (use stock photos of dashboards, analytics platforms, data centers)

## Interaction Patterns
- **Scroll Animations**: Subtle fade-up on section entry (intersection observer)
- **Card Hover**: Gentle lift (translate-y) and shadow increase
- **Button Hover**: Scale slightly, maintain accessibility
- **Navigation**: Smooth scroll behavior, active link highlighting
- **Mobile**: Touch-friendly targets (minimum 44px), swipe-enabled project carousel on mobile

## Responsive Breakpoints
- Mobile-first approach
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero scales from 70vh (mobile) to 100vh (desktop)
- Section padding: py-12 (mobile), py-20 (tablet), py-24 (desktop)

## Accessibility
- Semantic HTML throughout
- ARIA labels for navigation and interactive elements
- Keyboard navigation support
- Focus states clearly visible
- Minimum contrast ratios maintained (WCAG AA)
- Form labels properly associated

This design creates a sophisticated, modern portfolio that positions you as a forward-thinking enterprise leader while ensuring your extensive experience and expertise are clearly communicated and easily digestible.
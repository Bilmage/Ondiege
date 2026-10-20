# Target Platform & Tech Stack
Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, Lucide Icons / FontAwesome.

# Project Context
A modern, responsive landing page for a dance studio and performing arts academy using Next.js client and server components.

# Visual & Brand Aesthetics
- Palette: 
  - Background: Light gray / off-white (`bg-neutral-50` / `#F8F8F8`)
  - Primary Text: Dark Charcoal (`text-neutral-900` / `#111111`)
  - Accent Color: Hot Pink / Neon Magenta (`bg-[#FF2A5F]` / `text-[#FF2A5F]`)
- Typography:
  - Headings: Bold, uppercase sans-serif (`font-sans tracking-wider uppercase`)
  - Body: Clean, highly legible sans-serif (`font-normal leading-relaxed text-neutral-600`)
- Vibe: Artistic, dynamic, high-contrast, modern.

# Layout Structure & Component Architecture

1. Header & Navigation (`components/Header.tsx`):
   - Fixed/sticky translucent header (`backdrop-blur-md bg-white/80`).
   - Left: Logo component.
   - Center: Horizontal nav links (`HOMES`, `PAGES`, `EVENTS`, `PORTFOLIO`, `BLOG`, `SHOP`, `ELEMENTS`).
   - Right: Search modal trigger, slide-out drawer trigger, and a Shopping Cart icon with a dynamic numeric badge pill.

2. Hero Carousel Section (`components/Hero.tsx`):
   - Next.js Image background (`fill`, `priority`, object-cover) featuring performance dancers.
   - High-contrast text overlay:
     - Heading: "DANCE AS A FORM OF ART" (`text-5xl md:text-7xl font-extrabold`)
     - Subtitle: "Vibez is a dazzling modern theme designed specifically for all types of dance studios..."
     - Primary Button: Hot pink CTA button ("PURCHASE") with subtle scale hover effect.
   - Next/Previous slide controls on viewport edges.

3. Feature Highlights Grid (`components/Features.tsx`):
   - 6-item responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
   - Items: "EXTENSIVE DOCUMENTATION", "FREE PLUGINS INCLUDED", "WORKING HOURS EVERYDAY", "PERFECT DESIGN", "FULL SHOP FUNCTIONALITY", "EASY TO CUSTOMIZE".
   - Subtle hover elevation and hot pink border accents.

4. Narrative Section (`components/IntroBanner.tsx`):
   - Full-width banner section with header "KNOWLEDGE, EXPERIENCE AND FRESH IDEAS."
   - Paragraph text and CTA button ("PARTICIPATE").

5. Team / Instructors Showcase (`components/Instructors.tsx`):
   - 2-column grid (`grid-cols-1 md:grid-cols-2 gap-8`).
   - Instructor 1: Travis Colderichers - Contemporary Dance Instructor (Photo, short bio, social icons).
   - Instructor 2: Carissa Leadge - Jazz Ballet Teacher (Photo, short bio, social icons).

6. Filterable Gallery / Portfolio (`components/Portfolio.tsx`):
   - State-based filtering (`useState` for category filtering: All, Kids Dance, Latino Dance, Urban Dance).
   - 6-card grid displaying dance styles (Wanderlust, Group Move, Ballet's Finest, Dance Act, Group Dance, Inspirational Move).
   - Hover overlay with category pill and title zoom.

8. Call to Action Banner (`components/CtaCamp.tsx`):
   - Dark background container.
   - Title: "DANCE COMPETITION CAMP. TRAIN YOUR SKILLS TO THE MAX."
   - Paragraph and "PARTICIPATE" button.

9. Footer (`components/Footer.tsx`):
   - 4-column layout (`grid-cols-1 md:grid-cols-4 gap-8`):
     - About Us (Contact info: Phone `1-677-124-44227`, Address, Email).
     - Twitter / Latest Feed widget.
     - Recent Posts list with dates.
     - Instagram photo grid (`grid-cols-3 gap-2`).
   - Copyright bar bottom row.

---
name: DataFlow
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for high-performance B2B SaaS environments, prioritizing data density without sacrificing clarity. The aesthetic is rooted in **Minimalism** and **Modern Corporate** standards, aiming to evoke a sense of reliability, precision, and effortless efficiency. 

The target audience consists of data analysts and operations managers who require a tool that "gets out of the way." The UI focuses on functional aesthetics: heavy use of whitespace to separate data clusters, a restrained color palette to highlight actionable insights, and a systematic approach to hierarchy that reduces cognitive load during prolonged use.

## Colors
The palette is dominated by a "Slate" scale to provide a sophisticated, neutral backdrop that makes the primary blue pop.

- **Primary (Blue 600):** Reserved for primary actions, active navigation states, and critical data highlights.
- **Surface & Background:** A subtle contrast between the page background (Slate 50) and component surfaces (White) creates natural depth.
- **Borders (Slate 200):** Used for structural definition.
- **Typography:** High contrast Slate 900 for headings ensures immediate scannability, while Slate 500 is used for secondary metadata and labels to maintain visual hierarchy.

## Typography
Inter is used exclusively for its exceptional legibility in digital interfaces and its neutral, systematic character. 

The type scale is tight to accommodate data-heavy tables and dashboards. We use a slight negative letter-spacing on larger headings to maintain a modern, "tucked" look. Labels utilize a medium weight and slight tracking to remain legible at small sizes (12px), specifically for table headers and form captions.

## Layout & Spacing
This design system employs a **Fixed Grid** model for desktop, centering content within a 1440px max-width container to prevent line-lengths from becoming unreadable on ultra-wide monitors. 

- **Grid:** 12-column system with 24px gutters.
- **Rhythm:** An 8px linear scale (4px for micro-adjustments) governs all padding and margins. 
- **Adaptation:** On mobile, side margins shrink to 16px, and complex data tables transition to card-based layouts or horizontal-scroll views. Sidebars collapse into a "hamburger" menu or a bottom navigation bar depending on the depth of the application hierarchy.

## Elevation & Depth
Depth is achieved primarily through **Tonal Layers** and **Subtle Shadows**. 

- **Level 0 (Background):** Slate 50. Flat.
- **Level 1 (Cards/Surface):** White background with a 1px Slate 200 border and a "sm" shadow (0 1px 2px 0 rgba(0, 0, 0, 0.05)).
- **Level 2 (Dropdowns/Modals):** White background with a "md" shadow (0 4px 6px -1px rgba(0, 0, 0, 0.1)) to indicate a clear lift above the page surface.

Avoid heavy blurs or colorful glows; the shadows should feel like natural ambient occlusion, reinforcing the physical stack of the UI.

## Shapes
The design system utilizes a "Rounded" (0.5rem / 8px) corner radius as the standard for all primary UI elements.

- **Standard (8px):** Buttons, Input Fields, and Cards.
- **Large (16px):** Large containers or featured dashboard modules.
- **Full (Pill):** Used exclusively for status badges and tags to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons use the Blue 600 fill with white text. Secondary buttons use a white fill with a Slate 200 border and Slate 900 text. Padding should be 8px (v) and 16px (h).
- **Input Fields:** 1px Slate 200 border, White background. On focus, the border shifts to Blue 600 with a 2px soft blue ring (focus-visible).
- **Cards:** The core building block. Use a 1px Slate 200 border and the "Level 1" shadow. Headers within cards should have a subtle bottom border to separate titles from content.
- **Chips/Badges:** Small, pill-shaped elements. Use a light tinted background (e.g., Blue 50 for info, Green 50 for success) with matching high-contrast text.
- **Lists:** Clean rows with 1px bottom borders. Hover states should use Slate 50 to indicate interactivity without being jarring.
- **Data Tables:** High density. Use `label-md` for headers in Slate 500. Cell text uses `body-md` in Slate 900. No vertical borders; use horizontal dividers only.
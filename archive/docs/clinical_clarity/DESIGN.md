---
name: Clinical Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#40484e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#70787e'
  outline-variant: '#c0c7ce'
  surface-tint: '#1b6589'
  primary: '#004460'
  on-primary: '#ffffff'
  primary-container: '#0a5c80'
  on-primary-container: '#94d3fc'
  inverse-primary: '#8fcef7'
  secondary: '#006b54'
  on-secondary: '#ffffff'
  secondary-container: '#6ef7ce'
  on-secondary-container: '#007058'
  tertiary: '#003d82'
  on-tertiary: '#ffffff'
  tertiary-container: '#0054ae'
  on-tertiary-container: '#b4ccff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#8fcef7'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#72fad1'
  secondary-fixed-dim: '#51ddb5'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#00513f'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#004590'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: 3.5rem
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.03em
  metric-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
---

## Brand & Style
The design system embodies calm authority, clinical precision, and compassionate warmth. It serves patients, wellness seekers, and healthcare providers who require immediate, low-stress comprehension of vital health metrics and care workflows.

The visual direction merges **Modern Corporate Precision** with **Soft Tactile Humanism**:
- Interfaces maintain expansive, breathable whitespace to actively reduce cognitive load and medical anxiety.
- Structural elements convey reliability through architectural precision, balanced by organic, soft corner radii that make health tracking approachable.
- Visual feedback prioritizes legibility, unambiguous state transitions, and comforting, deliberate interactions over playful excess.

## Colors
The palette balances clinical gravitas with revitalizing wellness energy:

- **Primary (`#0A5C80` - Deep Oceanic Blue):** Anchors critical navigation, primary calls to action, brand marks, and key clinical milestones. Communicates institutional trust, stability, and medical authority.
- **Secondary (`#0EB590` - Restorative Mint):** Applied to wellness metrics, positive health vectors, success confirmations, medication streaks, and active biometric statuses.
- **Tertiary (`#2F76DC` - Active Cobalt):** Governs interactive utility controls, secondary links, appointment management, and informational notifications.
- **Neutral (`#64748B` - Slate Anchor):** Governs muted metadata, supportive copy, inactive borders, and structure. Grounded against neutral slate surface backings (`#F8FAFC` base background; `#FFFFFF` surface layer).
- **Semantic Overrides:** Critical alerts and contraindications use `#E11D48` (Crimson Care), while pending lab schedules or cautionary states map to `#D97706` (Amber Diagnostic).

## Typography
Plus Jakarta Sans is utilized across all typographic levels to establish immediate legibility, warm human geometry, and clinical clarity.

- **Display & Headlines:** Used for health summaries, major vitals, and consultation dashboards. Characterized by negative letter tracking to retain tightness and density.
- **Biometric Metric Display:** Dedicated scale role (`metric-display`) designed for heart rate readouts, glucose numbers, and sleep duration values.
- **Body & Supporting Copy:** Generous line heights ensure uninterrupted reading under stress or while moving. Contrast ratios strictly adhere to WCAG AAA standards across all light-slate surfaces.

## Layout & Spacing
The layout relies on a fluid grid model driven by an 8pt base unit (with a 4pt sub-grid for inline metadata and micro-indicators).

- **Mobile Viewports (<640px):** 4-column fluid layout with a `margin` of `1rem` and an inner `gutter` of `1rem`. Content stretches edge-to-edge within cards to maximize thumb ergonomics and quick scans.
- **Tablet Viewports (640px–1024px):** 8-column layout with `gutter-tablet` of `1.5rem` and `margin-tablet` of `2rem`. Allows split-pane charting and side-by-side metric dashboards.
- **Desktop/Clinical Portals (>1024px):** 12-column fixed-max layout (max-width `1280px`) with `gutter-desktop` of `2rem` and `margin-desktop` of `3rem`, framing detailed longitudinal patient graphs and consultation panels.
- **Component Flow:** Vertical rhythm strictly adheres to `space-md` for standard card contents and `space-xl` between modular diagnostic clusters.

## Elevation & Depth
Depth is rendered through **tonal surface stacking** paired with **ambient medical-tinted shadows**, eliminating dark, muddy drop-shadows.

- **Canvas Base:** `#F8FAFC` (Cool Slate Canvas). Provides a glare-reducing backdrop.
- **Surface Level 1 (Default Cards, App Bar):** Solid `#FFFFFF` combined with a soft ambient border: `1px solid rgba(226, 232, 240, 0.8)`. Shadow: `0 2px 8px -2px rgba(10, 92, 128, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)`.
- **Surface Level 2 (Floating Action Trays, Active Appointments):** `#FFFFFF` raised with `0 8px 24px -4px rgba(10, 92, 128, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)`.
- **Surface Level 3 (Emergency Prompts, Modal Sheets):** `#FFFFFF` paired with an ambient tinted diffusion: `0 20px 32px -8px rgba(15, 23, 42, 0.12), 0 4px 12px 0 rgba(10, 92, 128, 0.06)`.
- **Active Glass Overlays:** Header search bars and sticky medication trackers use backdrop filters (`backdrop-filter: blur(12px)`) with an 85% alpha fill (`rgba(255, 255, 255, 0.85)`).

## Shapes
The design system deploys a Level 2 (Rounded) curvature paradigm to evoke organic approachability, safety, and modern software polish.

- **Base Components:** Inputs, actionable list rows, and small buttons use `0.5rem` (`rounded`).
- **Cards & Dashboard Panels:** Clinical summary containers, appointment previews, and data charts use `1rem` (`rounded-lg`).
- **Modals & Slide-Over Trays:** Bottom sheets and full-scale diagnostic cards feature `1.5rem` (`rounded-xl`) top corners.
- **Status Pills & Chips:** Micro-indicators, active filter chips, and vital trend badges maintain a continuous full pill radius (`9999px`).

## Components

### Buttons
- **Primary:** Background in primary blue (`#0A5C80`), high-contrast white text, `height: 48px`, `padding: 0 24px`, shape `rounded` (`0.5rem`). Elevation uses subtle primary glow on hover.
- **Secondary / Wellness:** Background in soft mint tint (`rgba(14, 181, 144, 0.12)`), text in `#0B7D63`, border `1px solid rgba(14, 181, 144, 0.25)`.
- **Tertiary / Ghost:** Transparent background, slate-700 label, states signaled by soft slate-100 hover fills.

### Cards & Vitals Modules
- Cards feature a `#FFFFFF` fill over the `#F8FAFC` background with a crisp border (`1px solid #E2E8F0`).
- Internal layout enforces `space-lg` padding. Health indicator headers display small monochrome icon badges paired with status chips.

### Chips & Health Indicators
- **Trend Chip:** Pill-shaped (`9999px`), `space-xs` vertical padding, `space-sm` horizontal padding. Displays directional icon (e.g., heart rate change) alongside bold value.
- **Color Coding:** Mint (`#0EB590`) background at 12% opacity for positive status; Amber (`#D97706`) at 12% opacity for pending labs; Crimson (`#E11D48`) at 12% opacity for attention triggers.

### Input Fields
- Container height of `48px`, corner radius `0.5rem`, border `1.5px solid #CBD5E1`, background `#FFFFFF`.
- **Active State:** Smooth transition to `border-color: #0A5C80` with an outer focus halo of `0 0 0 3px rgba(10, 92, 128, 0.15)`. Floating labels utilize `label-sm` in neutral slate.

### Checkboxes & Radio Buttons
- `20px x 20px` with a `0.25rem` radius for checkboxes and full circle for radios.
- Unchecked: `1.5px solid #94A3B8`.
- Checked: `#0A5C80` fill with an animated white check vector or inner dot.

### Lists
- Grouped within `rounded-lg` surface cards. Dividers use hairline borders (`1px solid #F1F5F9`) indented past leading icons (`56px` inset). Touch targets are standardized to a minimum of `56px` vertical height.

### Specialized Health Components
- **Dosage Streak Tracker:** Horizontal scroll chain of circular nodes representing days, shifting from outline to secondary mint fill upon intake verification.
- **Range Gauge:** Continuous horizontal progress track (`height: 8px`, `rounded: 9999px`) featuring a three-tone gradient (Mint-Amber-Crimson) with a floating sliding indicator pinpointing current patient biomarker levels.
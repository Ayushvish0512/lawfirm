# Design System Guidelines

This document outlines the visual variables and rules for the React/Vite premium business website structure to ensure high consistency and human-coded premium aesthetics.

## Branding Color Palette
We establish an executive, high-trust branding palette:
- **Primary Navy (`--color-primary` / `#0a2540`)**: Used for background, footers, headers, and core visual components.
- **Gold Accent (`--color-accent` / `#c5a880`)**: Used for highlights, buttons, cards, eyebrows, and focus indicators.
- **Neutral Backgrounds**: Pure white for primary layout, surface-light grey (`--color-surface` / `#f8fafc`) for alternating sections, and soft slate (`--color-surface-muted` / `#f1f5f9`).

## Typography
- **Headings (H1 - H6)**: Rendered in **Playfair Display** (Serif) to convey traditional luxury, trust, and professionalism.
- **Body & Controls**: Rendered in **Inter** (Sans-Serif) to ensure readability, modernization, and clean interactive elements.

## Layout & Components
To ensure consistent alignment across all pages, use these layout containers strictly:
1. **`SiteLayout`**: Standard wrap including `Header` and `Footer`.
2. **`Section`**: For layout bands (`default`, `surface`, `muted`, `primary`).
3. **`Container`**: Content width boundaries (`wide` = 1200px, `medium` = 900px, `text` = 720px).
4. **`SectionHeading`**: Unified margins, eyebrows, and center/left alignments.
5. **`PageHero`**: Alternating background hero banners with top/bottom padding offsets.
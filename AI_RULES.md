# AI Development Rules

## Architecture

This is a simple React/Vite law firm website. Keep the structure flat and minimal.

### Do NOT create
- `templates/` directory (no ArticlePage, ListingPage, DetailPage, FormPage)
- `components/ui/Modal`, `Badge`, `Tabs`, `Accordion`, `Table`, `Loader`, `Checkbox`, `Alert`
- `app/providers/` directory
- `services/` directory (apiClient, analytics)
- `utils/` directory
- `hooks/` directory
- `api/` directory

### Required structure
```
src/
├── assets/ (fonts, images, icons)
├── components/ (Header, Footer, Button, Container, Section, SectionHeading, SEO)
├── config/ (navigation.js, site.js)
├── pages/ (Home, About, Services, Contact)
├── styles/ (tokens.css, fonts.css, reset.css, globals.css, index.css)
├── App.jsx
└── main.jsx
```

## Typography

- **Font "tahoma"**: Do NOT hallucinate font files, packages, or CDN links.
  - If font files are not present in `src/assets/fonts/Tahoma/`, use system fonts as fallback.
  - Only uncomment `@font-face` in `fonts.css` when actual `.woff2` files are provided.
- **Headings (h1-h6)**: Use `--font-serif` (Playfair Display).
- **Body text**: Use `--font-primary` (Inter).

## Colors

All colors must come from `tokens.css` CSS custom properties. Never use hardcoded hex values in components.

- Primary: `--color-primary` (Navy #0a2540)
- Accent: `--color-accent` (Gold #c5a880)

## Header Rules

The header has 3 jobs: identity, navigation, conversion.

Navigation items: Home, About, Services, Contact

CTA button: "Book a Consultation"

Do NOT add: Portfolio, My Work, Hire Me, Freelance, Resources (unless content exists).

## CSS

- Use CSS Modules (`.module.css`) for all components.
- Use CSS custom properties from `tokens.css` for all values.
- Never use global class name strings.

## Development Order

1. Finalize brand name
2. Finalize header tabs
3. Finalize typography scale
4. Finalize colors
5. Build Header
6. Build Container
7. Build Button
8. Build Footer
9. Build Home page
10. Build remaining pages

## Language

Use professional legal positioning. Avoid freelancer/portfolio language.

- ✅ Services, Practice Areas, Legal Expertise, Consultation
- ❌ My Work, Portfolio, Projects, Hire Me, Freelance

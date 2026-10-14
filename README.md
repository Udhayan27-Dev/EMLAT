# Electromagnetic Lift-Assisted Transport

> A 3-metre actively controlled linear transport track for material handling.

Showcase website for the five-person student engineering project, presenting electromagnetic analysis, concept selection, system design, validation planning, timeline, lab media, and team roles.

---

## Technical Stack & Architecture

- **Framework:** Astro (Static Site Generation, zero runtime JavaScript overhead by default)
- **Styling:** Custom CSS design system using tokens (`tokens.css`, `global.css`) following the **Impeccable** design framework
- **Aesthetic:** *The Signal Bench* — CRT oscilloscope / scientific instrument theme with phosphor green traces on dark glass, amber telemetry readouts, etched graticules, and responsive technical typography (`Orbitron`, `Source Code Pro`, `Source Sans 3`)
- **Data Architecture:** Fully decoupled content stored in `/src/content/*.json` files for non-developer team editing
- **Charts & Schematics:** Hand-crafted vector SVGs mapped directly to spreadsheet parametric models

---

## Directory Structure

```text
├── _source/               # Git-ignored raw project calculation sheets & presentations
├── public/
│   ├── media/
│   │   ├── images/        # Video posters & vector assets
│   │   └── videos/        # Web-optimized lab demonstrations & CAD animations
├── src/
│   ├── components/        # Section components
│   │   ├── NavBar.astro
│   │   ├── HeroSection.astro
│   │   ├── ProblemSection.astro
│   │   ├── ArchitectureSection.astro
│   │   ├── ElectromagneticsSection.astro
│   │   ├── SystemDesignSection.astro
│   │   ├── ValidationSection.astro
│   │   ├── TimelineSection.astro
│   │   ├── GallerySection.astro
│   │   ├── TeamSection.astro
│   │   └── FooterSection.astro
│   ├── content/           # Content JSON files (easily editable by team)
│   │   ├── site.json
│   │   ├── specs.json
│   │   ├── validation.json
│   │   ├── timeline.json
│   │   ├── gallery.json
│   │   └── team.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── PRODUCT.md             # Product requirements and design contracts
└── README.md
```

---

## Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build production static website (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## Updating Project Content

Team members can update figures, timeline statuses, or test specifications simply by editing the corresponding JSON file in `src/content/`:
- `specs.json`: Core scores, force model constants, voltage parametric sweep results, budget breakdown.
- `validation.json`: Test procedures (TC-AMF-001 through 004) and acceptance thresholds.
- `timeline.json`: Workstream modules, task statuses (`Completed`, `In Progress`, `Stuck`, `Yet to Start`).
- `gallery.json`: Video items, captions, and poster frames.
- `team.json`: Member roles and subsystem responsibilities.

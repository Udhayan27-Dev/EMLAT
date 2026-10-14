# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro (static site generator) with TypeScript and vanilla CSS. All content in `/src/content/*.json` files so the team can update without touching components. Deployed to GitHub Pages or Vercel (both zero-config with Astro).

## Users

**Primary:** Recruiters, professors, hackathon judges, and competition evaluators who need to assess the team's technical depth and engineering rigour — they may spend 60 seconds skimming or 10 minutes verifying numbers.

**Secondary:** Engineers and makers who want to understand the electromagnetic system design and learn from the trade-off decisions.

## Product Purpose

A single-page showcase that presents an electromagnetic lift-assisted linear transport system built by a five-person student engineering team. The site proves the team can do rigorous systems engineering — from concept selection through force modelling and validation planning — in a way a non-specialist can follow quickly and a specialist can verify.

## Positioning

Real engineering data, all of it — concept selection scores, force calculator results, weighted core comparison, full V&V test plan, timeline with honest statuses — presented with editorial clarity. No hype, no invented results. Validation tests are planned, not achieved; the site says so plainly.

## Operating Context

Likely viewed on a laptop during a review panel or on a phone at a demo event. Judges scan the hero to decide whether to stay. The team shows the site live during pitches. Content is edited by the team (Udhayan, Nirmal, others) without a developer's help.

## Capabilities and Constraints

- Static site: no backend, no database, no server-side processing
- All charts hand-rolled from spreadsheet data (no Excel screenshots)
- Videos: muted, looping, with poster frames; lazy-loaded below the fold
- No external font stylesheets (all fonts self-hosted for privacy and performance)
- Responsive from 360 px phone to 1600+ px desktop
- Accessibility: WCAG AA contrast, semantic landmarks, keyboard-operable controls, meaningful alt text
- Team members: Srikanth (Visionary & Lead), Udhayan (Firmware & Embedded), Mithra (Hardware & Technical), Darshan (Hardware & Technical), Nirmal (Design)
- No portrait photos available; initials monograms used

## Brand Commitments

- **Project title:** "Electromagnetic Lift-Assisted Transport" (always this; never a made-up brand name)
- **Subtitle:** "A 3-metre actively controlled linear transport track for material handling"
- **Voice:** precise, calm, confident, plain English; no hype words
- **Banned strings (never appear anywhere on site or in code):** M&M, M & M, M_M, MnM, Forge (any casing)

## Evidence on Hand

- Spreadsheet 1: Concept Rating (scores), V&V Test Cases (test steps, pass criteria), Coil Force Calculator (voltage comparison), Core Envelope Validations (weighted engineering ratings), Electromagnet Calculator, Graph Data, Parametric Results, Prototype BOM
- Spreadsheet 2: Project timeline with workstream statuses
- PPT (60 slides): problem statement, research, concept animations, test results (preliminary), progress tracker
- 7 video files: Blender technical animation, propulsion prototype demo, performance demos, mechanical assembly

## Product Principles

1. **Accuracy over polish.** Only state facts from the source files. If a result is pending, say so.
2. **Show the work.** Trade-off reasoning (why 24 V, why E-core, why PM mover) is as important as the conclusion.
3. **Editable by the team.** All numbers and text live in JSON — no one should need to touch component code to update a measurement.
4. **Fast and accessible.** 95+ Lighthouse on a mid-range phone profile. Every visitor, regardless of assistive technology, can read the full site.
5. **One confident accent.** The design serves the content; decoration that competes with the data diagrams is removed.

## Accessibility & Inclusion

WCAG AA minimum. One `h1` per page. Logical heading order. Visible keyboard focus states. Meaningful alt text on all images and videos. Captions or transcripts where videos carry spoken information. `prefers-reduced-motion` respected.

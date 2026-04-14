# Soothewise

## What it is
Soothewise is a private, culturally grounded mental wellness platform built for Nigeria and Africa. It combines smart emotional triage with human-centered care pathways, including self-help modules, journaling, and therapist escalation.

## Quick Start (3 commands to running app)
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## Architecture overview
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Frontend-first UI with local mock content
- AI prompt system in `prompts/`
- Brutalist design system enforced in `styles/globals.css`

## Design system
Neo-brutalist Material 3 with a vibrant yellow base. All cards, buttons, and inputs use 3px borders and offset shadows.

## Environment setup
Copy `.env.example` to `.env` if you want to customize the public app URL. The current app does not require a database or Supabase setup.

## AI configuration
The AI client is currently a placeholder and does not require backend configuration.

## Payments
Payments are not wired to a live backend in this build.

## PWA testing
Run `npm run dev` and test in Chrome with Lighthouse.

## Deployment to Vercel
Push to GitHub and import into Vercel. No Supabase database or Prisma migration step is required.

## Demo content
Therapist cards, dashboard summaries, and onboarding flows use local sample content.

## Contributing
Open a PR with concise scope and screenshots for UI changes.

## Safety policy
Soothewise prioritizes user safety. All crisis-sensitive flows must be reviewed and logged.

## License
TBD

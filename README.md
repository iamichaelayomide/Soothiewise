# Soothewise

## What it is
Soothewise is a private, culturally grounded mental wellness platform built for Nigeria and Africa. It combines smart emotional triage with human-centered care pathways, including self-help modules, journaling, and therapist escalation.

## Quick Start (5 commands to running app)
1. `npm install`
2. `cp .env.example .env`
3. `npx prisma generate`
4. `npx prisma migrate dev`
5. `npm run dev`

## Architecture overview
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Prisma + PostgreSQL
- AI prompt system in `prompts/`
- Brutalist design system enforced in `styles/globals.css`

## Design system
Neo-brutalist Material 3 with a vibrant yellow base. All cards, buttons, and inputs use 3px borders and offset shadows.

## Environment setup
Copy `.env.example` to `.env` and fill in required values.

## Database setup + seeding
- Run `npx prisma migrate dev`
- Run `npm run prisma:seed`

## AI configuration
Edit `OPENAI_API_KEY`, `OPENAI_BASE_URL`, and `OPENAI_MODEL` in `.env`.

## Paystack setup
Set `PAYSTACK_SECRET_KEY` and `PAYSTACK_PUBLIC_KEY` in `.env`.

## PWA testing
Run `npm run dev` and test in Chrome with Lighthouse.

## Deployment to Vercel
Push to GitHub and import into Vercel. Set env vars from `.env.example`.

## Role testing (demo accounts)
- `green_user@demo.com`
- `amber_user@demo.com`

## Contributing
Open a PR with concise scope and screenshots for UI changes.

## Safety policy
Soothewise prioritizes user safety. All crisis-sensitive flows must be reviewed and logged.

## License
TBD

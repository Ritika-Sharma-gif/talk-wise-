# Talkwise

**Different minds. Shared understanding.**

Talkwise is a peer-to-peer learning and conversation platform. People choose a topic they want to understand, say whether they want to learn or help, and get matched with someone compatible for a text, voice, or video conversation.

## Current status

The `feat/talkwise-foundation` branch contains the initial Next.js app foundation and a responsive marketing landing page. Authentication, matching, messaging, and media rooms are planned follow-on milestones and are not implemented yet.

## Planned stack

- Next.js App Router, React, TypeScript
- Tailwind CSS v4
- Supabase Auth, PostgreSQL, and Realtime
- LiveKit for voice/video rooms
- Playwright for end-to-end tests
- GitHub for version control and Vercel for hosting

## Local development

1. Install a current Node.js LTS release.
2. Clone the repository and switch to `feat/talkwise-foundation`.
3. Install dependencies with `npm install`.
4. Run `npm run dev` and open `http://localhost:3000`.
5. Run `npm run lint`, `npm run typecheck`, and `npm run build` before opening a pull request.

Copy `.env.example` to `.env.local` when wiring external services. Fill in your own project values. Never commit `.env.local`, service-role keys, or LiveKit secrets.

## Git workflow

Implement one feature per `feat/...` branch, validate locally, push the branch, inspect the Vercel preview, and merge through a pull request only after review.

## Roadmap

- [x] Initial Next.js structure and responsive landing page
- [ ] Supabase project and secure authentication
- [ ] Profiles and topic preferences
- [ ] Race-safe matching queue and session lifecycle
- [ ] Session-scoped real-time text chat
- [ ] LiveKit voice/video rooms with server-issued tokens
- [ ] Blocking, reporting, feedback, and rate limiting
- [ ] Playwright critical-path tests and production deployment

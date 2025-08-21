This is a production‑grade, résumé‑ready starter for my World of Warcraft guild website. It’s a pnpm + Turborepo monorepo with Next.js (App Router), TypeScript, Prisma + PostgreSQL, tRPC, Tailwind + shadcn/ui, Redis + BullMQ worker, Meilisearch, Docker Compose for local services, and GitHub Actions CI.

Prerequisites:

- Node 20+
- pnpm
- Docker Desktop or compatible

## Quickstart

1. Copy `.env.example` → `.env` and fill values.
2. Start services: `docker compose -f infra/docker/compose.yml up -d`
3. Install deps: `pnpm install`
4. Migrate DB: `pnpm db:migrate`
5. Dev servers: `pnpm dev` (web + worker)

Open http://localhost:3000

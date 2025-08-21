This is a production‑grade, résumé‑ready starter for my World of Warcraft guild website. It’s a pnpm + Turborepo monorepo with Next.js (App Router), TypeScript, Prisma + PostgreSQL, tRPC, Tailwind + shadcn/ui, Redis + BullMQ worker, Meilisearch, Docker Compose for local services, and GitHub Actions CI.

Prerequisites:

- Node 20+
- pnpm
- Docker Desktop or compatible

Repo Structure:
.
├─ apps/
│ ├─ web/ # Next.js 14 app (SSR/ISR)
│ └─ worker/ # BullMQ worker for jobs/webhooks/syncs
├─ packages/
│ ├─ api/ # tRPC routers (server-side)
│ ├─ db/ # Prisma schema & client
│ ├─ ui/ # Shared UI (shadcn components)
│ └─ utils/ # Shared types, zod schemas, helpers
├─ infra/
│ └─ docker/compose.yml# Postgres, Redis, Meilisearch, Mailhog
├─ .github/workflows/ci.yml
├─ .vscode/ # Editor settings & launch configs
├─ turbo.json
├─ package.json
├─ pnpm-workspace.yaml
├─ tsconfig.base.json
├─ .eslintrc.cjs
├─ .prettierrc
├─ .env.example
└─ README.md

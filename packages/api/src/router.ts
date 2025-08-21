import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@db/index';


const t = initTRPC.create();
export const appRouter = t.router({
hello: t.procedure
.input(z.object({ name: z.string().optional() }).optional())
.query(({ input }) => ({
message: `For Azeroth, ${input?.name ?? 'champion'}!`
})),
events: t.procedure.query(async () => {
return prisma.event.findMany({ orderBy: { start: 'asc' } });
})
});


export type AppRouter = typeof appRouter;
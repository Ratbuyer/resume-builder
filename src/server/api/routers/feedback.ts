import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const feedbackRouter = createTRPCRouter({
  createFeedback: publicProcedure
    .input(z.object({ text: z.string(), email: z.optional(z.string().email()) }))
    .mutation(({ input, ctx }) => {

      const response = ctx.prisma.feedback.create({
        data: { text: input.text, email: input.email }
      });

      return response;
    }),

  fetchFeedbacks: publicProcedure
    .query(({ ctx }) => {
      const response = ctx.prisma.feedback.findMany();
      return response;
    })

});
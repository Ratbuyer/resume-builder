import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const feedbackRouter = createTRPCRouter({
  createFeedback: publicProcedure
    .input(z.object({ text: z.string(), email: z.optional(z.string().email()) }))
    .mutation(({ input, ctx }) => {

      const text = input.text.length > 500 ? input.text.slice(0, 500) : input.text;
      let email = null;

      if (input.email) {
        email = input.email.length > 100 ? input.email.slice(0, 100) : input.email;
      }

      const response = ctx.prisma.feedback.create({
        data: { text: text, email: email }
      });

      return response;
    }),

  fetchFeedbacks: publicProcedure
    .query(({ ctx }) => {
      const response = ctx.prisma.feedback.findMany();
      return response;
    })

});
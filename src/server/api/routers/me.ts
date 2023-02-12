import { createTRPCRouter, protectedProcedure } from "../trpc";

export const meRouter = createTRPCRouter({
    getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
        try{const user = await ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id,
            },
            select:{
                email:true,
            }
        });
        return user;}
        catch(e){
            console.log("error", e);
        }
    })
});
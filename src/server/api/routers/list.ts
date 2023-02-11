import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const listRouter = createTRPCRouter({
    setListItem: protectedProcedure.input(
        z.object({
            link:z.string()
        })
    ).mutation(async ({ ctx, input}) =>
    {
        try
        {
            const myUser = await ctx.prisma.user.findUnique({
                where:{
                    id:ctx.session.user.id
                },
                select:{
                    list:true
                }
            });
            if (!myUser)
            {
                return console.log("User not found");
            }
            const alreadyInList = myUser? myUser.list.some(el=>el === input.link) :false ;
            if(alreadyInList) return;
            const updatedList = myUser? [...myUser.list, input.link] :[input.link];
            const data = await ctx.prisma.user.update({
                where:{
                    id:ctx.session.user.id
                },
                data:{
                    list:{
                        set:updatedList
                    }
                }
            });
            return data;
           
        } catch (error)
        {
            console.log("error", error);
        }
    }),
    getListItems: protectedProcedure.query(async ({ ctx }) =>{
        try{
            const myUser = await ctx.prisma.user.findUnique({
                where:{
                    id:ctx.session.user.id
                },
                select:{
                    list:true
                }
            });
            if (!myUser)
            {
                return console.log("User not found");
            }
            return myUser.list;
        }
        catch(e){
            console.log(e)
        }
    } ),
    deleteItem: protectedProcedure.input(
        z.object({
            link: z.string()
        })
    ).mutation(async ({ ctx, input }) =>
    {
        try
        {
            const myUser = await ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session.user.id
                },
                select: {
                    list: true
                }
            });
            if (!myUser)
            {
                return console.log("User not found");
            }
            const alreadyInList = myUser ? myUser.list.some(el => el === input.link) : false;
            if (!alreadyInList) return;
            const updatedList = myUser ? myUser.list.filter(el => el !== input.link) :false;
            if(!updatedList) return console.log("updatedList is empty")
            const data = await ctx.prisma.user.update({
                where: {
                    id: ctx.session.user.id
                },
                data: {
                    list: {
                        set: updatedList
                    }
                }
            });
            return data;

        } catch (error)
        {
            console.log("error", error);
        }
    }),

});
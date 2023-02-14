import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const listRouter = createTRPCRouter({
    setListItem: protectedProcedure.input(
        z.object({
            listId:z.string(), 
            link: z.string(), 
        })
    ).mutation(async ({ ctx, input}) =>
    {
        try
        {
            const myList = await ctx.prisma.list.findUnique({
                where:{
                    id:input.listId
                },
                select:{
                    githubUsers:true
                }
            });
            if (!myList)
            {
                return console.log("User not found");
            }
            const alreadyInList = myList.githubUsers.includes(input.link);
            if(alreadyInList) return;
            const updatedList = [...myList.githubUsers, input.link];
            const data = await ctx.prisma.list.update({
                where:{
                    id:input.listId
                },
                data:{
                    githubUsers:{
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
    getListItems: protectedProcedure.input(z.object({listId:z.string()})).query(async ({ ctx, input }) =>{
        try{
            const myList = await ctx.prisma.list.findUnique({
                where:{
                    id:input.listId
                },
                select:{
                    githubUsers:true
                }
            });
            if (!myList) return console.log("User not found");
            return myList.githubUsers;
        }
        catch(e){
            console.log(e)
        }
    } ),
    deleteItem: protectedProcedure.input(
        z.object({
            listId: z.string(),
            link: z.string(),
        })
    ).mutation(async ({ ctx, input }) =>
    {
        try
        {
            const myList = await ctx.prisma.list.findUnique({
                where:{
                    id:input.listId
                },
                select:{
                    githubUsers:true
                }
            });
            if (!myList) return console.log("User not found");
            const updatedList = myList.githubUsers.filter((item) => item !== input.link);
            
            const myNewList = await ctx.prisma.list.update({
                where:{id:input.listId},
                data:{
                    githubUsers:{
                        set:updatedList
                    }
                }
            });
            return myNewList;
           

        } catch (error)
        {
            console.log("error", error);
        }
    }),
    updateListItem: protectedProcedure.input(z.object({listId:z.string(),  title:z.string(), description:z.string()})).mutation(async ({ ctx, input }) =>{
        try{
            const myList = await ctx.prisma.list.update({
                where:{
                    id:input.listId
                },
                data:{
                    title:input.title,
                    description:input.description
                }
            });
            return myList;
        }
        catch(e){
            console.log(e)
        }
    }),
    getCurrentLists: protectedProcedure.query(async ({ ctx }) =>{
        try{
            const myList = await ctx.prisma.list.findMany({
                where:{
                    userId:ctx.session.user.id
                },
                select:{
                    id:true,
                    title:true,
                    description:true
                }
            });
            return myList;
        }
        catch(e){
            console.log(e)
        }
    }),
    createList: protectedProcedure.input(z.object({title:z.string()})).mutation(async ({ ctx, input }) =>{
        try{
            const myList = await ctx.prisma.list.create({
                data:{
                    title:input.title,
                    userId:ctx.session.user.id,
                    description:""
                }
            });
            return myList;
        }
        catch(e){
            console.log(e)
        }
    }
),
    deleteList: protectedProcedure.input(z.object({listId:z.string()})).mutation(async ({ ctx, input }) =>{
        try{
            const myList = await ctx.prisma.list.delete({
                where:{
                    id:input.listId
                }
            });
            return myList;
        }
        catch(e){
            console.log(e)
        }
    }),
}
);
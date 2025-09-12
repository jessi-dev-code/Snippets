"use server"
import { Prisma } from '@/app/_lib/prisma'
import { redirect } from 'next/navigation'

export const saveSnippet =  async (id:number, code :string) =>{
    await Prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
        }
    })
    redirect(`/snippet/new/${id}`)
}

export const deleteeventhandler = async(id:number) =>{
    await Prisma.snippet.delete({
        where:{id}
    })
    redirect("/")
}

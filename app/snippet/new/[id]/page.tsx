
import { Prisma } from '@/app/_lib/prisma';
import { Button } from '@heroui/button';
import Link from 'next/link';
import React from 'react'
import * as actions from "@/actions"
import NotFound from './edit/not-found';
const SnippetDetailpage = async({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id)
    const snippets = await Prisma.snippet.findUnique({
        where:{
            id,
        }
    });
    if(!snippets) return NotFound()
    const deleteeventhandler = actions.deleteeventhandler.bind(null,snippets.id)
  return (
    <>
    <div className='flex justify-between'>
        <div>
            <h1 className='font-mono text-2xl tracking-wide'>{snippets.title}</h1>    
        </div>
        <div className='flex gap-2'>
            <Link href={`/snippet/new/${id}/edit`}>
            <Button size='sm' className='font-medium' >Edit</Button>
            </Link>
            <form action={deleteeventhandler}>
            <Button size='sm' type='submit' className='font-medium' color='danger'>Del</Button>
            </form>
        </div>
    </div>
    <div className='mt-4 bg-gray-900 p-8 px-15 text-gray-50'>
        <pre>
        {snippets.code}
        </pre>
    </div>
    </>
  )
}
 
export default SnippetDetailpage
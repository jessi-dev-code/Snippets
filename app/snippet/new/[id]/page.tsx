
import { Prisma } from '@/app/_lib/prisma';
import { Button } from '@heroui/button';
import Link from 'next/link';
import React from 'react'

const SnippetDetailpage = async({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id)
    const snippets = await Prisma.snippet.findUnique({
        where:{
            id,
        }
    });
    if(!snippets) return <h1>Not Found your data</h1> 
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
            <Button size='sm'  className='font-medium' color='danger'>Del</Button>
        </div>
    </div>
    <div className='mt-4 bg-blue-50 p-8 px-4 text-zinc-500'>
        <pre>
        {snippets.code}
        </pre>
    </div>
    </>
  )
}

export default SnippetDetailpage
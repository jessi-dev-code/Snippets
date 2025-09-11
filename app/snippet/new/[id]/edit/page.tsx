import { Prisma } from '@/app/_lib/prisma';
import Editsnippet from '@/components/editsnippet'
import React from 'react'

const EditPageSnippet = async ({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id)
    const snippets = await Prisma.snippet.findUnique({
            where:{
                id,
            }
        });
        if(!snippets) return <h1>Not Found your data</h1> 
  return (
    <Editsnippet snippet = {snippets}/>
  )
}

export default EditPageSnippet
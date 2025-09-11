
import { Prisma } from '@/app/_lib/prisma'
import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'
import { redirect } from 'next/navigation'
import React from 'react'
const CreateSnippetPage = () => {
    async function createsnippet(formData:FormData){
        "use server"
        const title = formData.get("title") as string
        const code = formData.get("code") as string

        const snippet = await Prisma.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log("created snippet",snippet)
        redirect("/")
    }
  return (

    <>
    <div className='flex justify-between items-center'>

    <h1 className='font-medium text-2xl'>Let's Create</h1>

    </div>

    <form action={createsnippet} className=' mt-6 flex flex-col gap-10'>
      <Input 
        labelPlacement='outside'
        type='text'
        label="Title"
        name="title"
        description="Write the title for the snippet"
        />
      <Textarea
      isRequired
        isClearable
        type='text'
        name='code'
        label="Snippet"
        minRows={10}
        description="write your code snippets here"
        />  
    <Button color='primary' type='submit'>Create</Button>

    </form>

    </>

  )
}

export default CreateSnippetPage
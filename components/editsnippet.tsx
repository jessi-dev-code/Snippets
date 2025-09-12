"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@/app/generated/prisma';
import Link from 'next/link';
import { Button } from '@heroui/button';
import { saveSnippet } from '@/actions';

const Editsnippet = ({snippet}:{snippet:Snippet}) => {
    const [code,setCode] = useState(snippet.code)
    const changeeventhandler  = (value:string = " ") =>{
      setCode(value);
    }
    const saveSnippetAction = saveSnippet.bind(null,snippet.id , code)
  return (
    <>
    <form action={saveSnippetAction} className="flex justify-between items-center mb-10">
      <h1 className='font-medium text-2xl'>Edit your Snippets</h1>
      <Link href="/snippet/new">
      <Button color="success" type='submit'>Save</Button>
      </Link>
      </form >
        <Editor height="60vh" theme='vs-dark' defaultLanguage="typescript" defaultValue={code} 
        onChange={changeeventhandler}
        />
    </>
  )
}

export default Editsnippet
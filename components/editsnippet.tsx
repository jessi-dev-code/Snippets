"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@/app/generated/prisma';

const Editsnippet = ({snippet}:{snippet:Snippet}) => {
    const [code,setCode] = useState(snippet.code)
  return (
        <Editor height="60vh" theme='vs-dark' defaultLanguage="typescript" defaultValue={code} />
  )
}

export default Editsnippet
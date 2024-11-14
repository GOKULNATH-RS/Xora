'use client'

import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import '@/app/globals.css'

export default function TextEditor({
  onChangeFunc,
  NonEditable,
  content
}: {
  onChangeFunc?: React.SetStateAction<any>
  NonEditable?: boolean
  content?: any
}) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: content ? JSON.parse(content) : undefined
  })

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      editable={NonEditable ? false : true}
      onChange={() => {
        if (onChangeFunc) onChangeFunc(JSON.stringify(editor.document))
      }}
    />
  )
}

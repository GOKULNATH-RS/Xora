'use client'

import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import '@/app/globals.css'

export default function TextEditor({
  onChangeFunc
}: {
  onChangeFunc: React.SetStateAction<any>
}) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={() => onChangeFunc(editor.document)}
    />
  )
}

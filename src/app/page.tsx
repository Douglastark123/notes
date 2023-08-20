'use client'

import { FormEvent, useEffect, useRef } from 'react'

import { Editor } from '@/components/Editor'
import EditorStylesBar from '@/components/EditorStylesBar'
import NotesNavigation from '@/components/NotesNavigation'
import { NewYork } from '@/components/UI/NewYork'

interface Note {
  title: string
  content: string
}

export default function Home() {
  const noteTitleRef = useRef<HTMLInputElement | null>(null)
  const noteContentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const storedItem = localStorage.getItem('notes-currentNote')

    if (storedItem && noteTitleRef.current && noteContentRef.current) {
      const note = JSON.parse(storedItem) as Note

      noteTitleRef.current.value = note.title
      noteContentRef.current.textContent = note.content
    }
  }, [])

  const note = {
    title: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(
          'notes-currentNote',
          JSON.stringify({
            title: e.target.value,
            content: noteContentRef.current?.textContent,
          } as Note),
        )
      },
    },
    content: {
      onChange: (e: FormEvent<HTMLDivElement>): void => {
        console.log(noteContentRef.current?.textContent)

        localStorage.setItem(
          'notes-currentNote',
          JSON.stringify({
            title: noteTitleRef.current?.value,
            content: e.currentTarget.textContent,
          } as Note),
        )
      },
    },
  }

  return (
    <div className="flex h-full justify-center">
      <form className="z-0 flex h-full w-11/12 min-w-[460px] max-w-screen-sm flex-col gap-2 py-5">
        <div className="flex gap-2">
          <NewYork.Input
            name="Title"
            type="text"
            placeholder="Title"
            className="border-0 border-b text-3xl font-bold outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            ref={noteTitleRef}
            onChange={note.title.onChange}
          />
        </div>

        <EditorStylesBar />

        <Editor
          placeholder="Your note"
          ref={noteContentRef}
          onInput={note.content.onChange}
        />

        <div className="flex justify-between gap-2">
          <NotesNavigation />

          <NewYork.Button disabled>Publish</NewYork.Button>
        </div>
      </form>
    </div>
  )
}

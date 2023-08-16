import { Editor } from '@/components/Editor'
import EditorStylesBar from '@/components/EditorStylesBar'
import NotesNavigation from '@/components/NotesNavigation'
import { NewYork } from '@/components/UI/NewYork'

export default function Home() {
  return (
    <div className="flex h-full justify-center">
      <form className="z-0 flex h-full w-11/12 min-w-[460px] max-w-screen-sm flex-col gap-2 py-5">
        <div className="flex gap-2">
          <NewYork.Input
            type="text"
            placeholder="Title"
            className="border-0 border-b text-3xl font-bold outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <EditorStylesBar />

        <Editor placeholder="Your note" />

        <div className="flex justify-between gap-2">
          <NotesNavigation />

          <NewYork.Button>Publish</NewYork.Button>
        </div>
      </form>
    </div>
  )
}

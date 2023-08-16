import {
  Bold,
  Code2,
  Italic,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  RemoveFormatting,
  SplitSquareVertical,
  Strikethrough,
  Underline,
} from 'lucide-react'

import { Button } from './UI/NewYork/Button'
import { Toggle } from './UI/Toggle'

const EditorStylesBar = () => (
  <div className="flex justify-between gap-2">
    <Toggle variant="outline" aria-label="Toggle checkbox">
      <ListTodo className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle bold">
      <Bold className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle underline">
      <Underline className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle strikethrough">
      <Strikethrough className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle quote">
      <Quote className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle bold">
      <SplitSquareVertical className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle code">
      <Code2 className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle bulleted list">
      <List className="h-4 w-5" />
    </Toggle>

    <Toggle variant="outline" aria-label="Toggle numbered list">
      <ListOrdered className="h-4 w-5" />
    </Toggle>

    <Button
      variant="outline"
      aria-label="Clear formatting"
      className={`h-10 border
            border-input bg-transparent px-3 hover:bg-accent
            hover:text-accent-foreground focus:bg-slate-400`}
    >
      <RemoveFormatting className="h-4 w-5" />
    </Button>
  </div>
)

export default EditorStylesBar

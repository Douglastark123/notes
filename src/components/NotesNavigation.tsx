'use client'

import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './UI/Popover'
import { NewYork } from './UI/NewYork'
import { Check, ChevronsUpDown, FileText } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './UI/Command'
import { cn } from '@/lib/utils'

const notes = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

const NotesNavigation = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild aria-controls="">
        <NewYork.Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-5" />
            {value
              ? notes.find((note) => note.value === value)?.label
              : 'Select...'}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </NewYork.Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search note..." />
          <CommandEmpty>No note found.</CommandEmpty>
          <CommandGroup>
            {notes.map((note) => (
              <CommandItem
                key={note.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === note.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {note.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default NotesNavigation

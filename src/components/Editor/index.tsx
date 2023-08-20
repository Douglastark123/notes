import React, { HTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.css'

import { cn } from '@/lib/utils'

export type TextAreaProps = HTMLAttributes<HTMLDivElement>

const Editor = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        className={cn(
          `h-full overflow-y-auto break-words rounded-lg border bg-slate-50 p-4 outline-none ${styles.TextArea}`,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Editor.displayName = 'Editor'

export { Editor }

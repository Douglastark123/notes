import React, { HTMLAttributes } from 'react'
import styles from './styles.module.css'

import { cn } from '@/lib/utils'

type TextAreaProps = HTMLAttributes<HTMLDivElement>

export const Editor = ({ className, ...props }: TextAreaProps) => (
  <div
    contentEditable
    suppressContentEditableWarning
    className={cn(
      `h-full overflow-y-auto break-words rounded-lg border bg-slate-50 p-4 outline-none ${styles.TextArea}`,
      className,
    )}
    {...props}
  />
)

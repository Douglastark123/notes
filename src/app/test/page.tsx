'use client'

import { NewYork } from '@/components/UI/NewYork'
import { useRef, useState } from 'react'

export default function Test() {
  // const [greeting, setGreeting] = useState<'hello' | 'hi'>('hello')
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  // const [startTime, setStartTime] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const runTimer = () => {
    const startTime = Date.now()
    if (isRunning) {
      clearInterval(intervalRef.current!)
      setTimeElapsed(0)
    } else {
      setIsRunning(true)
    }
    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      setTimeElapsed(elapsedTime)
    }, 10)
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col gap-2">
        <NewYork.Button className="w-full" onClick={runTimer}>
          Click
          {/* {isRunning ? 'Restart' : 'Start'} */}
        </NewYork.Button>
        <pre className="w-40 border border-black p-4">
          {(timeElapsed / 1000).toFixed(2)}s
        </pre>
      </div>
    </div>
  )
}

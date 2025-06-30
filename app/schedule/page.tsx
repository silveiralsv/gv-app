"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function SchedulePage() {
  const [date, setDate] = useState('')
  const [busy, setBusy] = useState<{start:string,end:string}[]>([])
  const [slots, setSlots] = useState<string[]>([])
  const [selected, setSelected] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!date) return
    fetch(`/api/availability?date=${date}`)
      .then(res => res.json())
      .then(data => {
        setBusy(data.busySlots || [])
        const hours: string[] = []
        for (let h = 9; h < 18; h++) {
          const start = `${h.toString().padStart(2,'0')}:00`
          const end = `${(h+1).toString().padStart(2,'0')}:00`
          const overlaps = (data.busySlots || []).some((b: any) => {
            return (
              b.start?.startsWith(date) &&
              !(b.end <= `${date}T${start}:00` || b.start >= `${date}T${end}:00`)
            )
          })
          if (!overlaps) hours.push(start)
        }
        setSlots(hours)
      })
  }, [date])

  const schedule = async () => {
    if (!selected) return
    const start = `${date}T${selected}:00`
    const endDate = new Date(start)
    endDate.setHours(endDate.getHours() + 1)
    const res = await fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        start,
        end: endDate.toISOString(),
        summary: 'Meeting Request',
      }),
    })
    if (res.ok) {
      setMessage('Meeting scheduled!')
    } else {
      setMessage('Failed to schedule')
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Schedule a Meeting</h1>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border p-2 rounded"
      />
      {slots.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {slots.map(time => (
            <Button
              key={time}
              variant={selected === time ? 'default' : 'secondary'}
              onClick={() => setSelected(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      )}
      {selected && (
        <Button onClick={schedule}>Confirm</Button>
      )}
      {message && <p>{message}</p>}
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { createEvent } from '@/lib/google-calendar'

export async function POST(request: NextRequest) {
  const data = await request.json()
  const { start, end, summary, description } = data
  if (!start || !end || !summary) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }
  try {
    const event = await createEvent(new Date(start), new Date(end), summary, description)
    return NextResponse.json(event)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}

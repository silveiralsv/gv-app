import { NextRequest, NextResponse } from 'next/server'
import { listEvents } from '@/lib/google-calendar'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  if (!date) {
    return NextResponse.json({ error: 'Missing date' }, { status: 400 })
  }
  try {
    const events = await listEvents(date)
    const busySlots = events.map(e => ({
      start: e.start?.dateTime,
      end: e.end?.dateTime,
    }))
    return NextResponse.json({ busySlots })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

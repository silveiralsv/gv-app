import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/calendar']

function getClient() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    SCOPES
  )
  return google.calendar({ version: 'v3', auth })
}

export async function listEvents(date: string, calendarId = process.env.GOOGLE_CALENDAR_ID!) {
  const calendar = getClient()
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  const end = new Date(start)
  end.setDate(start.getDate() + 1)
  const res = await calendar.events.list({
    calendarId,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  })
  return res.data.items || []
}

export async function createEvent(
  start: Date,
  end: Date,
  summary: string,
  description = '',
  calendarId = process.env.GOOGLE_CALENDAR_ID!
) {
  const calendar = getClient()
  const res = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary,
      description,
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
    },
  })
  return res.data
}

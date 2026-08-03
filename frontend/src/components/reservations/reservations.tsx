import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import {
  createViewDay,
  createViewWeekAgenda,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import 'temporal-polyfill/global'
import { Temporal } from 'temporal-polyfill'
import { useState, useEffect } from 'react'


 
export function MyCalendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeekAgenda(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: Temporal.ZonedDateTime.from('2026-07-16T10:05:00-05:00[America/Chicago]'),
        end: Temporal.ZonedDateTime.from('2026-07-16T10:35:00-05:00[America/Chicago]'),
      },
    ],
    plugins: [eventsService]
  })
 
  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])
 
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 

import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import {
  createViewDay,
  createViewWeekAgenda,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import type {  CalendarEvent } from '@schedule-x/calendar'
import 'temporal-polyfill/global'
import { Temporal } from 'temporal-polyfill'
import { useState, useEffect } from 'react'
import { useTheme } from '../theme-provider'

const mockEvents = [
  {
      id: '1',
      title: 'Event 1',
      start: Temporal.ZonedDateTime.from('2026-08-01T09:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-01T11:30:00-05:00[America/Chicago]'),
      calendarId: 'personal'
  },
  {
      id: '2',
      title: 'Event 2',
      start: Temporal.ZonedDateTime.from('2026-08-01T13:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-01T16:00:00-05:00[America/Chicago]'),
      calendarId: 'work'
  },
  {
      id: '3',
      title: 'Event 3',
      start: Temporal.ZonedDateTime.from('2026-08-02T08:30:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-02T12:00:00-05:00[America/Chicago]'),
      calendarId: 'personal'
  },
  {
      id: '4',
      title: 'Event 4',
      start: Temporal.ZonedDateTime.from('2026-08-02T14:15:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-02T16:45:00-05:00[America/Chicago]'),
      calendarId: 'work'
  },
  {
      id: '5',
      title: 'Event 5',
      start: Temporal.ZonedDateTime.from('2026-08-03T09:45:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-03T12:15:00-05:00[America/Chicago]'),
      calendarId: 'personal'
  },
  {
      id: '6',
      title: 'Event 6',
      start: Temporal.ZonedDateTime.from('2026-08-03T15:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-03T18:30:00-05:00[America/Chicago]'),
      calendarId: 'work'
  },
  {
      id: '7',
      title: 'Event 7',
      start: Temporal.ZonedDateTime.from('2026-08-04T10:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-04T12:30:00-05:00[America/Chicago]'),
      calendarId: 'personal'
  },
  {
      id: '8',
      title: 'Event 8',
      start: Temporal.ZonedDateTime.from('2026-08-04T13:30:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-04T17:30:00-05:00[America/Chicago]'),
      calendarId: 'work'
  },
  {
      id: '9',
      title: 'Event 9',
      start: Temporal.ZonedDateTime.from('2026-08-05T08:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-05T10:30:00-05:00[America/Chicago]'),
      calendarId: 'personal'
  },
  {
      id: '10',
      title: 'Event 10',
      start: Temporal.ZonedDateTime.from('2026-08-05T14:00:00-05:00[America/Chicago]'),
      end: Temporal.ZonedDateTime.from('2026-08-05T18:00:00-05:00[America/Chicago]'),
      calendarId: 'work'
  }
]

const customComponents = {
}

export function MyCalendar() {
  const eventModal = createEventModalPlugin()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeekAgenda(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    theme: "shadcn",
    isDark,
    calendars: {
      personal: {
        colorName: 'personal',
        lightColors: {
          main: '#f9d71c',
          container: '#fff5aa',
          onContainer: '#594800',
        },
        darkColors: {
          main: '#fff5c0',
          onContainer: '#fff5de',
          container: '#a29742',
        },
      },
      work: {
        colorName: 'work',
        lightColors: {
          main: '#1ca7f9',
          container: '#aad9ff',
          onContainer: '#00355a',
        },
        darkColors: {
          main: '#c0e6ff',
          onContainer: '#deefff',
          container: '#427ba2',
        },
      },
    },
    plugins: [eventModal],
    events: mockEvents,
  })
  
  useEffect(() => {
    calendar?.setTheme(isDark ? 'dark' : 'light')
  }, [isDark, calendar])

  return (
    <div className='py-3' style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ScheduleXCalendar
        customComponents={customComponents}
        calendarApp={calendar} />
    </div>
  )
}
 
